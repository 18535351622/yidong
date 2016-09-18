/**
 * @usage: base	api
 **/

/* console fix for IE7 */
console = window.console || {
	log: function() {}
};

/* extend Date */
Date.prototype.format = function(format) {
	var o = {
		"M+": this.getMonth() + 1, //month
		"d+": this.getDate(), //day
		"h+": this.getHours(), //hour
		"m+": this.getMinutes(), //minute
		"s+": this.getSeconds(), //second
		"q+": Math.floor((this.getMonth() + 3) / 3), //quarter
		"S": this.getMilliseconds() //millisecond
	};
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;
};

var DateUtil = {
	addDay: function(date, num) {
		var tempDate = date;
		if (typeof date == 'string') {
			tempDate = new Date(date.replace(/-/g, "/"));
		}
		var newDate = new Date(tempDate.getTime() + num * 24 * 60 * 60 * 1000);
		return newDate;
	},

	getDays: function(date1, date2) {
		var tempDate1 = date1;
		var tempDate2 = date2;
		if (typeof date1 == 'string') {
			tempDate1 = new Date(date1.replace(/-/g, "/"));
		}
		if (typeof date2 == 'string') {
			tempDate2 = new Date(date2.replace(/-/g, "/"));
		}

		var num = (tempDate2.getTime() - tempDate1.getTime()) / (24 * 60 * 60 * 1000);
		return num;
	}
};

/**
 * @usage: init event
 **/
//nav
(function(){
	var navSetInter = null;
	$('.wqHeader-nav-li').hover(function(){
		if(navSetInter)clearInterval(navSetInter);
		var sideBar = $(this).siblings('.wqHeader-nav-li').find('.side-bar:visible');
		if(sideBar.length > 0){
			$('.wqHeader-nav-li').find('.side-bar').hide();
		}
		$(this).find('.side-bar').stop(true,true).show(500);
	},function(){
		var _this = $(this);
		navSetInter = setTimeout(function(){
			_this.find('.side-bar').hide();
		},300);
	});
})();

//header search
(function(){
	//show
	$('.wqHeader-search').hover(function(){
		var _this = $(this);
		var info = _this.parents('.wqHeader-info');
		if(info.is('.wqHeader-base-info')){
			_this.stop().animate({width:'162px'},500).css('borderColor','#ccc');
		}else{
			_this.stop().animate({width:'162px'},500).css('borderColor','#fff');
		}
		
	},function(){
		var _this = $(this);
		var inpt = _this.find('input');
		var v = $.trim(inpt.val());
		if(!inpt.is(':focus') && v == ''){
			_this.stop().animate({width:'0'},500,function(){
				_this.css('borderColor','transparent');
			});
		}
	});
	//hide
	$('.wqHeader-search').find('input').on('blur',function(){
		var _this = $(this);
		var v = $.trim(_this.val());
		var li = _this.parent();
		if(v != '')return;
		li.stop().animate({width:'0'},500,function(){
			li.css('borderColor','transparent');
			_this.val('');
		});
	});
	//search
	$('.wqHeader-search').find('span').on('click',function(){
		var _this = $(this);
		var v = $.trim(_this.siblings('input').val());
		if(v == '')return;
		var _httpProtocol = (("https:" == document.location.protocol) ? "https://" : "http://");
		url = _httpProtocol + www_base_url + "/globalsearch?keys=" + v;
		window.open(encodeURI(url));
	});
})();

/*header notice*/
(function(){
	if ($('#wq_notice').length) {
		setInterval(function() {
			var left = parseInt($('#notice').find('p').css('left'));
			left -= 1;
			if (left < -1200) {
				left = 1200;
			}
			$('#wq_notice').find('p').css('left', left);
		}, 100)
	}
})();

