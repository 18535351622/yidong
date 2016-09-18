$(function($, window, document, undefined) {

	var slider = new Slider($('#rentcarBannerBg'), {
		time: 5000,
		delay: 400,
		event: 'hover',
		auto: true,
		mode: 'fade',
		controller: $('#bannerCtrl'),
		activeControllerCls: 'active'
	});

	var timeoutId,xhr;
	
	var cid = getCookie('cid');
	var poi = $('#poi').val();
	if(poi == null || poi == '') {
		poi = 'north_america';
	}
	if (cid != null) {
		getFaqList(poi, '');
	} else {
		getFaqList(poi, '_blank');
	}

	//rent car select
	$('#pickUpLocationID').wqCitySelect({
		title: '取车地点',
		targetId: 'pickUpLocationSelect',
		poi: $('#poi').val(),
		continent: $('#continent').val(),
		pickUpEle: ['pickUpLocationID', 'pickUpLocationCity', 'pickUpLocationStore'],
		dropOffEle: ['dropOffLocationID', 'dropOffLocationCity', 'dropOffLocationStore']
	});

	$('#dropOffLocationID').wqCitySelect({
		title: '还车地点',
		targetId: 'dropOffLocationSelect',
		poi: $('#poi').val(),
		continent: $('#continent').val(),
		pickUpEle: ['dropOffLocationID', 'dropOffLocationCity', 'dropOffLocationStore'],
		dropOffEle: []
	});
	$('.search_input').each(function(){
		var target_search_input = $(this);
		target_search_input.val(target_search_input.attr('data-original')).next().html('');

		//search input
		target_search_input.focus(function() {
			var _this = $(this),
				original = _this.attr('data-original'),
				value = _this.val();

			if (original == value) {
				_this.val('');
			}
		}).blur(function() {
			var _this = $(this),
				original = _this.attr('data-original'),
				value = _this.val();

			if (value && value != original) {
				return;
			} else if (!value) {
				_this.val(original);
				
				if(target_search_input.closest('.search_wrapper').siblings('.city_en').text() != ''){
					target_search_input.val('')
				}
				target_search_input.closest('.search_wrapper').siblings('.city_en').show()
				target_search_input.closest('.search_wrapper').siblings('.city_cn').show()
			}
		}).keyup(function(event) {
			var _this = $(this),
				value = _this.val();
			_this.next().html('');
			_this.siblings('.search_result_list').hide();
			var myEvent = event || window.event;
			var keyCode = myEvent.keyCode;//获得键值
			//ESC
			if (keyCode == 27) {
				_this.next().html('')
	        } else if (keyCode >= 65 && keyCode <= 90 || keyCode == 8 || keyCode == 46 || keyCode == 13 || keyCode == 32) {//8退格，46删除，13回车,32空格
	        	$('.city_select_wrapper').remove();
	        	if (value) {
					if (value.length < 2) {
						_this.next().html('<span class="search_err">请至少输入两个字^_^</span>');
						_this.siblings('.search_result_list').fadeIn();
				
					}else{
						clearTimeout(timeoutId);
						if (xhr) {
							xhr.abort();
						}
						timeoutId = setTimeout(function() {
							//调用后台接口匹配
							xhr = $.ajax({
								url: '/car/search/suggestion',
								data: {'keyword': encodeURI(value),'poi': $('#poi').val()},
								type: 'GET',
								success: function(data) {
									_this.siblings('.search_result_list').fadeIn();

									if (!!data && data.resultList.length > 0) {
										_this.next().html(renderResultList(data,value));
									} else {
										_this.next().html('<span class="search_err">对不起，找不到：<span class="important">' + value + '</span>，换个试试？ 如波士顿，boston</span>');
									}
								}
							});
						}, 300);
					}
				}else{
					_this.siblings('.search_result_list').hide();
				}
	        }
		})
	});

	//rent car date
	var dayMap = {0: '周日', 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六'},
		currentDate = new Date(),
		defaultStartDate = new Date(currentDate.getTime() + 1000 * 60 * 60 * 24 * 30),
		defaultEndDate = new Date(currentDate.getTime() + 1000 * 60 * 60 * 24 * 37),
		nextdate;

	$('#startDate').val(defaultStartDate.getFullYear() + '-' + (defaultStartDate.getMonth() + 1) + '-' + defaultStartDate.getDate());
	$('#startDate').next().html(dayMap[defaultStartDate.getDay()]);
	$('#endDate').val(defaultEndDate.getFullYear() + '-' + (defaultEndDate.getMonth() + 1) + '-' + defaultEndDate.getDate());
	$('#endDate').next().html(dayMap[(defaultEndDate.getDay()) % 7]);

	$('#startDate').DatePicker({
		current: new Date(currentDate.getTime() + 1000 * 60 * 60 * 24 * 30),
		calendars: 2,
		onBeforeShow: function(el) {
			if ($(el).val()) {
				$(el).DatePickerSetDate($(el).val(), true);
			}
		},
		onChange: function(date, el) {
			$(el).val(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
			$(el).next().html(dayMap[date.getDay()]);
			$(el).DatePickerHide();
			nextdate = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
			$('#endDate').val(nextdate.getFullYear() + '-' + (nextdate.getMonth() + 1) + '-' + nextdate.getDate());
			$('#endDate').next().html(dayMap[(nextdate.getDay()) % 7]);
			$('#endDate').DatePickerSetDate($('#endDate').val(),true);

		}
	});

	$('#endDate').DatePicker({
		current: new Date(currentDate.getTime() + 1000 * 60 * 60 * 24 * 60),
		calendars: 2,
		onBeforeShow: function(el) {
			if ($(el).val()) {
				$(el).DatePickerSetDate($(el).val(), true);
			}
		},
		onChange: function(date, el) {
			$(el).val(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
			$(el).next().html(dayMap[date.getDay()]);
			$(el).DatePickerHide();
		}
	});

	$('span.date_week').click(function() {
    	$(this).prev().DatePickerShow();
	});

	//select time
	$('#startTime').change(function() {
		var _this = $(this);

		_this.prev().prev().text(_this.val());
	});
	$('#endTime').change(function() {
		var _this = $(this);

		_this.prev().prev().text(_this.val());
	});


	var pickLocInfoStr = $('#pickLocInfo').val(),
		returnLocInfoStr = $('#returnLocInfo').val(),
		pickLocInfoArr,
		returnLocInfoArr;

	if (pickLocInfoStr && returnLocInfoStr && '' != pickLocInfoStr && '' != returnLocInfoStr) {
		pickLocInfoArr = pickLocInfoStr.split('|');
		returnLocInfoArr = returnLocInfoStr.split('|');

		if (pickLocInfoArr[4] != '') {
			defaultStartDate = new Date(pickLocInfoArr[4].replace(/-/g, '/'));
			$('#startDate').val(defaultStartDate.getFullYear() + '-' + (defaultStartDate.getMonth() + 1) + '-' + defaultStartDate.getDate());
			$('#startDate').next().html(dayMap[defaultStartDate.getDay()]);
			setCurrentTime($('#startTime'), pickLocInfoArr[5]);
		}
		if (returnLocInfoArr[4] != '') {
			defaultEndDate = new Date(returnLocInfoArr[4].replace(/-/g, '/'));
			$('#endDate').val(defaultEndDate.getFullYear() + '-' + (defaultEndDate.getMonth() + 1) + '-' + defaultEndDate.getDate());
			$('#endDate').next().html(dayMap[(defaultEndDate.getDay()) % 7]);
			setCurrentTime($('#endTime'), returnLocInfoArr[5]);
		}
		searchDataInit(pickLocInfoArr[0], pickLocInfoArr[1], pickLocInfoArr[2], pickLocInfoArr[3], returnLocInfoArr[0], returnLocInfoArr[1], returnLocInfoArr[2], returnLocInfoArr[3]);
	}

	var rent_cityCode = $('#rent_cityCode').val();
	if (rent_cityCode != null && rent_cityCode != '') {
		querycityAndLocation(rent_cityCode);
	}

	var rent_locationParams = $('#rent_locationParams').val();
	if (rent_locationParams) {
		var rent_locationParamsArray = rent_locationParams.split('_');
		directFlightCity(rent_locationParamsArray[0], rent_locationParamsArray[1], rent_locationParamsArray[2]);
	}

	var supplierTimer, experienceTimer;
	if ($('#carSupplierList').children().length > 8) {
		supplierTimer = setInterval(supplierListAnimate, 3000);
	}

	if ($('#experienceList').children().length > 5) {
		experienceTimer = setInterval(experienceListAnimate, 5000);
	}

	$('#carSupplierList').on('mouseover', function() {
		clearInterval(supplierTimer);
		supplierTimer = null;
	}).on('mouseout', function() {
		if ($('#carSupplierList').children().length > 8) {
			supplierTimer = setInterval(supplierListAnimate, 3000);
		}
	});

	$('#experienceList').on('mouseover', function() {
		clearInterval(experienceTimer);
		experienceTimer = null;
	}).on('mouseout', function() {
		if ($('#experienceList').children().length > 5) {
			experienceTimer = setInterval(experienceListAnimate, 5000);
		}
	});

}(jQuery, window, document));

function renderResultList(data,currentValue) {
	var tpl = '',
		resultList = data.resultList;
	if(!!resultList) {
		for (var i=0; i<resultList.length; i++) {
			var obj = resultList[i];
			tpl += '<li class="wq_clearfix" data-key="' + obj.key + '" data-value="' + obj.value + '" title="' + obj.storeName + '">';
			if(data.hasLocTypeMark) {
				tpl += '<span class="s_locType'; 
				if(obj.storeType == 1) {
					tpl += ' s_airplane';
				}
				tpl += '"></span>';
			}
			tpl += '<span class="s_store_name">' + formatResult(obj.storeName,currentValue) + '</span>\
					<input class="s_store_name_cn" type="hidden" value="'+obj.storeNameCN+'"/>\
					<div class="s_city_wrap wq_clearfix">';
			if(null != obj.countryNameCN && '' != obj.countryNameCN) {
				tpl += '<span class="s_country_name">，' + obj.countryNameCN + '</span>';
			}
			tpl += '<span class="s_city_name">' + formatResult(obj.cnName || obj.enName,currentValue) + '</span>\
				</div>\
			</li>';
		}
	}
	return tpl;
}
function formatResult(suggestion, currentValue) {
    var pattern = '(' + escapeRegExChars(currentValue) + ')';
    return suggestion.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>');
}
function escapeRegExChars(value) {
    return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}


function supplierListAnimate() {
	var el = $('#carSupplierList').children(),
		first = el.first(),
		last = el.last();

	first.hide(1000, function() {
		$(this).fadeIn().insertAfter(last);
	});
}

function experienceListAnimate() {
	var el = $('#experienceList').children(),
		first = el.first(),
		last = el.last();

	first.hide(1500, function() {
		$(this).fadeIn().insertAfter(last)
	});
}

function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

	if (arr = document.cookie.match(reg)) {
		return unescape(arr[2]);
	} else {
		return null;
	}
}

function searchCars(opt) {
	var pickUpDate = $('#startDate').val(),
		pickUpTime = $('#startTime').val(),
		returnDate = $('#endDate').val(),
		returnTime = $('#endTime').val(),
		pickUpLocationName = $('#pickUpLocationStore').html(),
		dropOffLocationName = $('#dropOffLocationStore').html(),
		pickUpLocationID = $('#pickUpLocationID').attr('data-value'),
		dropOffLocationID = $('#dropOffLocationID').attr('data-value'),
		pickUpStateCity = $('#pickUpLocationID').attr('data-key'),
		dropOffStateCity = $('#dropOffLocationID').attr('data-key'),
		baseUrl = $('#baseUrl').val(),
		poi = $('#poi').val(),
		sales = $('#sales').val(),
		vendor = $('#vendor').val();

	var url = "";
	if(!!poi) {
		url = baseUrl + '/' + poi + '/car/list?pl=' + pickUpLocationID + '&pd=' + pickUpDate + '&pt=' + pickUpTime + '&rl=' + dropOffLocationID + '&rd=' + returnDate + '&rt=' + returnTime;
	} else {
		url = baseUrl + '/car/list?pl=' + pickUpLocationID + '&pd=' + pickUpDate + '&pt=' + pickUpTime + '&rl=' + dropOffLocationID + '&rd=' + returnDate + '&rt=' + returnTime;
	}
	if(!!sales) {
		url = url + '&sales=' + sales;
	}
	if(!!vendor) {
		url = url + '&vd=' + vendor;
	}
	if (opt.target == '_blank') {
		window.open(encodeURI(url));
	} else {
		location.href = encodeURI(url);
	}
}

function setCurrentTime(selectObj, objItemText) {
	selectObj.val(objItemText).prev().prev().text(objItemText);
}

function searchDataInit(pickLocID, pickLocNameEN, pickCityID, pickCityName, returnLocID, returnLocNameEN, returnCityID, returnCityName) {
	$('#pickUpLocationID').attr('data-value', pickLocID);
	$('#pickUpLocationID').attr('data-key', pickCityID);
	$('#pickUpLocationCity').html(pickCityName);
	$('#pickUpLocationStore').html(pickLocNameEN);

	if (returnLocID == null || returnLocID == '') {
		$('#dropOffLocationID').attr('data-value', pickLocID);
	} else {
		$('#dropOffLocationID').attr('data-value', returnLocID);
	}
	if (returnCityID == null || returnCityID == '') {
		$('#dropOffLocationID').attr('data-key', pickCityID);
	} else {
		$('#dropOffLocationID').attr('data-key', returnCityID);
	}
	if (returnCityName == null || returnCityName == '') {
		$('#dropOffLocationCity').html(pickCityName);
	} else {
		$('#dropOffLocationCity').html(returnCityName);
	}
	if (returnLocNameEN == null || returnLocNameEN == '') {
		$('#dropOffLocationStore').html(pickLocNameEN);
	} else {
		$('#dropOffLocationStore').html(returnLocNameEN);
	}
}

function searchProcess(opt) {
	var pickUpLocID = $('#pickUpLocationID').attr('data-value'),
		dropOffLocID = $('#dropOffLocationID').attr('data-value');
	if (pickUpLocID == null || pickUpLocID == '') {
		alert('您还没有选择取车点噢');
	} else if (dropOffLocID == null || dropOffLocID == '') {
		alert('只差一步啦：请选择还车点');
	} else {
		searchCars({
			poi: $('#poi').val(),
			target: opt.target
		});
	}
}

function querycityAndLocation(rent_cityCode) {
	var params = 'poi=' + rent_cityCode;

	$.ajax({
		async: false,
		url: '/car/vehicle-queryLocation',
		type: 'POST',
		data: params,
		dateType: 'json',
		success: function(data) {
			if (data == null) {
				return;
			}
			if (!data.locationArray[0]) {
				return;
			}
			var firstLocation = data.locationArray[0];
			directFlightCity(firstLocation[0], data.cityName, firstLocation[1], data.stateCity);
		},
		error: function(a, b, c, d) {
			alert('刷取数据异常!');
		}
	});
}

function directFlightCity(id1, city1, store1, stateCity1, id2, city2, store2, stateCity2) {
	$('#pickUpLocationID').attr('data-value', id1);
	$('#pickUpLocationID').attr('data-key', stateCity1);
	$('#pickUpLocationCity').html(city1);
	$('#pickUpLocationStore').html(store1);

	if (id2 == null || id2 == '') {
		$('#dropOffLocationID').attr('data-value', id1);
	} else {
		$('#dropOffLocationID').attr('data-value', id2);
	}
	if (stateCity2 == null || stateCity2 == '') {
		$('#dropOffLocationID').attr('data-key', stateCity1);
	} else {
		$('#dropOffLocationID').attr('data-key', stateCity2);
	}
	if (city2 == null || city2 == '') {
		$('#dropOffLocationCity').html(city1);
	} else {
		$('#dropOffLocationCity').html(city2);
	}
	if (store2 == null || store2 == '') {
		$('#dropOffLocationStore').html(store1);
	} else {
		$('#dropOffLocationStore').html(store2);
	}
	if ($('#pickUpLocationID').attr('data-value') != null && $('#dropOffLocationID').attr('data-value') != '') {
		searchCars({
			poi: $('#poi').val()
		});
	}
}

function bookingCheck(vehiQuoteSequence, bookingUrl) {
	var baseUrl = $('#baseUrl').val();

	$.ajax({
		url: baseUrl + '/car/checkVehicleCacheData/' + vehiQuoteSequence,
		type: 'POST',
		async: false,
		success: function(data) {
			if (null != data && data.hasCacheDataAvailable) {
				var $booking_a = $('#' + vehiQuoteSequence);
				$booking_a.attr('href', bookingUrl);
				$booking_a.attr('target', '_blank');
			} else {
				$(window).scrollTop(0);
				searchCars({
					poi: $('#poi').val(),
					content: '抱歉，页面停留时间过长，车型报价过期，已为您更新到最新报价。'
				});
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			alert('网络异常');
		}
	});
}

function getFaqList(poi, target) {
	var faq_list = $('#faq_list'),
		size = faq_list.data('size');
	$.ajax({
		url: '#/queryFaq?poi=' + poi + '&pageSize=' + size + '&category=car',
		dataType: 'json',
		success: function(pageRes) {
			var _html = '';
			for (var i = 0; i < pageRes.list.length; i++) {
				var faq = pageRes.list[i];
				_html = '<li><a href="#/' + poi + '/car/helper-faq#li_faqItem_' + faq.faqId + '" target= "' + target + '">· ' + faq.question + '</a></li>';
				$(faq_list).append(_html);
			}
		},
		error: function() {
			var error_tips_html = '<li name="faq_error_tips" class="wq_clearfix">' + '<p class="evaluation_text font_size14 font_color_black">常见问题加载失败，请稍后刷新重试!</p>' + '</li>';
			faq_list.append(error_tips_html);
		}
	});
}
