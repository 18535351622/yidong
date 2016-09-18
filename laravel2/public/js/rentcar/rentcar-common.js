;$(function($, window, document, undefined) {
	function initTitle() {
		if (window.location.host == 'eueueu.woqu.com') {
			$('title').html('【走遍欧洲】' + $('title').html());
		}
	}
	initTitle();
}(jQuery, window, document))

/**
 * @ func: car loading tips
 * @ author: Frend
 * @ date: 2014-09-25
 */
$.fn.wqLoading = function(opts) {
	var countryMap = {
		'US': [
			'您知道吗？加州和佛罗里达州境内异地还车经常是免费的。',
			'温馨提示：租一周的价格是最划算的。',
			'您知道吗？出行高峰时段的商务车和SUV会很紧张，请提早预订。',
			'温馨提示：加州、内华达州、亚利桑那州之间是免异地还车费的。',
			'您知道吗？美国租车保险的自保额为零，您无需支付任何修理费用。'
		],
		'CA': [
			'您知道吗？出行高峰时段的商务车和SUV会很紧张，请提早预订。',
			'温馨提示：租一周的价格是最划算的。',
			'您知道吗？机场取车时，有些车行的门店在机场内，而有些则需要乘坐大巴前往。',
			'温馨提示：在美国租车，也可以将车辆开到加拿大行驶。',
			'您知道吗？在加拿大租车，您可以在门店租用滑雪机架或雪地轮胎等装备。'
		],
		'AU': [
			'温馨提示：澳大利亚是靠左侧行驶的，请小心驾驶。',
			'您知道吗？出行高峰时段的商务车和SUV会很紧张，请提早预订。',
			'温馨提示：澳洲租车的保险设有自保额，小额修理费保险无法赔付。',
			'您知道吗？在墨尔本行车，右转需要遵循hook turn的原则。',
			'您知道吗？机场取车时，有些车行的门店在机场内，而有些则需要乘坐大巴前往。'
		],
		'NZ': [
			'温馨提示：新西兰是靠左侧行驶的，请小心驾驶。',
			'您知道吗？出行高峰时段的商务车和SUV会很紧张，请提早预订。',
			'温馨提示：新西兰租车的保险设有自保额，小额修理费保险无法赔付。',
			'您知道吗？机场取车时，有些车行的门店在机场内，而有些则需要乘坐大巴前往。',
			'您知道吗？新西兰是世界上最适合自驾游的国家，没有之一。'
		],
		'others': [
			'您知道吗？出行高峰时段的商务车和SUV会很紧张，请提早预订。',
			'温馨提示：租一周的价格是最划算的。',
			'您知道吗？机场取车时，有些车行的门店在机场内，而有些则需要乘坐大巴前往。',
		]
	};

	return this.each(function() {
//		临时处理为公用文案，暂时没有大洲文案
		var content;
		if (countryMap[opts.countryCode]) {
			content = opts.content || countryMap[opts.countryCode][Math.floor(Math.random()*5)];
		}else{
			content = opts.content || countryMap['others'][Math.floor(Math.random()*3)];
		}
		var _this = $(this),
			loadingHTML = $('<div class="wq_loading_outter" style="height: 100px;padding-top: 60px;width: 1200px;border: none;background-color: #fff;margin-bottom: 20px;"><div class="wq_loading_inner" style="position: relative;color: #03a7a7;font-size: 20px;height: 31px;line-height: 31px;margin: 0 auto;padding-left: 45px;background: url(//www.quimg.com/a4535/img/common/loading.gif) no-repeat;"><span class="wq_loading">' + content + '</span></div><div class="process_wrapper"><div class="hd_load_progress"><span class="hdl_content" ></span></div></div></div>'),
			width = 0;

		_this.html(loadingHTML);
		width = _this.find('span.wq_loading').width();
		loadingHTML.find('div.wq_loading_inner').css({
			width: width + 45
		});
	});
};



/**
 * @ func: car google map
 * @ author: Frend
 * @ date: 2014-08-14
 */
var Carmap = function(lat, lng) {
	if (!(typeof google === 'object' && typeof google.maps === 'object'))
		return;
	this.lat = lat;
	this.lng = lng;

	this.myCenter = new google.maps.LatLng(lat, lng);
};

Carmap.prototype = {
	constructor: Carmap,

	initCarMap: function() {
		var mapProp = {
				center: this.myCenter,
				zoom: 12,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			},
			map = new google.maps.Map(document.getElementById("carMap"), mapProp),
			marker = new google.maps.Marker({
				position: this.myCenter,
				icon: 'http://www.quimg.com/googleMap/empty.png'
			});

		//create marker icon
		marker.setMap(map);
	}
};

//invoke car map
$(document.body).on('click', '.car_map_link', function() {
	var _this = $(this),
		lat = _this.data('lat'),
		lng = _this.data('lng'),
		title = _this.data('address') || '抱歉，暂无该门店的地址信息！';

	$('.car_map_wrapper').show();
	try {
		var carListMap = new Carmap(lat, lng);
		carListMap.initCarMap();
		$('#carMapTitle').text(title);
	} catch (e) {
		alert('加载地图失败!');
	}
});
$(document.body).on('click', '.car_map_close, .car_map_mask', function() {
	$('.car_map_wrapper').fadeOut();
});