/* header global search */
(function(){
	var inputEle = document.createElement('input');
	if (!('placeholder' in inputEle)) {
		$('#hSearchInput').wqPlaceHolder({
			fontSize: '14px',
			lineHeight: '18px',
			height: '18px',
			placeHolderColor: '#848484',
			top: 8,
			left: 10,
			inputTextColor: '#333',
			content: '旅游城市/景点/产品/关键字',
			relParent: $('.header_search_wrapper')
		});
	}

	var _httpProtocol = (("https:" == document.location.protocol) ? "https://" : "http://");
	var _serviceUrl = _httpProtocol + "www.woqu.com/search";
	
	if(typeof $.fn.autocomplete != 'undefined'){
		$('#hSearchInput').autocomplete({
			maxHeight: 'auto',
			width: 510,
			serviceUrl: _serviceUrl,
			dataType: 'jsonp',
			paramName: 'keys',
			params: {
				'continent': $("#searchContinent").text()
			},
			autoSelectFirst: false,
			showNoSuggestionNotice: true,
			noSuggestionNotice: '点击搜索查看更多结果',
			triggerSelectOnValidInput: false,
			preventBadQueries: false,
			transformResult: function(response) {
				//var response = JSON.parse(response);
				$("#rspUseFirst").val(response.rsp.useFirst);
				return {
					suggestions: $.map(response.rsp.suggestions, function(dataItem) {
						return {
							value: dataItem.suggestWord,
							data: dataItem.url,
							count: dataItem.count,
							category: dataItem.category || ''
						};
					})
				};
			},
			onSelect: function(suggestion) {
				//$('#hSearchCate').text(suggestion.category);
				window.open(encodeURI(suggestion.data));
			}
		});
	}
	var searchListTimer = null;	
	$('#hSearchInput').on('focus',function(){
		if(searchListTimer)clearTimeout(searchListTimer);
		var v = $(this).val();
		if(v == ''){
			$(this).siblings('.search-list').show();
		}else{
			$(this).siblings('.search-list').hide();
		}
	}).on('keyup',function(){
		var v = $(this).val();
		if(v == ''){
			$(this).siblings('.search-list').show();
		}else{
			$(this).siblings('.search-list').hide();
		}
	}).on('blur',function(){
		var _this = $(this);
		searchListTimer = setTimeout(function(){
			if(searchListTimer)clearTimeout(searchListTimer);
			_this.siblings('.search-list').hide();
		},300);
		
	}).on('keydown', function(event) {
		if (event.keyCode == 13) {
			$("#hSearchBtn").click();
		}
	});

	$('#hSearchBtn').on('click',function() {
		var useFirst = $("#rspUseFirst").val();
		var keys = $("#hSearchInput").val() || '新西兰';
		var url;
		if (useFirst == 'true') {
			var suggestion = $('.autocomplete-suggestion[data-index="0"]');
			url = suggestion.attr('data-url');
			if (url) {
				window.open(encodeURI(url));
				return;
			}
		}
		var _httpProtocol = (("https:" == document.location.protocol) ? "https://" : "http://");
		url = _httpProtocol + www_base_url + "/globalsearch?keys=" + keys;
		window.open(encodeURI(url));

	});
})();

/*header currency switch*/
(function(){
	$('#currencySwitch').on('click', 'p', function() {
		var _this = $(this),
			symbol = _this.data('symbol'),
			symbolMap = {
				'CNY': '￥ 人民币',
				'USD': 'USD 美元',
				'CAD': 'CAD 加元',
				'AUD': 'AUD 澳元',
				'NZD': 'NZD 新西兰元'
			};
		var _httpProtocol = (("https:" == document.location.protocol) ? "https://" : "http://");
		$.ajax({
			async: false,
			url: _httpProtocol + "www.woqu.com/setCurrency/" + symbol,
			type: "POST",
			success: function(data) {
				if (data.result) {
					if (window.currencyRefresh_fun && typeof(window.currencyRefresh_fun) == 'function') {
						//reset 
						document.cookie = 'currency=' + symbol; //必须要的 comment by diandian
						$('#currencyShow').text(symbolMap[symbol]);
						_this.addClass('active_currency').siblings().removeClass('active_currency');
						currencyRefresh_fun();
					} else {
						window.location.reload();
					}
				}
			}
		});
	});
	
	$('.wqHeader-user-kefu').on('click',function(){
		$("#onlineKefu").click();
	});
	$('#headLoginout').on('click',function(){
		HeadLogout();
	});
	
})();

/* header info box position fix */
$('#allProTag').on('mouseover', 'li', function() {
	var _this = $(this);

	_this.find('.nma_info_box').css('top', -_this.position().top);
});

/*localjoin show kefu btn gif*/
if(location.href.indexOf('localjoin') > -1){
	$('.wq-kefu-gif').css('display','block');
}

/* go to top */
$(window).scroll(function() {
	if ($(this).scrollTop() > 500) {
		$('.wq-to-top').fadeIn(300);
	} else {
		$('.wq-to-top').fadeOut(300);
	}
});
$('#toTop').click(function() {
	$(window).scrollTop(0);
});

//wqToggleBtn
$('#wqToggleBtn').on('click',function(){
    $(this).toggleClass('callapse').siblings('.hide').slideToggle();
});

//对比部分
(function(){
    var href = location.href;
    if(!/\/localjoin-detail/.test(href)){
        $('#wqCompareItem').remove();
    }else{
    	$('#wqCompareItem').show();
    }
})();

