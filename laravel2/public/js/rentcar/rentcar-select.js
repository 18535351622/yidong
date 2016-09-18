/**
 * @usage	: rent car city selector
 * @author	: Frend
 * @emial	: xin.wang@woqu.com
 */

;$(function($, win, doc, undefined) {

	var _cityListCache = {};
	var CITY_LIST_CACHE_KEY = 'city_list';

	$.fn.wqCitySelect = function(opts) {
		var defaults = {
			title: '',
			targetId: '',
			poi: '',
			continent: '',
			pickUpEle: [],
			dropOffEle: [],
			callback: $.noop
		},
		convertCityData = [];

		var opts = $.extend({}, defaults, opts),
			citySelect,
			hotCityList;

		var map,
			timer,
			mapflag = true,
			mapMarker
			/*,mapInfowindow = new google.maps.InfoWindow({
				content: '坐标名称'
			})*/;
		
		if(!hotCityList) {
			hotCityList = getHotCityList();
		}

		return this.each(function() {

			var _this = $(this);

			citySelect = $('<div class="city_select_wrapper" id="' + opts.targetId + '" >' + hotCityList
				+ '<div class="car_select_place hide">\
					<div class="city_select_mask hide"></div>\
					<!--<i class="city_select_close_btn"></i>-->\
					<div class="select_head">\
						<!-- <h1 class="select_title">' + opts.title + '</h1>\
						<div class="search_wrapper">\
							<input id="searchCarInput" type="text" class="search_input" data-original="输入城市(支持中英文)" value="输入城市(支持中英文)" >\
							<ul id="searchRstList" class="search_result_list"></ul>\
						</div>-->\
					</div>\
					<div class="select_body wq_clearfix">\
						<ul class="letter_list">\
							<li class="letter_title">城市</li>\
							<li class="letter_tag" data-id="A">A</li>\
							<li class="letter_tag" data-id="B">B</li>\
							<li class="letter_tag" data-id="C">C</li>\
							<li class="letter_tag" data-id="D">D</li>\
							<li class="letter_tag" data-id="E">E</li>\
							<li class="letter_tag" data-id="F">F</li>\
							<li class="letter_tag" data-id="G">G</li>\
							<li class="letter_tag" data-id="H">H</li>\
							<li class="letter_tag" data-id="I">I</li>\
							<li class="letter_tag" data-id="J">J</li>\
							<li class="letter_tag" data-id="K">K</li>\
							<li class="letter_tag" data-id="L">L</li>\
							<li class="letter_tag" data-id="M">M</li>\
							<li class="letter_tag" data-id="N">N</li>\
							<li class="letter_tag" data-id="O">O</li>\
							<li class="letter_tag" data-id="P">P</li>\
							<li class="letter_tag" data-id="Q">Q</li>\
							<li class="letter_tag" data-id="R">R</li>\
							<li class="letter_tag" data-id="S">S</li>\
							<li class="letter_tag" data-id="T">T</li>\
							<li class="letter_tag" data-id="U">U</li>\
							<li class="letter_tag" data-id="V">V</li>\
							<li class="letter_tag" data-id="W">W</li>\
							<li class="letter_tag" data-id="X">X</li>\
							<li class="letter_tag" data-id="Y">Y</li>\
							<li class="letter_tag" data-id="Z">Z</li>\
						</ul>\
						<div class="city_list_wrapper"></div>\
					</div>\
					<div class="rental_detail_wrap hide">\
						<p class="rdp_city">城市：<span id="rdp_city"></span></p>\
						<p class="rdp_xyz">位置：<span id="rdp_xyz"></span></p>\
						<div id="cityPlaceMap"></div>\
						<!--<ul class="city_place_list">\
							<li class="wq_clearfix">\
								<p class="cp_list_num">1</p>\
								<div class="cp_list_content">\
									<p class="store">门店：<span>National(距离 西好莱坞 0.5公里)</span></p>\
									<p class="address wq_clearfix">\
										<span class="name">地址：</span>\
										<span class="clc_detail">\
											Los Angeles International Airport 9000 Airport Boulevard，Los Angeles CA US	\
										</span>\
									</p>\
									<p class="phone">电话：<span>1-626-780-7552</span></p>\
								</div>\
							</li>\
							<li class="wq_clearfix">\
								<p class="cp_list_num">2</p>\
								<div class="cp_list_content">\
									<p class="store">门店：<span>National(距离 西好莱坞 0.5公里)</span></p>\
									<p class="address wq_clearfix">\
										<span class="name">地址：</span>\
										<span class="clc_detail">\
											Los Angeles International Airport 9000 Airport Boulevard，Los Angeles CA US	\
										</span>\
									</p>\
									<p class="phone">电话：<span>1-626-780-7552</span></p>\
								</div>\
							</li>\
						</ul>-->\
					</div>\
				</div>\
			</div>');

			_this.click(function(e) {
				e.stopPropagation();

				//clear input span value
				$(this).find('.city_en').hide();
				$(this).find('.city_cn').hide();
			
				//hide other
				$('.city_select_wrapper').hide();
				//$('.car_select_place').addClass('hide').siblings('.car_select_city').removeClass('hide');
				$('.car_select_place').hide().siblings('.car_select_city').show();
				var offset = _this.offset(),
					top = offset.top + 29,
					left = offset.left;
				if ($('#' + opts.targetId).length) {
					citySelect = $('#' + opts.targetId);
					if (citySelect.is(':visible')) {
						citySelect.hide();
						return;
					}
					citySelect.css({top: top, left: left}).show();
					return;
				} else {
					citySelect.css({top: top, left: left}).appendTo(doc.body).show();
				}
				restoreCitySelectList();

				citySelect.find('.csc_control_nav li').on('click',function(){
					var	_this = $(this),
						index = _this.index();
					_this.addClass('active').siblings('li').removeClass('active');
					citySelect.find('.csc_more_city').attr('data-continent',_this.attr('data-continent'));

					citySelect.find('.csc_content').removeClass('active').addClass('hide').eq(index).removeClass('hide').addClass('active');
					citySelect.find('.city_list_wrapper').html('')
				});
				//更多城市

				citySelect.find('.csc_more_city').on('click',function(){
					$('.car_select_city').hide().siblings('.car_select_place').show();
					//render html
					if(citySelect.find('.city_container').length==0){
						citySelect.find('.city_list_wrapper').html(allUlTemplate($(this).attr('data-continent')));
					}
					$('.city_list_wrapper').scrollTop(0);
				});

				//stop propagation
				citySelect.click(function(e) {
					e.stopPropagation();
				});

				//load shop
				citySelect.on('click', '.vertical_city_list li', function() {
					var _this = $(this),
						key = _this.attr('data-key'),
						shopList = _this.find('.vertical_shop_list'),
						city = _this.find('.city_name'),
						cityName = city.find('city_en_name').html() + '/' + city.find('city_cn_name');

					if (shopList.length) {
						if (shopList.is(':visible')) {
							shopList.slideUp();
							city.removeClass('active');
							return;
						}

						city.addClass('active');
						shopList.slideDown(function(){
							$('.vertical_shop_list p').mouseover(function(){
								$(this).addClass('font_color_green').siblings('p').removeClass('font_color_green');
								mapSwitch($(this));
							})
						});
						return;
					}
					citySelect.find('.city_select_mask').show(function() {
						$.ajax({
							async : true,
							url: '/car/search/landmark/'+key,
							type: 'get',
							dateType: "json",
							success: function(data) {
								citySelect.find('.city_select_mask').hide(function() {
									
									$('.vertical_shop_list').slideUp();
									$('.city_name').removeClass('active');
						
									city.addClass('active');
									if (!data || data.length==0) {
										shopList = $('<div class="vertical_shop_list" style="display: block;"><span data-value="">暂无门店数据</span></div>');
									} else {
										shopList = renderShopList(data);
									}
									_this.append(shopList);
									
									shopList.slideDown(function(){
										$('.vertical_shop_list p').mouseover(function(){
											$(this).addClass('font_color_green').siblings('p').removeClass('font_color_green');
											mapSwitch($(this));
										})
										firstInitMap($(this).find('p').eq(0).addClass('font_color_green'));
									});

								});
							},
							error: function(a,b,c,d){
								city.addClass('active');
								shopList = $('<div class="vertical_shop_list" style="display: block;"><span data-value="">暂无门店数据</span></div>');
								_this.append(shopList);
								shopList.slideDown();
							}
						});
					});
				});

				//hot city position fix
				citySelect.on('click', '.car_select_city table td', function() {
					$('.car_select_city').hide().siblings('.car_select_place').show();

					//render html
					if(citySelect.find('.city_container').length==0) {
						citySelect.find('.city_list_wrapper').html(allUlTemplate(citySelect.find('.csc_more_city').attr('data-continent')));
					}

					var _this = $(this),
						target = citySelect.find('.vertical_city_list li[data-key="' + _this.attr('data-key') + '"]');
					cityListPositionFix(target, citySelect.find('.city_list_wrapper'), true);
				});

				//letter tag position fix
				citySelect.on('click', '.letter_tag', function() {
					var _this = $(this),
						target = $('#' + opts.targetId + _this.attr('data-id'));
					cityListPositionFix(target, citySelect.find('.city_list_wrapper'), false);
				});

				//select shop
				citySelect.on('click', '.vertical_shop_list p', function() {
					var _this_ = $(this);

					_this.attr('data-key', _this_.parent().parent().attr('data-key'));
					_this.attr('data-value', _this_.attr('data-value'));

					//fill content
					fillPDCBySelect(_this_, opts.pickUpEle, opts.dropOffEle);

					_this.find('.city_en').show();
//					_this.find('.city_cn').show()

					citySelect.find('.city_list_wrapper').scrollTop(0);
					_this_.parent().removeClass('active').hide(10, function() {
						citySelect.fadeOut();
					});
					opts.callback(_this.attr('data-value'), opts.targetId);
					//clear input value
					$('.search_input').val('')
					$('.search_result_list').hide();
					//log
					try {
						var info = 'landmarkName='+encodeURI(_this_.attr('title'))+'&landmarkId='
							+_this_.attr('data-value')+'&cityId='+_this_.parent().parent().attr('data-key') + '&source=list';
		        			$.get('#/analysis/log/landmark_click',{'info':info});
					} catch(e) {}
				});

				//close select
				citySelect.on('click', '.city_select_close_btn', function() {
					close();
				});

				$('body').click(function(e) {
					close();
				});

			});

			_this.find('.search_result_list').on('click', 'li', function(e) {
				e.stopPropagation();
				var _this_ = $(this);

				_this.attr('data-key', _this_.attr('data-key'));
				_this.attr('data-value', _this_.attr('data-value'));

				//fill content
				fillPDCBySearch(_this_, opts.pickUpEle, opts.dropOffEle);
				//_this.find('#searchCarInput').val(_this_.find('.s_store_name').html().replace(/<strong>(.+)<\/strong>/g, '$1'));
				_this.find('.city_en').show();
//				_this.find('.city_cn').show()
				//clear input value
				$('.search_input').val('')

				opts.callback(_this.attr('data-value'), opts.targetId);

				$('.search_result_list').fadeOut();
				//log
				try {
					var info = 'landmarkName='+encodeURI(_this_.attr('title'))+'&landmarkId='+_this_.attr('data-value')+'&cityId='+_this_.attr('data-key') + '&source=search'
    					$.get('#/analysis/log/landmark_click',{'info':info});
				} catch(e) {}
			});

			//缓存城市列表
			allUlTemplate(opts.continent)
		});
		
		function mapSwitch(obj){
			var lat = obj.attr('data-lat'),
				lng = obj.attr('data-lng'),
				cityCN = obj.parent().attr('data-citycn'),
				cityEN = obj.parent().attr('data-cityen'),
				locEN = obj.attr('data-valen'),
				locCN = obj.attr('data-valcn'),
				cityName = cityEN + (!!cityEN && !!cityEN ? "/" : "") + cityCN;
				locName = locEN + (!!locEN && !!locCN ? "/" : "") + locCN,
				
			
			$('.vertical_shop_list').on('mouseover','p',function(){
				$('.rental_detail_wrap').show();
				
				$('#rdp_city').html(cityName);
				$('#rdp_xyz').html(locName);
				var markName = !!locEN ? locEN : locCN;
				var myCenter = [markName, lat, lng, 10];
//				var beaches = [
//				  ['Bondi Beach', -33.890542, 151.274856, 4],
//				  ['Coogee Beach', -33.923036, 151.259052, 5],
//				  ['Cronulla Beach', -34.028249, 151.157507, 3],
//				  ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
//				  ['Maroubra Beach', -33.950198, 151.259302, 1]
//				];
//				initMap(myCenter,beaches);
				initMap(myCenter);
			})

			$('.city_name').hover(function(){
				$('.rental_detail_wrap').hide();
			})

			$('.city_select_wrapper').not('.city_list_wrapper').hover(function(){
				$('.rental_detail_wrap').hide();
			})

			$('body').hover(function(){
				$('.rental_detail_wrap').hide();
			})
		}
		function firstInitMap (obj) {
			var lat = obj.attr('data-lat'),
				lng = obj.attr('data-lng'),
				cityCN = obj.parent().attr('data-citycn'),
				cityEN = obj.parent().attr('data-cityen'),
				locEN = obj.attr('data-valen'),
				locCN = obj.attr('data-valcn'),
				cityName = cityEN + (!!cityEN && !!cityEN ? "/" : "") + cityCN;
				locName = locEN + (!!locEN && !!locCN ? "/" : "") + locCN,
			
				$('.rental_detail_wrap').show();
				
				$('#rdp_city').html(cityName);
				$('#rdp_xyz').html(locName);
				var markName = !!locEN ? locEN : locCN;
				var myCenter = [markName, lat, lng, 10];
				initMap(myCenter);
		}
		function initMap(myCenter){
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}
			timer = setTimeout(function() {
				if (!(typeof google === 'object' && typeof google.maps === 'object'))
					return;
				var _myCenter = new google.maps.LatLng(myCenter[1],myCenter[2])
				var mapOptions = {
					zoom:11,
					center: _myCenter,
					mapTypeId:google.maps.MapTypeId.ROADMAP,
					zoomControlOptions: {
					  style:google.maps.ZoomControlStyle.LARGE
					},
					panControl:false,
					zoomControl:true,
					mapTypeControl:false,
					scaleControl:false,
					streetViewControl:false,
					overviewMapControl:false
				};
				if(mapflag){
					mapflag = false;
					map = new google.maps.Map(document.getElementById("cityPlaceMap"),mapOptions);
					
					mapMarker = new google.maps.Marker({
						position: _myCenter,
						map: map,
						icon: 'http://www.quimg.com/googleMap/hotel/target.png'
					});
					
					// var contentString = '<span style="display: block;min-width: 100px;padding-left: 20px;font-family: "Microsoft Yahei", Verdana;">'+ myCenter[0] +'</span>';
					// mapInfowindow.setContent(contentString);
					// mapInfowindow.open(map,mapMarker);
				}else{
					mapMarker.setPosition(_myCenter);
					map.setCenter(_myCenter);
					// mapInfowindow.setContent('<span style="display: block;min-width: 100px;padding-left: 20px;font-family: "Microsoft Yahei", Verdana;">'+ myCenter[0] +'</span>');
				}

			}, 300);

//			initMapMark(locations);
		}

		function initMapMark(locations){
			if (!(typeof google === 'object' && typeof google.maps === 'object'))
					return;
			for(var i = 0; i<locations.length; i++){
				var beach = locations[i];
    			var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
				addMarkers(myLatLng,beach,i);
			}
		}

		function addMarkers(position,beach,num){
			if (!(typeof google === 'object' && typeof google.maps === 'object'))
					return;
			 var marker = new google.maps.Marker({
				position: position,
    			map: map,
    			title: beach[0],
    			icon: 'http://www.quimg.com/googleMap/hotel/target.png'
			});

			/*var contentString = '<p style="padding-left: 20px;">'+ beach[0] +'</p>';
			var infowindow = new google.maps.InfoWindow({
			 	 content: contentString
			  });
			setTimeout(function(){
				infowindow.open(map,marker);
			},500);*/
			
		}

		function fillPDCBySelect(eventTarget, pickUpEle, dropOffEle) {
			//fill pickup
			if (eventTarget.parent().attr("data-citycn") != '') {
				$('#' + opts.pickUpEle[1]).html(eventTarget.parent().attr("data-citycn"));
			} else {
				$('#' + opts.pickUpEle[1]).html(eventTarget.parent().attr("data-cityen"));
			}
			$('#' + opts.pickUpEle[2]).html(eventTarget.data('valcn'));

			//fill dropoff
			if (opts.dropOffEle.length != 0) {
				$('#' + opts.dropOffEle[0]).attr('data-key', eventTarget.parent().parent().attr('data-key'));
				$('#' + opts.dropOffEle[0]).attr('data-value', eventTarget.attr('data-value'));
				$('#' + opts.dropOffEle[1]).html(eventTarget.parent().attr("data-citycn"));
				if (eventTarget.parent().attr("data-citycn") != '') {
					$('#' + opts.dropOffEle[1]).html(eventTarget.parent().attr("data-citycn"));
				} else {
					$('#' + opts.dropOffEle[1]).html(eventTarget.parent().attr("data-cityen"));
				}
				$('#' + opts.dropOffEle[2]).html(eventTarget.data('valcn'));
			}
		}

		function fillPDCBySearch(eventTarget, pickUpEle, dropOffEle) {
			//fill pickup
			$('#' + opts.pickUpEle[1]).html(eventTarget.find('.s_city_name').html().replace(/<strong>(.+)<\/strong>/g, '$1'));
			$('#' + opts.pickUpEle[2]).html(eventTarget.find('.s_store_name_cn').val().replace(/<strong>(.+)<\/strong>/g, '$1'));

			//fill dropoff
			if (opts.dropOffEle.length != 0) {
				$('#' + opts.dropOffEle[0]).attr('data-key', eventTarget.attr('data-key'));
				$('#' + opts.dropOffEle[0]).attr('data-value', eventTarget.attr('data-value'));

				$('#' + opts.dropOffEle[1]).html(eventTarget.find('.s_city_name').html().replace(/<strong>(.+)<\/strong>/g, '$1'));
				$('#' + opts.dropOffEle[2]).html(eventTarget.find('.s_store_name_cn').val().replace(/<strong>(.+)<\/strong>/g, '$1'));
			}
		}

		function cityListPositionFix(target, wrapper, expand) {
			var t_offset_top = target.position().top;

			wrapper.animate({
				scrollTop: t_offset_top + wrapper.scrollTop()
			});

			if (expand) {
				target.click();
			}
		}

		function renderShopList(jsonData) {

			var html = '<div class="vertical_shop_list" data-citycn="' + jsonData[0].cityNameCN + '" data-cityen="' + jsonData[0].cityNameEN + '">';

			for (var i=0; i<jsonData.length; i++) {
				html += '<p data-valcn="' + jsonData[i].landmarkNameCN + '" data-valen="' + jsonData[i].landmarkNameEN
					+ '" data-lat="' + jsonData[i].latitude + '" data-lng="' + jsonData[i].longitude 
					+ '" data-value="' + jsonData[i].landmarkId + '" title="' + jsonData[i].landmarkName
					+ '"><span class="s_locType';
				if(jsonData[i].isAriport) {
					html += ' s_airplane';
				}
				html += '"></span>' + jsonData[i].landmarkName + '</p>';
			}
			return $(html + '</div>');
		}

		function allUlTemplate(continent) {
			var html = '',
				param = {};
			var _cacheKey = CITY_LIST_CACHE_KEY;
			if(!!continent) {
				_cacheKey += '_' + continent;
				param = {poi : continent}
			}
			var _data = $.data(_cityListCache, _cacheKey);

			if (!_data) {
				$.ajax({
					async: false,
					url: 'car/search/city',
					type: "get",
					data: param,
					dateType: "json",
					success: function (data) {
						var arr = [];
						for (var i = 0; i < data.letterCityList.length; i++) {
							var list = addlist(data.letterCityList[i].cityList);
							arr[i] = ['<div class="city_box list_box"><h2 id="' + opts.targetId + data.letterCityList[i].letter,
								'" class="city_list_title">' + data.letterCityList[i].letter + '</h2><ul class="vertical_city_list">'+ list,
								'</ul></div>'].join('');
						};
						_data = '<div class="city_container"><p class="title">按城市英文名的首写字母排序</p>'+arr.join('')+'</div>';

						$.data(_cityListCache, _cacheKey, _data);
					},
					error: function (a, b, c, d) {
						alert("刷取数据异常!");
					}
				});
			}
			return _data;
		}


		function close() {
			citySelect.hide();
		}
		function addlist(data){
			//[{type:a,data:[]}]
			var arr = [];
			for (var i = 0; i < data.length; i++) {
				var _ciytInfo =  data[i];
				arr[i]= ['<li data-key="' + _ciytInfo.cityId + '" class="wq_clearfix">',
						'<div class="city_name wq_clearfix',
						(null != _ciytInfo.cityHotLevel && _ciytInfo.cityHotLevel != 0) ? ' font_color_orange': '',
						'\"><span class="city_en_name">' + _ciytInfo.cityNameEN + '</span>',
						'<span class="city_cn_name">' + _ciytInfo.cityNameCN + ' - ' + _ciytInfo.countryNameCN + '</span>',
						'</div></li>'].join('');
			};
			return arr.join('');
		}
		function restoreCitySelectList(){
			//$('.car_select_city').removeClass('hide').siblings('.car_select_place').addClass('hide');
			$('.car_select_place').hide().siblings('.car_select_city').show();
			$('.vertical_city_list .city_name').removeClass('active');
			$('.vertical_city_list .vertical_shop_list').hide();
		}
		
		function getHotCityList () {
			var _html = '';
			$.ajax({
				async : false,
				url: 'car/search/hotcity',
				type: "get",
				dateType: "json",
				success: function(data) {
					if(!!data) {
						_html = '<div class="car_select_city">\
							<ul class="csc_control_nav wq_clearfix">\
							<li data-continent=""';
						if(opts.continent == '') {//如果continent为''则默认展示所有热门城市
							_html += ' class="active"';
						}
						_html += '>热门</li>';
						var csc_index = -1;
						for(var i = 0; i < data.continentHotCityList.length; i++) {//组装大洲标题数据
							var continentHotCity = data.continentHotCityList[i];
							_html += '<li data-continent="' + continentHotCity.continent + '"';
							if(opts.continent == continentHotCity.continent) {
								_html += ' class="active"';
								csc_index = i;
							}
							_html += '>' + continentHotCity.continentNameCN + '</li>';
						}
						_html += '</ul>\
							<span class="csc_more_city" data-continent="' + opts.continent + '">更多城市></span>\
							<div class="csc_content' + (csc_index == -1 ? '' : ' hide') +'">\
							<div class="csc_content_li wq_clearfix">\
								<span class="csc_li_title"></span>\
								<table>\
									<col width="85px"></col>\
									<col width="85px"></col>\
									<col width="85px"></col>\
									<col width="85px"></col>\
									<col width="85px"></col>\
									<col width="85px"></col>';
						for(var i = 0; i < data.hotCityList.length; i++) {//组装全球热门城市数据
							var hotCity = data.hotCityList[i];
							if(i % 6 == 0) {
								_html += '<tr>';
							}
							_html += '<td data-key="' + hotCity.cityId + '" data-tag="' + hotCity.letter + '" title="'
								+ hotCity.cityNameCN + '-' + hotCity.countryNameCN + '&#10;' + hotCity.cityNameEN + '-' + hotCity.countryNameEN +'">'
								+ hotCity.cityNameCN + '</td>';
							if(i % 6 == 5 || i == data.hotCityList.length - 1) {
								_html += '</tr>';
							}
						}
						_html += '</table></div></div>';
						
						for(var i = 0; i < data.continentHotCityList.length; i++) {//组装大洲热门城市数据
							var countryHotCityList = data.continentHotCityList[i].countryHotCityList;
							_html += '<div class="csc_content' + (csc_index == i ? "" : ' hide') + '">';
							for(var j = 0; j < countryHotCityList.length; j++) {
								var countryHotCity = countryHotCityList[j];
								_html += '<div class="csc_content_li wq_clearfix"><span class="csc_li_title">' + countryHotCity.countryNameCN + '</span>\
											<table>\
												<col width="85px"></col>\
												<col width="85px"></col>\
												<col width="85px"></col>\
												<col width="85px"></col>\
												<col width="85px"></col>';
								for(var k = 0; k < countryHotCity.hotCityList.length; k++) {
									var hotCity = countryHotCity.hotCityList[k];
									if(k % 5 == 0) {
										_html += '<tr>';
									}
									_html += '<td data-key="' + hotCity.cityId + '" data-tag="' + hotCity.letter + '" title="'
										+ hotCity.cityNameCN + '-' + hotCity.countryNameCN + '&#10;' + hotCity.cityNameEN + '-' + hotCity.countryNameEN +'">'
										+ hotCity.cityNameCN + '</td>';
									if(k % 5 == 4 || k == countryHotCity.hotCityList.length - 1) {
										_html += '</tr>';
									}
								}
								_html += '</table></div>';
							}
							_html += '</div>';
						}
						_html += '</div>';
					}
				},
				error: function(a,b,c,d){
					alert("网络异常，请稍后重试!");
				}
			});
			return _html;
		}


	};

}(jQuery, window, document));
