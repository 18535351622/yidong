$(function($, window, document, undefined) {
	var $FAQ = {
		config: {
			category: '',
			country: ''
		},
		func: {
			load: function(category, poi, pageSize, continent) {
				var faq_list = $('#div_faqlist_right>.faq_list');
				if(continent == ''){
					$('#faqlist_more').attr('href', '#/north_america/faq-' + category + '/faq');
				}else{
					$('#faqlist_more').attr('href', '#/' + continent + '/faq-' + category + '/faq');
				}
				$.ajax({
					url: '#/queryFaq?poi=' + poi + '&category=' + category + '&pageSize=' + pageSize,
					dataType: 'json',
					success: function(pageRes) {
						var _html = '';

						for (var i = 0; i < pageRes.list.length; i++) {
							var faq = pageRes.list[i];
							_html = '<li>· <a href="#/faq/' + faq.faqId + '" target="_blank">' + faq.question + '</a></li>';
							$(faq_list).append(_html);
						}
					},
					error: function() {
						var error_tips_html = '<li name="faq_error_tips" class="wq_clearfix">' + '<p class="evaluation_text font_size14 font_color_black">常见问题加载失败，请稍后刷新重试!</p>' + '</li>';
						faq_list.append(error_tips_html);
					}
				});
			}
		}
	};
	
	window.$FAQ = $FAQ;

}(jQuery, window, document));