/* hai nan airline activity */
try {
	$('#haihang_active').activityDialog({
		width: 607,
		height: 700,
		title: '海航专享活动',
		content: '<p>即日起，我趣旅行网与海南航空达成合作。同期推出"我趣旅行  出行有里"海航专享活动，海航金鹏会员每在我趣消费，即可获得海航航空里程奖励。<p><br/><p><span>活动时间：</span>2014年8月1日——2016年7月31日</p><br/><p><span>基本流程：</span></p><p>海航用户注册为我趣旅行会员——进入我趣旅行官网预订产品——填写订单——填写海航金鹏会员姓名+卡号——完成预订——成功出行即可获得航空里程</p><br/><p><span>兑换规则：</span></p><p><span>【美国和加拿大-----消费送里程规则】</span><br>境外参团产品（1日/半日游）：每消费10元人民币等值外币累积5里程。 <br>境外参团产品（多日游）：每消费10元人民币等值外币累积10里程。<br>自助游/门票/购物产品：每消费10元人民币等值外币累积5里程。<br>签证产品：每消费10元人民币等值外币累积1.5里程。<br>酒店/租车/保险/电话卡产品：每消费10元人民币等值外币累积5里程。<br/><span>【澳洲和新西兰----消费送里程规则】</span><br/>境外参团产品：每消费10元人民币等值外币累积5里程。<br/>自助游/门票/购物产品：每消费10元人民币等值外币累积5里程。<br/>签证产品：每消费10元人民币等值外币累积1.5里程。<br/>酒店/租车/保险/电话卡产品：每消费10元人民币等值外币累积5里程。<br/><span>【欧洲-----消费送里程规则】</span><br/>境外参团产品：每消费10元人民币等值外币累积5里程。<br/>自助游/门票/购物产品：每消费10元人民币等值外币累积5里程。<br/>签证产品：每消费10元人民币等值外币累积1.5里程。<br/>酒店/租车/保险/电话卡产品：每消费10元人民币等值外币累积5里程。</p><br/><p><span>注意事项：</span></p><p>1.当消费金额不足10元，将按四舍五入计算。<br/>2.请填写正确的姓名和对应的金鹏会员卡号，以便统计奖励里程。<br/>3.此活动不与我趣旅行网其他优惠活动同时享用。</p>',
		cls: 'haihang_active'
	});
	$('.hh_name_input').wqPlaceHolder({
		fontSize: '13px',
		lineHeight: '18px',
		height: '18px',
		placeHolderColor: '#848484',
		top: 4,
		left: 5,
		inputTextColor: '#333',
		content: '请输入姓名',
		relParent: $('.hh_name_input_wrapper')
	});
	$('.hh_card_input').wqPlaceHolder({
		fontSize: '13px',
		lineHeight: '18px',
		height: '18px',
		placeHolderColor: '#848484',
		top: 4,
		left: 5,
		inputTextColor: '#333',
		content: '金鹏会员卡号',
		relParent: $('.hh_card_input_wrapper')
	});
	$('.hh_select').click(function(event) {
		var _this = $(this),
			target = event.target,
			type = _this.attr('type'),
			isCheck = _this.prop('checked'),
			radioSiblings = type == 'radio' ? $('input[name=' + _this.attr('name') + ']') : null;

		if (isCheck) {
			_this.parent().next().show();
		} else {
			_this.parent().next().hide();
		}

		if (radioSiblings) {
			radioSiblings.click(function(event) {
				if (event.target != target) {
					_this.parent().next().hide();
				}
			});
		}
	});
} catch (e) {}

