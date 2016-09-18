;!function($, window, document, undefined) {
    //banner
	var len = $('.piclist').find('li').length;
	if(len > 1){
		wq.photoWall({
	        auto:true,
	        jump:true
	    });
	}
	
	$('img.lazy').lazyload();
	
	//客服qq和wechat
	$.ajax({
		url: "#/kefu-list",
		type: 'post',
		dataType: 'JSON',
		success: function(data){
			var content = '';
			if(data.rs == 1){
				content = '<h3>我趣私家旅行顾问</h3><ul>';
				for(var i = 0; i < data.data.kefus.length;i++){
					if(i == 4) break;
					var kefu = data.data.kefus[i];
					content +='<li class="a'+i+'">'
					+'<span class="img"><img src="'+kefu.wechatAndQQ.photoImg+'" width="77" height="70"></span>'
					+'<p><span>'+kefu.continentName+'</span>旅行顾问</p>'
					+'<p>'+kefu.wechatAndQQ.wcNichName+'</p>'
					+'<img src="'+kefu.wechatAndQQ.wcQRCode+'" alt="" width="100" height="100">'
					+'<p class="last">加我微信，沟通更快</p></li>'
				}
				content +='</ul><div class="qqgroup"><p class="first"><em></em>QQ群：</p><p>';

				for(var i = 0 ; i < data.data.qqGroups.length;i++){
					var group = data.data.qqGroups[i];
					content +='<span>'+group.continentName+'<i>'+group.qqGroupNo+'</i>（暗号：'+group.qqTip+'）</span>';
					if(i == 1){
						content +="</p><p>";
					}
				}

				content +='</p></div>';
			}
			$("#wqConsultants").html(content);
		}
	});

	
}(jQuery, window, document);