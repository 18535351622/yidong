$(function(){

	var customized = {
		init:function(){

			customized.initDate();
			customized.where();
			customized.initMobileSelect();

			$('.submit-btn').on('click',function(){
				var flag = customized.submitCheck();
				if(!flag)return;
				$(this).off('click').css({background:'#ccc'});
				customized.postData();
			});
			
			$('.cod_close').on('click',function(){
				location.reload(true);
			});
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
					$("#wq_consultants").html(content);
				}
			});


		},
		where:function(){
			//where
			$('.text-where').on('click',function(e){
				e.stopPropagation();
				customized.whereCssChange(true);				
				//customized.leaveAdd(true);				
			});
			//remove
			$('.text-where').on('click','.c',function(e){
				e.stopPropagation();
				$(this).parent().remove();
			});
			//keydown
			$('.text-where').find('input').on('keydown',function(e){
				e.stopPropagation();
				var v = $.trim($(this).val());
				
				var h5 = $('.text-where').find('h5');
				var span = h5.find('span');
				var len = span.length;
				
				if(e.keyCode == 32 || e.keyCode == 13){
					if(v === '')return;
					$(this).val('');
					if(len > 4){
						wq.layer.hoverTip(this,{content:'亲，您最多可以选择五个地方！'}).close(2000);
						return;
					}
					h5.append('<span>'+v+'<i class="c"></i></span>');
				}else if(e.keyCode == 8 ){
					if(len < 1)return;
					span.eq(len-1).remove();
					$(this).click();
				}
			});

			$('.where').on('click',function(e){
				e.stopPropagation();				
				customized.leaveAdd();
			});
			//add
			$('.where').find('span').on('click',function(e){
				e.stopPropagation();
				var v = $(this).text();
				var h5 = $('.text-where').find('h5');
				var span = h5.find('span');
				var flag = true;
				if(span.length > 4){
					wq.layer.hoverTip(this,{content:'亲，您最多可以选择五个地方！'}).close(2000);
					return;
				}
				span.each(function(){
					if($(this).text() === v){
						flag = false;
						return false;
					}
				});
				if(!flag){
					wq.layer.hoverTip(this,{content:'亲，您已经选择了这个地方！'}).close(2000);
					return;
				}
				h5.append('<span>'+v+'<i class="c"></i></span>');
			});
			
		},
		initDate:function(){
			var date = new Date();
			var y = date.getFullYear();
			var m = date.getMonth() + 1;
			var html = ['<span class="on" data-time="-1">不确定</span>'];
			for(var i=0;i<12;i++){
				
				if(m > 12){
					m = 1;
					y++;
				}
				
				html.push('<span>'+y+'年'+(m++)+'月</span>');
			}
			$('#dateSelect').append(html.join('')).on('click','span',function(e){
				e.stopPropagation();
				$(this).parents('.time-list').css({
					borderColor:'#fff'
				});
				var v = $(this).text();
				$('.time-span').text(v).attr('data-time',v);
				$('#dateSelect').hide();
				$(this).addClass('on').siblings().removeClass('on');
			});

			$('.time-list').on('click',function(e){
				e.stopPropagation();
				$(this).css({
					borderColor:'#0aaa96',
					borderBottomColor:'#fff'
				});
				$('#dateSelect').show();
			});

		},
		initMobileSelect:function(){
			wq.initMobileSelect({
				box:$('#phoneSelect'),
				li:'span',
				evt:'click',
				selectChange:function(ele){
					var _this = $(ele);
					var text = _this.text();
					var value = _this.attr('data-value');
					var type = _this.attr('data-type');
					_this.parents('.phone').find('.phone-span').text(text).next().attr({
						'data-value':value,
						'data-type':type
					});
					$('#phoneSelect').hide();
					_this.addClass('on').siblings().removeClass('on');
				}
			});
			$('#phoneSelect').find('span').eq(0).addClass('on');
			$('.phone-span').on('click',function(e){
				e.stopPropagation();
				$('#phoneSelect').show();
			});
		},
		postData:function(){
			var str = '',params = [];
			$('.text-where').find('h5 span').each(function(){
				var v = $(this).text() + ',';
				str += v;
			});
			params.push({name : 'wantGo', value : str});
			params.push({name : 'tags', value : $('[name="who"]:checked').val()});
			params.push({name : 'startDay', value : $('.time-span').attr('data-time')});
			params.push({name : 'name', value : $('[name="guestName"]').val()});
			params.push({name : 'countryCode', value : $('[name="mobile"]').attr('data-value')});
			params.push({name : 'phone', value : $('[name="mobile"]').val()});
			params.push({name : 'orderSource', value : $('[name="ls"]').val()});
			params.push({name : 'a' ,value : $('#a').val()});
		    $.ajax({
				async : false,
				url: 'https://w.woqu.com/pack/createCustomOrder',
				type: 'POST',
				data : params,
				dataType : 'jsonp',
				jsonp : "callbackparam",
				success:function(data){
					if(data.rs == 1) {
						if (data.products != null) {
							$('#validateAll').show();
							data = data.products;
							var len = data.length;
							if (len < 1) {
								$(".cods_subtitle").remove();
								$(".cods_commend").remove();
								return;
							}
							var products = $(".cods_commend");
							for (var i = 0; i < len; i++) {
								products.append('<li><p class="cods_commend_title"><a target="_blank" href="' + data[i].url + '" >' + data[i].productName + '</a></p>\
            				<p class="cods_commend_price" >' + data[i].showCurrency + "&nbsp;&nbsp;" + data[i].price + '/人起</p></li>');
							}
							//订制单成功后事件统计
							var url = window.location.href;
							var type = "pack_list";
							if (url.indexOf("detail") > 0) type = "pack_detail";
							else if (url.indexOf("custom") > 0) type = "pack_custom_page";
							if (!!ga)ga('send', 'event', 'fill_consult_form', 'finish_fill_form', type);
						}
					}else{
						if (data.msg != null) {
							//alert(data.errMsg);
							wq.layer.dialog({
								title:'我趣君提示您',
								width:400,
								content:'出错了！'+data.errMsg
							});
						} else {
							alert('定制单提交失败\n' + '请致电客服热线：400-661-5757 \n in successfn,no errMsg!');
						}
						location.reload();
					}
				},error:function(err,textstatus){
					alert('in errorfn (errCode:' + err.status +'/errType:'+ textstatus + ')\n定制单提交失败\n' +'请致电客服热线：400-661-5757');
					location.reload();
				},complete:function(err,text){
					//alert(err.status+'/n'+text);
				}
			}); 
		},
		submitCheck:function(){
			var flag = true;
		    $('.inpts').each(function(){
		        var _this = $(this);
		        var type = _this.attr('data-type');
		        var v = _this.val();
		        var res = $.wqRegExpTest(type,v);
		        if(!res.code){
		            wq.layer.hoverTip(_this,{content:res.msg}).close(2000);
		            flag = false;
		            return false;
		        }
		    });
		    return flag;
		},
		leaveAdd:function(need){
			var textWhere = $('.text-where');
			var input = textWhere.find('input');
			var v = $.trim(input.val());
			var h5 = textWhere.find('h5');
			var span = h5.find('span');
			var len = span.length;
			if(v != ''){				
				input.val('');
				if(len > 4){
					wq.layer.hoverTip(input,{content:'亲，您最多可以选择五个地方！'}).close(2000);
					return;
				}
					
				h5.append('<span>'+v+'<i class="c"></i></span>');
				
			}
			if(need)input.focus();
		},
		whereCssChange:function(on){
			if(on){
				$('.where').show();
				$('.text-where').css({
					borderColor:'#0aaa96',
					borderBottomColor:'#fff'
				}).find('input').css({
					width:474 - $('.text-where').find('h5').outerWidth(),
					marginLeft:$('.text-where').find('h5').outerWidth(),
					height:'34px',
					lineHeight:'34px'
				});
			}else{
				$('.where').hide();
				$('.text-where').css({
					borderColor:'#fff'
				}).find('input').css({
					width:474 - $('.text-where').find('h5').outerWidth(),
					marginLeft:$('.text-where').find('h5').outerWidth(),
					height:'34px',
					lineHeight:'34px'
				});
			}
		}
	};
	
	customized.init();

	$(document).on('click',function(){
		//where
		customized.whereCssChange();
		//date
		$('#dateSelect').hide();
		$('.time-list').css({
			borderColor:'#fff'
		});
		//phone
		$('#phoneSelect').hide();		
		customized.leaveAdd();
	});

});