/* user feedback */
$('#feedBack').click(function() {
	CloseCover();
	$("#feedbackContent").val("");
	$('#feedbackContact').val("");
	$("#feedbackContent").wqPlaceHolder({
		fontSize: '14px',
		top: 57,
		left: 28,
		content: '写下您的意见，这对我们很宝贵',
		relParent: $('#feedbackDiv')
	});
	$.ajax({
		url: window.location.protocol + "//" + w_base_url + "/feedback",
		type: 'GET',
		dataType: "text",
		success: function(data) {
			if (data != "") {
				$('#feedbackContact').val(data);
				$('#feedbackContact').hide();
			} else {
				$("#feedbackContact").wqPlaceHolder({
					fontSize: '14px',
					top: 266,
					left: 28,
					content: '留下您的手机号或e-mail',
					relParent: $('#feedbackDiv')
				});
			}
			$('#feedbackDiv').show();
			OpenCover();
		}
	});
});
$('#feedbackCancel').click(function() {
	$('#feedbackDiv').hide();
	CloseCover();
});
$('#feedbackSubmit').click(function() {
	var content = $("#feedbackContent").val(),
		contact = $("#feedbackContact").val();

	if (content == "") {
		alert("请输入内容");
		return;
	}
	if (/<script.*|.*<script.*/.test(content)) {
		alert("不法内容");
		return;
	}
	if (contact == "") {
		alert("请输入联系方式");
		return;
	}
	if (!(/^\w+([-.]\w+)*@\w+([-]\\w+)*\.(\w+([-]\w+)*\.)*[a-z]{2,3}$/.test(contact) || /^1[0-9]{10}$/.test(contact))) {
		alert("邮箱或手机格式不正确");
		return;
	}
	$.ajax({
		url: window.location.protocol + "//" + w_base_url + "/feedback/submit",
		method: 'POST',
		data: {
			content: content,
			contact: contact,
			sourceUrl: window.location.href
		},
		success: function(data) {
			var jsonData = $.parseJSON(data);
			if (jsonData.result == true) {
				$.AlertMsg({
					msg: jsonData.returnMessage,
					elem: $("#feedbackCancel"),
					position: "right",
					type: "suc",
					timeout: 2000
				});
				setTimeout(function() {
					$("#feedbackDiv").fadeOut(500, function() {
						CloseCover();
						$("#feedbackContent").val("");
						$('#feedbackContact').val("");
					});
				}, 2000);
			} else {
				$.AlertMsg({
					msg: jsonData.returnMessage,
					elem: $("#feedbackCancel"),
					position: "right",
					type: "error"
				});
			}

		},
		error: function(data) {
			var jsonData = $.parseJSON(data);
			$.AlertMsg({
				msg: jsonData.returnMessage,
				elem: $("#feedbackCancel"),
				position: "right",
				type: "error"
			});
		}
	});
});



/**
 * @usage: utility function
 **/
/* add product to cart */
function addProductToCartWithParams(isRedirect, params) {
	var url = _HTTP + w_base_url + "/cart/add";
	if (isRedirect) {
		url = _HTTP + w_base_url + "/cart/quickbook";
	}
	$.ajax({
		async: true,
		url: url,
		type: "POST",
		dataType: 'jsonp',
		jsonp: "callbackparam",
		data: params,
		success: function(data) {
			if (isRedirect) {
				if (!data.res.result) {
					if (data.res.returnMessage != "") {
						alert(data.res.returnMessage);
					} else {
						alert("预订失败");
					}
					return;
				}
				var payType = $("#jdStageValue").val();
				if(payType == 1){
					window.location.href = _HTTPS + w_base_url + "/" + continent + "/" + params.type + "/fill/" + data.quickBookID+"?payType="+payType;
				}else{
					window.location.href = _HTTPS + w_base_url + "/" + continent + "/" + params.type + "/fill/" + data.quickBookID;
				}
				return;
			}
		},
		error: function(a, b, c, d) {
			alert("网络异常，请稍后再试");
		}
	});
}

/* user feedback mask */
function OpenCover() {
	var winW = $(window).width(),
		winH = $(window).height();
	$("<div id='the_cover' class='cover' style='width:" + winW + "px;height:" + winH + "px;'></div>").appendTo("body");
}

function CloseCover() {
	$("#the_cover").remove();
}

//loading tips
function LoadingTips(opt) {
	if (typeof opt != "object") var opt = {};
	opt.images = opt.images || 'img/common/loading.gif';
	opt.tipsText = opt.tipsText || '正在读取价格信息，请稍后';
	opt.relay = opt.relay || document.body;
	opt.top = opt.top || 0;
	opt.left = opt.left || 0;
	opt.width = opt.width || 490;
	opt.height = opt.height || 130;
	var html = '<div class="loading_tips_sm"><img src="' + opt.images + '" alt=""><span>' + opt.tipsText + '</span></div>',
		jDom = $(html);
	jDom.css({
		position: 'absolute'
	});
	$(opt.relay).append(jDom);
	return {
		showLoading: function(settings) {
			if (typeof settings != 'object') settings = opt;
			jDom.css({
				height: settings.height,
				width: settings.width,
				left: settings.left,
				top: settings.top,
				display: 'block'
			});
		},
		hideLoading: function() {
			jDom.css({
				display: 'none'
			});
		}
	};
}

function HeadLogin() {
	window.location.href = _HTTPS + 'vip.woqu.com/login?s=' + window.location.href;
}

function HeadLogout() {
	window.location.href = _HTTPS + 'vip.woqu.com/logout?s=' + window.location.href;
}
/* 
 * 定制浮层
 */
if ((location.protocol == 'http:') && ($.cookie('utm_medium_last') == 'cpc' && ($.cookie('utm_source_last') == '360so' || $.cookie('utm_source_last') == 'baidupz' || $.cookie('utm_source_last') == 'google'))) {
	if($.cookie('customLayer')!=1){
		$('#customLayer').show();
	}
}
var travelCustom_name_flag = false,
		travelCustom_phone_flag = false;
$('#customLayer').find('input').blur(function() {
	var val = $(this).val();
	var vtype = $(this).attr('data-vtype') || $(this).siblings('.select_type').val();
	var resCode = $.wqRegExpTest(vtype,val);
	if(!resCode.code){
		$(this).next().text(resCode.msg).show();
		return;
	}
	if($(this).is('#customName'))travelCustom_name_flag = true;
	if($(this).is('#customMobile'))travelCustom_phone_flag = true;
}).focus(function(){
	$(this).next().hide();
});
$('#customSubmitBtn').on('click',function(){
	if(!travelCustom_name_flag || !travelCustom_phone_flag){
		return;
	}
	$(this).attr('disabled',true).css({
		backgroundColor:'#ccc',
		cursor:'wait'
	});
	
	var params = {
			name:$('#customName').val(),
			phone:$('#customMobile').val(),
			countryCode: parseInt($('#customLayer').find('.select_type').find('option:selected').text()),
			orderSource:'bottom_banner',
			utmSource:$.cookie('utm_source'),
			utmMedium:$.cookie('utm_medium'),
			utmTime:$.cookie('utm_time'),
			from:'bottom'
	}
	 $.ajax({
			async : false,
			url: "https://w.woqu.com/pack/createCustomOrder",
			type: "POST",
			data : params,
			dataType : 'jsonp',
			jsonp : "callbackparam",
			success:function(data){
				if(data.ret == 1){
					$('.info_fill').hide().siblings('.info_success').show();
				}else{
					if (data.errMsg != null) {
						alert(data.errMsg);
					} else {
						alert("定制单提交失败，请重新提交\n"+
								"或请致电客服热线：400-661-5757 ");
					}
				}
			},
			error:function(a,b,c,d){
				alert("定制单提交失败，请重新提交\n"+
				"或请致电客服热线：400-661-5757 ");
				console.log(a+b+c+d);
			},
			complete:function(){
				travelCustom_name_flag = false;
				travelCustom_phone_flag = false;
				$('#customSubmitBtn').removeAttr('disabled').css({
					backgroundColor:'#f08300',
					cursor:'pointer'
				})
			}
	 })
})
$('#customCloseBtn,.customInfoSuccessCloseBtn').on('click',function(){
	$('#customLayer').animate({bottom:'-254px'},500);
	$.cookie('customLayer',1,{path:'/',domain:'.woqu.com',expires:1});
	if (!!ga) {
		ga('send', 'event', 'check_huoke', 'click_close',  {'nonInteraction': 1});
	}
})

//
var continent = $('#globalContinent').val() || 'global';

/* live800 kefu */
try{
	// JavaScript Document	 //cookie util
	 if (typeof LIM == "undefined") window.LIM = {};
	 LIM.getCookie = function(name) {
          var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
          arr = document.cookie.match(reg);
          var value = "";
          if (arr) {
              value = unescape(arr[2]);
          } else {
              value = null;
          }
          if (value != null) {
              value = value.replace(/\"/g, "");
          }
          return value;
     };
    LIM.setCookie = function(name, value, exp) {
        var Days = 30;
        try {
            document.cookie = name + "=" + value + ";";
        } catch (e) {
            throw "storing document cookie has error!";
        }
    };
    
    (function(){//保存访客来源必须添加到所有页面中
       var docref = document.referrer || "";
       if(docref && docref.toLowerCase().indexOf(location.hostname) == -1 ){//非本站才算入来源
         LIM.setCookie("refferChat",docref);
       }
    })();
	
	function openChat(chaturl,kuan,gao){
		var url=chaturl;
			url+="&enterurl="+encodeURIComponent(document.URL||window.location);
			url+="&pagetitle="+encodeURIComponent(document.title||window.location);
			url+="&timestamp="+new Date().getTime();
			url+="&pagereferrer="+(LIM.getCookie("refferChat")||"");
		window.open(url,"800chatbox","toolbar=0,scrollbars=0,location=0,menubar=0,resizable=1,width="+kuan+",height="+gao+"");
		if(document.getElementById("InviteWindow"))//打开对话后，隐藏邀请窗口
				document.getElementById("InviteWindow").style.display="none";
    }
	
	var live800_groups = [{configID:"125432",skillID:"6774"}, //境外参团组
	                     {configID:"125433",skillID:"6775"}, //自助游套餐
	                     {configID:"125434",skillID:"6800"}  //前端组
	                     ]; 
	
	var live_group = live800_groups[2]; //前端组
	var locationHref = window.location.href;
	if (locationHref.indexOf('/localjoin') != -1 || locationHref.indexOf('/cyclic') != -1){
		live_group = live800_groups[0]; //境外参团组
	}else if(locationHref.indexOf('/pack') != -1 || locationHref.indexOf('/car') != -1 || locationHref.indexOf('/insurance') != -1
			|| locationHref.indexOf('/wifi') != -1 || locationHref.indexOf('/sim') != -1 || locationHref.indexOf('/car') != -1
			|| locationHref.indexOf('/mustactive') != -1 || locationHref.indexOf('/traffic') != -1 || locationHref.indexOf('/ticket') != -1
			|| locationHref.indexOf('/pass') != -1 || locationHref.indexOf('/jrpass') != -1 || locationHref.indexOf('/theme')
	        || locationHref.indexOf('/album')!= -1 ){
		live_group = live800_groups[1]; //自助游套餐
	}	
	else{
		live_group = live800_groups[2];//前端组
	}
	
	var ssl = location.protocol == "http:"?"":"&ss=1";
//	var live800Script = '<div style="display:none;"><a href="http://www.live800.com">live800Link.webchat</a></div>'
//		+'<script type="text/javascript" src="'+location.protocol+'//v2.live800.com/live800/chatClient/floatButton.js?jid=6166624721&companyID=556242&configID='+configID+'&codeType=custom'+ssl+'"></script>'
//		+'<div style="display:none;"><a href="http://en.live800.com">live chat</a></div>';
//	  console.log(live800Script);
	//document.write(live800Script);
	//改变客服组
	 var live800_href="http://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=556242&jid=6166624721&configID="+live_group.configID+"&skillId="+live_group.skillID;

	 $("#onlineKefu").on('click',function(){
	     openChat(live800_href,900,600);	
	 });
	//添加live800的监控代码
	 if(location.protocol == "http:"){
	    var live800monitor = '<script type="text/javascript" src="'+location.protocol+'//v2.live800.com/live800/chatClient/monitor.js?jid=6166624721&companyID=556242&configID=125278&codeType=custom'+ssl+'"></script>';
	    //去除不需咨询页面URL
	    var _removeUrl = ['#/','http://woqu.com/'];
	    var _href = location.href;
	    var _noNeed = false;
	    for(var i=0;i<_removeUrl.length;i++){
	    	if(_href == _removeUrl[i]){
	    		_noNeed = true;
	    		break;
	    	}
	    }
	    if(!_noNeed)document.write(live800monitor);
	 }
		
}catch(e){
}
(function(){
	var wqConsult = JSON.parse($('#wqConsult').val() || '{}');
	if(!!wqConsult && wqConsult.flag){
		if(wqConsult.control == 'globe'){
			var globeConsultWin = $.cookie('globeConsultWin');
			if(!globeConsultWin){
				showConsultWin({
					time: wqConsult.rule.first,
					cssClass: wqConsult.style,
					repeat:((wqConsult.rule.count > 0) ? ({time: wqConsult.rule.second,count:wqConsult.rule.count}) : false),
					title: wqConsult.content,
					closeCallBack: function(index,max){

						if(max && (index == max)){
							$.ajax({
								url: '#/consult/close?url=' + location.href + '&wquid=' + $.cookie('_woqu_guid'),
								success: function (data) {

								}
							});
							
							$.cookie('globeConsultWin','1',{
								path: '/',
								domain: 'woqu.com',
								expires: new Date(new Date().getTime() + 60 *60 * 1000) 
							})
						}
					}
				});
				
			}
		}else{
			showConsultWin({
				time: wqConsult.rule.first,
				cssClass: wqConsult.style,
				repeat:((wqConsult.rule.count > 0) ? ({time: wqConsult.rule.second,count:wqConsult.rule.count}) : false),
				title: wqConsult.content,
				closeCallBack: function(index,max){
					if(max && (index == max)){
						$.ajax({
							url: '#/consult/close?url=' + location.href + '&wquid=' + $.cookie('_woqu_guid'),
							success: function (data) {

							}
						});
					}
				}
			});	
		}
	}
})()
function showConsultWin(options){
	var wqKfView = function(options){
		this.options = options;
		this.index = 0;
		this.init();
	};
	wqKfView.prototype = {
		init: function(){
			this.elem = this.viewElem();
			this.showModal(this.options.time || 30000);
			this.addCloseEvent();
			this.addDragEvent();
			this.showLive800();
		},
		viewElem: function(){
			var html = [
		   	     '<div class="consult-window ' + (this.options.cssClass || '') + '" id="consultWindow">',
		   	     	'<div class="cw-title">' + (this.options.title || '有疑问吗？<br>我也许可以帮你哦') + '</div>',
		   	     	'<span class="cw-btn" id="cwBtn"></span>',
		   	     	'<span class="cw-close" id="cwClose"></span>',
		   	     '</div>'
		   	].join('');
		   	return $(html).appendTo('body');
		},
		closeModal: function(){
			this.elem.hide();
		},
		showModal: function(time){
			var _this = this;
			setTimeout(function(){
				_this.elem.show();
			},time);
		},
		addCloseEvent: function(){
			var _this = this;
			var closeBtn = _this.elem.find('#cwClose');
			closeBtn.on('click',function(){
				_this.closeModal();
				_this.index++;
				_this.options.closeCallBack && _this.options.closeCallBack(_this.index,_this.options.repeat.count || 0);
				if(_this.options.repeat){
					if( _this.index > _this.options.repeat.count - 1 )return;
					_this.showModal(_this.options.repeat.time || 60000);
				}
			})
		},
		addDragEvent: function(){
			var _this = this;
			var consultWindow = document.getElementById('consultWindow');
			consultWindow.onmousedown = function(e){
				e = e || window.event;
				var elemTop = _this.elem[0].offsetTop;
				var elemLeft = _this.elem[0].offsetLeft;
				var distanceTop = e.clientY - elemTop;
				var distanceLeft = e.clientX - elemLeft;
				var distance = {
					top: distanceTop,
					left: distanceLeft
				}
				consultWindow.onmousemove = function(e){
					_this.drag(e || window.event,distance);
				};
			}
			consultWindow.onmouseup = function(){
				consultWindow.onmousemove = null;
			};
		},
		drag: function(e,distance){
			var top = e.clientY - distance.top ;
			var left = e.clientX - distance.left ;
			var maxTop = $(window).height() - this.elem.outerHeight(false);
			var maxLeft = $(window).width() - this.elem.outerWidth(false);
			top = top < 0 ? 0 : top;
			top = top > maxTop ? maxTop : top;
			left = left < 0 ? 0 : left;
			left = left > maxLeft ? maxLeft : left;
			this.elem.css({
				top: top + this.elem.outerHeight(false)/2,
				left: left + this.elem.outerWidth(false)/2
			})
		},
		showLive800: function(){
			this.elem.find('#cwBtn').on('click',function(){
				$('#onlineKefu').click();
			});
		}
	}
	return new wqKfView(options || {});
}
//py

var _py_type = null;
var _py_href = location.href;
if(_py_href.indexOf('sim') > -1){
    _py_type = '7';
}else if(_py_href.indexOf('insurance') > -1){
    _py_type = '6';
}else if(_py_href.indexOf('visa') > -1){
    _py_type = '5';
}else if(_py_href.indexOf('hotel') > -1){
    _py_type = '4';
}else if(_py_href.indexOf('ticket') > -1){
    _py_type = '3';
}else if(_py_href.indexOf('mustactive') > -1){
    _py_type = '2';
}else if(_py_href.indexOf('pack') > -1){
    _py_type = '1';
}else if(_py_href.indexOf('localjoin') > -1){
    _py_type = '0';
}
if(_py_type !== null ){

    //detail
    if(_py_href.indexOf('detail') > -1){
        var _m,_btn,_goodsData = {
            id:$('#businessID').val(), //商品ID（必填）
            soldOut:'0', // 状态 1下架，0在售（必填）
            category:'', // 所属分类完整路径 （必填）
            categoryId:_py_type, // 所属分类ID （必填）
            name:'', // 商品名称（必填）
            price:'', // 商品售价（必填）
            imgUrl:'', // 商品预览图 （必填）
            productUrl:location.href, // 商品URL地址 （必填）
            domain:'', // 分站（如有分站必填）
            brand:'', // 商品品牌(选填)
            promotion:'', // 促销信息 (选填)
            discount:'', // 折扣数字(选填)
            origPrice:'', // 商品原价(选填)
            currency:$('#currencySwitch').find('.active_currency').data('symbol') || 'CNY'
        };

        if(_py_href.indexOf('hotel') > -1){
            _goodsData.name = $('#productTitle').val();
            _goodsData.imgUrl = 'http:' + $('.hotel_main_img').find('img').attr('src');
            _goodsData.category = $('.wq_bread_crumb').text().replace(/\s+/g,'').split('>').join('-');
            _btn = $('.submit');
            _m = $('.unitcost').eq(0).val();
        }else if(_py_href.indexOf('localjoin') > -1){
            _goodsData.name = $('#titleCn').val();
            _goodsData.imgUrl = 'http:' + $('.viewer-big-img').attr('src');
            _goodsData.category = $('.wq_bread_crumb').text().replace(/\s+/g,'').split('>').join('-');
            _btn = $('#bookNow');
            _m = $('.price-area').find('.price').text();
        }else if(_py_href.indexOf('pack') > -1){
            _goodsData.name = $('#lineName').val();
            _goodsData.imgUrl = 'http:' + $('.photo-list').find('img').eq(0).attr('src');
            _goodsData.category = '自由行';
            _btn = $('.btn_book_now');
            _m = $('.unit_price_total').text() + '/人起';
        }else if(_py_href.indexOf('sim') > -1){
            _goodsData.name = $('#titleCn').text();
            _goodsData.imgUrl = 'http:' + $('#imageShow').attr('src');
            _goodsData.category = $('.wq_bread_crumb').text().replace(/\s+/g,'').split('>').join('-');
            _btn = $('#wq_car_book');
            _m = $('#startPrice').find('span').text();
        }else if(_py_href.indexOf('ticket') > -1){
            _goodsData.name = $('#titleCn').text().replace(/\s+/g,'');
            _goodsData.imgUrl = 'http:' + $('#mainImage').attr('src');
            _goodsData.category = $('.wq_bread_crumb').text().replace(/\s+/g,'').split('>').join('-');
            _btn = $('#book-btn');
            _m = $('#start-price').text();
        }else if(_py_href.indexOf('insurance') > -1){
            _goodsData.name = $('#titleCn').text();
            _goodsData.imgUrl = 'http:' + $('#mainImage').attr('src');
            _goodsData.category = $('.wq_bread_crumb').text().replace(/\s+/g,'').split('>').join('-');
            _btn = $('#insuranceBook');
            _m = $('#startPrice').find('span').text();
        }else if(_py_href.indexOf('mustactive') > -1){
            _goodsData.name = $('#titleCn').text().replace(/\s+/g,'');
            _goodsData.imgUrl = 'http:' + $('#mainImage').attr('src');
            _goodsData.category = $('.wq_bread_crumb').text().replace(/\s+/g,'').split('>').join('-');
            _btn = $('#book-btn');
            _m = $('#start-price').text();
        }else if(_py_href.indexOf('visa') > -1){
            _goodsData.name = $('#titleCn').text();
            _goodsData.imgUrl = 'http:' + $('#mainImage').attr('src');
            _goodsData.category = $('.wq_bread_crumb').text().replace(/\s+/g,'').split('>').join('-');
            _btn = $('#wq_car_book');
            _m = $('#startPrice').text();
        }
        _goodsData.price = _m;
        var _py = _py || [];
        _py.push(['a', 'yQ..FXlAOlyvmSPMNg0c9OwhN_']);
        _py.push(['domain','stats.ipinyou.com']);
        _py.push(['pi',_goodsData]);
        _py.push(['pv',_py_type]);
        _py.push(['e','']);

        -function(d) {
            var s = d.createElement('script');
            var e = d.body.getElementsByTagName('script')[0]; 
            f = 'https:' == location.protocol;
            e.parentNode.insertBefore(s, e);
            s.src = (f ? 'https' : 'http') + '://'+(f?'fm.ipinyou.com':'fm.p0y.cn')+'/j/adv.js';
        }(document);

        //detail btn event
        _btn.on('click',function(){
        	if(_py_type == '0' && $('.tolprice').text() == '0000.00')return;
            (function(_money,_productList){
                var w=window,d=document,e=encodeURIComponent;
                var b=location.href,c=d.referrer,f,g=d.cookie,h=g.match(/(^|;)\s*ipycookie=([^;]*)/),i=g.match(/(^|;)\s*ipysession=([^;]*)/);
                if (w.parent!=w){f=b;b=c;c=f;};u='//stats.ipinyou.com/cvt?a='+e('yQ.Rvs.asrbtzDxGV1Eli77GTW7XX')+'&c='+e(h?h[2]:'')+'&s='+e(i?i[2].match(/jump\%3D(\d+)/)[1]:'')+'&u='+e(b)+'&r='+e(c)+'&rd='+(new Date()).getTime()+'&Money='+e(_money)+'&ProductList='+e(_productList)+'&e=';
                (new Image()).src=u;
            })(_m,$('#businessID').val() + ',1;');
        });
    }else{
    	var _py = _py || [];
    	_py.push(['a', 'yQ..FXlAOlyvmSPMNg0c9OwhN_']);
        _py.push(['domain','stats.ipinyou.com']);
        _py.push(['e','']);
        _py.push(['pv',_py_type]);
        -function(d) {
            var s = d.createElement('script');
            var e = d.body.getElementsByTagName('script')[0]; 
            var f = 'https:' == location.protocol;
            e.parentNode.insertBefore(s, e);
            s.src = (f ? 'https' : 'http') + '://'+(f?'fm.ipinyou.com':'fm.p0y.cn')+'/j/adv.js';
        }(document);
    }
}
