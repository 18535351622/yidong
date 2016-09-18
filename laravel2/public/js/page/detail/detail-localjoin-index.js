;$(function($, window, document, undefined) {
    var $D = detail = {
        config: {
            curMonth:'',
            businessID: $('#businessID').val(),
            roomInfoMapList: '',
            warehouseLagDay: '',
            warehouseNo: '',
            dataEmpty: false,
            compare_product_num: 0,
            hotelGroupId: '',
            roomObj: {}
        },
        func: {
            init: function() {
                //initial function
                 $D.func.exchangeImg();
                 $D.func.clickImage();
                 $D.func.scrollingEffect();
                 $D.func.poiImageScroll();
                 $D.func.poiBriefScroll();

                 $D.func.fill_cookie_to_cart();

                 
                 // 初始化咨询
                 $QA.load(1);
                 // 初始化评论
                 $CMT.load(1, $D.func.cmtCallback);
                 //lazy load
                 $('img.lazy').lazyload();

                 //hover Tips
                 var showTipsContent = "";
                 if($('#continents').val() == "oceania" ) {
                     showTipsContent = "此起价为两人或三人共住一间，每人所需支付的最低团费 。产品价格会根据您所选的出行日期、酒店升级以及其他升级服务的不同而有所变动。";
                 }else if($('#continents').val() == "europe"){
                     showTipsContent = "此起价为两人共住一个标准间，每人所需支付的最低团费。产品价格会根据您所选的出行日期以及其他升级服务的不同而有所变动。";
                 }else{
                     showTipsContent = "此起价为三人或四人共住一个标准间，每人所需支付的最低团费。产品价格会根据您所选的出行日期、酒店等级以及其他升级服务的不同而有所变动。";
                 }
                 $('.price-tips').on('mouseover', function() {
                    wq.layer.hoverTip(this,{
                        width:250,
                        content: showTipsContent
                    });
                 }).on('mouseout', function() {
                      wq.layer.close(100);
                 });
                 
                 $('.start-date-tips').on('mouseover', function() {
                    wq.layer.hoverTip(this,{
                        width:300,
                        content:'此团出发日期为<span class="font_color_orange"> ' + $(this).data('loc') + ' </span>当地时间。'
                    });
                 }).on('mouseout', function() {
                      wq.layer.close(100);
                 });

                 $('.favour-tag').on('mouseover', function() {
                     wq.layer.hoverTip(this,{
                        width:350,
                        content: $(this).data('des')
                    });
                 }).on('mouseout', function() {
                      wq.layer.close(100);
                 });
                 $('.price-convert').on('mouseover', function() {
                     wq.layer.hoverTip(this,{
                        width:200,
                        content: '约合 '+ $(this).data('currency') + ' ' + $(this).data('convert')
                    });
                 }).on('mouseout', function() {
                      wq.layer.close(100);
                 });

                 /*
                 **compare price
                 */
                if ($.cookie('comparedStatus') == "1") {
                    $('.compare_price_cart').show();
                } else {
                    $('.compare_price_cart').hide();
                }
                var productsCookie = $.cookie('compareProduct');
                if (productsCookie !== undefined) {
                    if (productsCookie.indexOf($D.config.businessID) != -1){
                        $('.compare-cancel').show().siblings('.compare-btn').hide();
                    }
                }
                /*删除*/
                $('.cp_cart_delete').on('click', function() {
                    var cp_cart_del_num = $(this).parent().siblings('.cp_cart_product_num').text();
                    $D.func.cp_cart_delete(cp_cart_del_num);
                    if (cp_cart_del_num == $D.config.businessID) {
                        $('.compare-cancel').hide().siblings('.compare-btn').show();
                    }
                });
                //初始化对比栏物品数目
                $('.cp_cart_product').each(function(e) {
                    var productsCookie = $.cookie('compareProduct');
                    if (productsCookie == undefined) {
                        $D.config.compare_product_num = 0;
                    } else {
                        $D.config.compare_product_num = productsCookie.split('_').length;
                    }
                });

                //添加对比
                $('.compare-btn').on('click', function() {
                    $('.compare_price_cart').show();
                    $.cookie('comparedStatus', '1', {
                        path: '/'
                    });
                    var _this = $(this),ld_cp_pronum = $D.config.businessID;
                    var ld_cp_title = $('#titleCn').val(),
                        ld_cp_price = '<span id="unit-price"><span class="ld_price_currency">'+$('#currency').val()+'</span><font class="font_size28">'+ $('.price').find('span').text() +'</font></span>/人起';
                                /*填取数据*/
                    
                    var productsCookie = $.cookie('compareProduct');
                    if (productsCookie !== undefined) {
                        if (productsCookie.indexOf(ld_cp_pronum) != -1) {
                            _this.hide().siblings('.compare-cancel').show();
                            $D.func.fill_to_compare_cart(ld_cp_title, ld_cp_price, ld_cp_pronum);
                            return false;
                        }
                        if (productsCookie.split('_').length >= 3) {
                            $(this).siblings('.ld_cp_limit_hint').show();
                            setTimeout(function() {
                                $('.ld_cp_limit_hint').fadeOut('slow');
                            }, 3000);
                            $D.func.fill_to_compare_cart(ld_cp_title, ld_cp_price, ld_cp_pronum);
                            return false;
                        }
                    }
                    if ($D.config.compare_product_num == 3) {
                        $(this).siblings('.ld_cp_limit_hint').show();
                        setTimeout(function() {
                            $('.ld_cp_limit_hint').fadeOut('slow');
                        }, 3000);
                    } else {
                        _this.hide().siblings('.compare-cancel').show();
                        
                        if (productsCookie !== undefined && productsCookie != '' && productsCookie != 'null' && productsCookie != null) {
                            $.cookie('compareProduct', productsCookie + "_" + ld_cp_pronum, {
                                path: '/'
                            });
                        } else {
                            $.cookie('compareProduct', ld_cp_pronum, {
                                path: '/'
                            });
                        }

                        
                    }
                    $D.func.fill_to_compare_cart(ld_cp_title, ld_cp_price, ld_cp_pronum);          
                });
                //对比所选产品
                $('.cp_compare_btn').on('click', function() {
                    if ($D.config.compare_product_num < 2) {
                        $('.cart_compare_hint').show();
                        setTimeout(function() {
                            $('.cart_compare_hint').fadeOut('slow');
                        }, 3000);
                    } else {
                        window.open('/localjoin/compare');
                    }
                });
                //取消对比
                $('.compare-cancel').on('click', function() {
                    var ld_cp_pronum = $D.config.businessID;
                    // console.log('ld_cp_pronum',ld_cp_pronum)
                    $D.func.cp_cart_delete(ld_cp_pronum);
                    //取cookie中最新产品加入对比栏
                    // $D.func.fill_cookie_to_cart();
                    $(this).hide().siblings('.compare-btn').show();
                });
                //隐藏对比栏
                $('.cp_hide_btn').on('click', function() {
                    $('.compare_price_cart').hide();
                    $.cookie('comparedStatus', '0', {
                        path: '/'
                    });
                });
                /*对比栏*/
                $('.compare_side_btn').on('click', function() {
                    if ($('.compare_price_cart').is(':hidden')) {
                        $('.compare_price_cart').show();
                        $.cookie('comparedStatus', '1', {
                            path: '/'
                        });
                    } else {
                        $('.compare_price_cart').hide();
                        $.cookie('comparedStatus', '0', {
                            path: '/'
                        });
                    }
                });
                /*清空产品*/
                $('.cp_clean_all').on('click', function() {
                    $('.cp_cart_product .cp_cart_product_num').each(function() {
                        $D.func.cp_cart_delete($(this).text());
                    });
                    $('.compare-cancel').hide().siblings('.compare-btn').show();
                    $D.config.compare_product_num = 0;
                    $.cookie('compareProduct', null);
                });

                //开始预订
                $('.book-start').on('click', function(e) {
                    e.stopPropagation();
                    $D.func.loadVaildMonth();
                    
                });
                 //show calender
                 $('#start-date').on('click', function(e) {
                    e.stopPropagation();
                    if($D.config.dataEmpty) return ;
                    $D.func.loadVaildMonth();

                 });
                 //attach combo change event
                 $('#comboWrapper').on('change','select', function() {
                    // call the calculate function
                    $D.func.calculatePrice();
                 });
                 //拼房
                 $('#roomInfoList').on('click', '#PF',function() {
                    $D.func.calculatePrice();
                 });
                 $('#roomInfoList').on('click', '.radio-item',function() {
                    $D.func.calculatePrice();
                 });
                 $('#hotelExpend').on('click','.combo-hotel-check', function() {
                    $D.func.calculatePrice();
                 });
                 //AD KD RN change event
                 $('.people-select').on('change','select', function(){
                    $D.func.calculatePrice();
                 });
                 //ajust room 
                 $('#roomInfoList').on('click', '.ajust-room-info', function(){
                    $('.option-group').hide();
                    $('.option-table-wrapper').hide();
                    $('.room-edit-layer').show();
                 });
                 //adjust confirm
                 $('#roomInfoList').on('click', '.adjust-confirm', function(){
                    if($D.config.roomObj.ADResource != 0 || $D.config.roomObj.KDResource != 0 ) {
                        $D.func.warnMsg('sumError');
                        return;
                    } else {
                        $D.func.calculatePrice(true);
                    }
                    
                 });

                 //adjust cancel
                 $('#roomInfoList').on('click', '.adjust-cancel, .allot-reset', function(){
                    $D.func.calculatePrice();
                 });

                 //people adjust
                 $('#roomInfoList').on('click', '.plus', function(){
                    var _this = $(this);
                    var _parent = _this.parents('tr');
                    var _index = _parent.index() - 1;
                    var _type = _this.attr('data-type');

                    if(!_this.hasClass('plus-on')) return;

                    $D.config.roomObj.roomInfoMapList[_index][_type] = parseInt($D.config.roomObj.roomInfoMapList[_index][_type]) + 1 ;
                    $D.config.roomObj[_type + 'Resource'] = parseInt($D.config.roomObj[_type + 'Resource']) - 1;

                    $D.func.renderRoom();

                 });
                 $('#roomInfoList').on('click', '.minus', function(){
                    var _this = $(this);
                    var _parent = _this.parents('tr');
                    var _index = _parent.index() - 1;
                    var _type = _this.attr('data-type');

                    if(!_this.hasClass('minus-on')) return;

                    $D.config.roomObj.roomInfoMapList[_index][_type] = parseInt($D.config.roomObj.roomInfoMapList[_index][_type]) - 1 ;
                    $D.config.roomObj[_type + 'Resource'] = parseInt($D.config.roomObj[_type + 'Resource']) + 1;

                    $D.func.renderRoom();

                 });



                 //日历月份切换
                 var monthList = $('.sale-month-list');
                 $('.prev-left-month').on('click', function(e) {
                    e.stopPropagation();
                    var listLeft = parseInt(monthList.css('left'));
                    monthList.find('.on').prev().click();
                    if(listLeft === 0 ) {
                        return false;
                    } else {
                        monthList.css('left', listLeft + 70);
                    }
                    
                 });
                 $('.prev-right-month').on('click', function(e) {
                    e.stopPropagation();
                    var listLeft = parseInt(monthList.css('left'));
                    var childlen = monthList.children().length;
                     monthList.find('.on').next().click();
                    if(childlen <= 3 || -listLeft == (childlen-3)*70) {
                        return false;
                    } else {
                        monthList.css('left', listLeft - 70);
                    }
                   
                 });
                 //month click 
                 $('.sale-month-list').on('click', 'span', function(e) {
                    e.stopPropagation();
                    var _self = $(this),
                        dateMonth = _self.data('date');
                        if(!_self.hasClass('on')) {
                            $D.config.curMonth = dateMonth;
                            $D.func.loadCalendar(dateMonth);
                        }
                        _self.addClass('on').siblings().removeClass('on');
                 });
                  //calender day click event
                 $('.date-list').on('click','.valid', function() {
                    var _this = $(this);
                    var thisDate = _this.data('date');
                    _this.addClass('on').siblings().removeClass('on');
                    $('#start-date').val(thisDate);
                    $('.calender-container').fadeOut();
                    // initial function call
                    $D.func.requestComobDate();
                    $('.room-info').show();
                    $('.combo-info').show();
                    $('#priceDetail').show();
                    $('.booking-start-area').hide();
                 });
                 //mode change
                 $('#modeImg').on('click', function() {
                    $(this).addClass('on').siblings().removeClass('on');
                    $('#detailContent').show();
                    $('.time-line-wrapper').show();
                    $('#tour-map-wrapper').hide();
                 });
                 $('#modeMap').on('click', function() {
                    $(this).addClass('on').siblings().removeClass('on');
                    $('#detailContent').hide();
                    $('.time-line-wrapper').hide();
                    $('#tour-map-wrapper').show();
                    if(!$Gmap.init) {
                        $Gmap.initialize();
                    }
                 });
                 //发送行程单到Email
                 $('#ipt_email').wqConfirm({
                     wrapper: '#confirmWrapper',
                     target: '#confirmEmail'
                 });
                 $('#a_trip_email').click(function() {
                     $('#div_fill_email').toggle().find('input').focus();
                     $('#errorTips').remove();
                 });
                 $('#btn_send_email').click(function() {
                     $.wqErrorTips({
                         wrapper: '#div_fill_email',
                         success: function() {
                             $('#div_email_loading').show();
                             var email = encodeURI($('#ipt_email').val());
                             $D.func.tripEmail(email);
                         }
                     });
                });
                $('#btn_send_email_cancel').click(function() {
                    $('#div_fill_email').hide();
                    $('#errorTips').remove();
                });
                $('#btn_email_res_close').click(function() {
                    $('#div_send_email_res').hide();
                });
                //open service window
                $('.kefuonline').on('click', function() {
                    $("#onlineKefu").click();
                });
                $('#bookingArea').on('click', '.kefuonline', function() {
                    $("#onlineKefu").click();
                });
                //create order
                $('#bookNow').on('click', function() {
                    //确认自定义编辑信息
                    if($('.room-edit-layer').is(':visible')) {
                        $D.func.warnMsg('confirm');
                        return;
                    }
                    
                    $D.func.addToCart();
                });
                //添加收藏
                $('.colle-btn').on('click', function(){
                    var url = document.URL;
                    var title = document.title;
                    $D.func.AddFavorite(url, title);
                });
                $('.calender-container').on('click', function(e) {
                    e.stopPropagation();
                });
                $('body').on('click', function() {
                    $('.calender-container').hide();
                });
                //显示图片当前张数
                $('.img-cur-index').text($('.s-img-list').find('.on').index() + 1);
                //隐藏loading layer
                $('.loading-layer').fadeOut();

                //客服qq和wechat
                $.ajax({
                    url: "#/kefu",
                    type: 'post',
                    dataType: 'JSON',
                    success: function(data){
                        var content = '';
                        if(data.rs == 1){
                            content = ['<div class="exp-avatar-bg">',
                                '<img src="'+data.data.wechatAndQQ.photoImg+'" width="77" height="71">',
                                '</div>',
                                '<p class="font_color_black">'+data.data.wechatAndQQ.wcNichName+'</p>',
                                '<p class="font_color_gray">行程定制师</p>',
                                '<img src="'+data.data.wechatAndQQ.wcQRCode+'" alt="" width="80" height="80">',
                                '<p class="font_color_orange font_size14">加我微信，沟通更快</p>'].join('');
                        }
                        $("#wq_consultant").html(content);
                    }
                });

            },
            loadCalendar: function(date) {
                $.ajax({
                    url: '/localjoin/detail/price/month/'+ $D.config.businessID + '/' + date,
                    type: 'POST',
                    dataType: 'json',
                    beforeSend: function() {
                        $('.loading-layer').show();
                    }
                })
                .done(function(data) {
                    if(data.code === 1) {
                        $('.loading-layer').fadeOut();
                        $('.calender-container').show();
                        $D.func.fillCalendar(data.data);
                    } else {
                        // $('#bookNow').hide();
                        $D.config.dataEmpty = true;
                        $('.calender-container').hide();
                        $('.loading-layer').fadeOut();
                        alert(data.msg);
                    }
                })
                .fail(function() {
                    // console.log("error");
                });

            },
            fillCalendar: function (data) {
                var $jqCal = $("#calendar");
                var curMonth = $D.config.curMonth || data.tourProductGroupList[0].dateStr;
                var dataArr = curMonth.split('-'),
                    firstDay = dataArr[0] + '/' + dataArr[1] + '/01',
                    dayNum = new Date(dataArr[0], dataArr[1], 0).getDate(),
                    weekDay = new Date(firstDay).getDay(),
                    $jqCalList = $jqCal.find("[name='cal-list']");

                $jqCalList.html('');
                for (var i = 0; i < dayNum + weekDay; i++) {
                    if (i < weekDay) {
                        var liItem = $('<li></li>').appendTo($jqCalList);
                    } else {
                        var theDay = $D.func.addDate(firstDay, i - weekDay);
                        var theDayStr = theDay.toString("yyyy-MM-dd");
                        var liItem = $('<li data-date="' + theDayStr + '"><i class="im-icon"></i>' + theDay.getDate() + '</li>').addClass('invalid-day').appendTo($jqCalList);
                        if (i % 7 == 6) liItem.addClass("right-li");
                    } 
                }

                for (var i = 0; i < data.tourProductGroupList.length; i++) {
                    $jqCalList.find('[data-date="' + data.tourProductGroupList[i].dateStr + '"]').removeClass('invalid-day').addClass('valid')
                    .append('<span class="inner-price"><span class="status'+ data.tourProductGroupList[i].stockStatus +'">'+  data.tourProductGroupList[i].stockStatusStr +'</span><br>' + (data.tourProductGroupList[i].stockStatus == 2 ? '' : $('#showCurrencySign').val() + ~~data.tourProductGroupList[i].startPrice) + '</span>');
                    if(data.tourProductGroupList[i].stockStatus == 2) {
                        $jqCalList.find('[data-date="' + data.tourProductGroupList[i].dateStr + '"]').removeClass('valid').addClass('invalid-day');
                    }
                    if(data.tourProductGroupList[i].stockType !="" && data.tourProductGroupList[i].quota > 0) {
                        $jqCalList.find('[data-date="' + data.tourProductGroupList[i].dateStr + '"]').find('.im-icon').show();
                    }
                }
            },
            loadVaildMonth: function() {
                var $monthList = $('.sale-month-list');
                if($monthList.children().length > 0) {
                    $('.loading-layer').fadeOut();
                    $('.calender-container').show();
                    return;
                }

                $.ajax({
                    url: '/localjoin/detail/price/month/'+ $D.config.businessID + '/index',
                    type: 'GET',
                    dataType: 'json',
                    async: false,
                    beforeSend: function() {
                        $('.loading-layer').show();
                    }
                })
                .done(function(data) {
                    if(data.code == 1) {
                        var monthCount = data.data.length;
                        $monthList.html('').css('width', monthCount * 70 > 210 ? monthCount * 70 : 210 );
                        for(var i=0; i < monthCount; i++) {
                            var monthItem = $('<span class="'+ (i == 0 ? "on" : "") +'" data-date="'+ data.data[i] +'">'+ data.data[i] +'</span>').appendTo($monthList);
                        }
                        if($('.sale-month-list').children().length <=3 ) {
                            $('.prev-left-month').hide();
                            $('.prev-right-month').hide();
                         }
                        $D.func.loadCalendar(data.data[0]);
                    } else {
                        $('.loading-layer').fadeOut();
                        alert(data.msg);
                    }
                })
                .fail(function(){
                    $('.loading-layer').fadeOut();
                    alert('网络错误');
                })
            },
            addDate: function (date, i) {
                var d = new XDate(date);
                return d.addDays(i);
            },
            addMonthStr: function (monthStr, i) {
                var d = new Date(monthStr.replace(/-/g, "/") + "/15");
                d.setTime(d.getTime() + i * 30 * 24 * 60 * 60 * 1000);
                return d.getFullYear() + "-" + ((d.getMonth() + 1) < 10 ? "0" + (d.getMonth() + 1) : "" + (d.getMonth() + 1));
            },
            fillSidePrice: function(data) {
                var curData = data;
                $('.aveprice').text(curData.avgPrice);
                $('.tolprice').text(curData.totalPrice);
                $('.price-convert').data('currency', curData.currencySwitchover).data('convert', curData.totalPriceSwitchover);

            },
            renderComboList: function(data) {
                var interText = doT.template($("#comboTmp").html());
                    $("#comboWrapper").html(interText(data));

                var briefText = doT.template($("#selectTmp").html());
                    $(".people-select").html(briefText(data));

                 var hotelText = doT.template($("#hotelExpand").html());
                    $("#hotelExpend").html(hotelText(data));

                var roomText = doT.template($("#roomInfoTpl").html());
                    $("#roomInfoList").html(roomText(data));

                var childDsc = $('#childDsc').val() ? '('+ $('#childDsc').val() +')' : '';
                $('.kid-age').text(childDsc);

                $D.func.fillSidePrice(data);
                $D.func.attachComboCalender();

                if(data.tourDetailPackageGroupList.length <= $('.combo-info').find('.hide-item').length) {
                    $('.combo-info').hide();
                }

                $('.pf-tips').on('mouseover', function(){
                    wq.layer.hoverTip(this,{
                        width:300,
                        content:'我趣帮助您在行程中与其他同游旅客或者导游在部分或全程行程中拼房，以达到为您节约团费的目的。无论男性、女性，全程与同性以双人一间的规格拼房，100%保证拼房成功，您需要承担的费用为双人一间单价及额外的一部分服务费。'
                    });
                }).on('mouseout', function(){
                    wq.layer.close(100);
                });

                //fuck the data
                var isShow = false;
                if(data.dftParamMap.canShareRoom != 1) {
                    return;
                } else {
                    for(var i = 0; i < data.roomInfoMapList.length; i++) {
                        if(data.roomInfoMapList[i].AD == 1 && data.roomInfoMapList[i].KD == 0) {
                            isShow = true;
                        }
                    }
                    if(!isShow) {
                        $('.pf-option').hide()
                    }
                }

                if($D.config.hotelGroupId != $('[data-type="HOTEL"]').attr('id')) {
                    $D.func.getHotelAvePrice();
                    $D.config.hotelGroupId = $('[data-type="HOTEL"]').attr('id');
                }

                
            },
            attachComboCalender: function() {
                $('#hotelExpend').find('.hotel-cal').each(function() {
                    var _this = $(this);
                    var startDate = new Date(_this.data('start'));
                    var endDate = new Date(_this.data('end'));
                    var curYear  = new Date().getFullYear();
                    new Pikaday({
                        field: _this[0],
                        firstDay: 7,
                        minDate: startDate,
                        maxDate: endDate,
                        defaultDate: startDate,
                        onSelect: function(date) {
                            var dateStr = date.format('yyyy-MM-dd');
                            _this.val(dateStr);
                            $D.func.calculatePrice();
                        }
                    });

                });
            },
            traverseNormalCombo: function() {
                var comboArr = [];
                $('#comboWrapper').find('.normal-combo').each(function(index, el) {
                    var _this = $(this), comboItem = {};
                    comboItem.groupId = _this[0].id;
                    comboItem.itemId =_this.data('type') == 'LUGGAGE_CASES' ? 1 : _this.val();
                    comboArr.push(comboItem);
                });
                //deal with the hotel
                $('#hotelExpend').find('.hotel-select').each(function(index, el) {
                    var _this = $(this), comboItem = {};
                    var checkStau = _this.parents('.hotel-item').find('.combo-hotel-check').prop('checked');
                    comboItem.groupId = _this[0].id;
                    comboItem.itemId = checkStau ? ( _this.children().length ? _this.val() : 1 ) : (_this.parents('.hotel-item').hasClass('hide') ? '2' : '0');
                    comboArr.push(comboItem);
                });
                return comboArr;
            },
            traverseCustomList: function() {
                var cusArr = [];
                $('#roomInfoList').find('.adjust-item').each(function(index, el) {
                    var _this = $(this), tmpObj = {};
                    tmpObj.PF = '0';
                    tmpObj.RN = '1';
                    tmpObj.AD = _this.find('.adval').text();
                    tmpObj.KD = _this.find('.kdval').text();
                    cusArr.push(tmpObj);
                });

                return cusArr;

            },
            dataCollector: function(flag) {
                var data = {}, paraMap = {};
                    paraMap.AD = $('#AD').val();
                    paraMap.KD = $('#KD').val();
                    paraMap.RN = $('#RN').val();
                    paraMap.PF = $('#PF').prop('checked') ? 1 : 0;
                    paraMap.LCN = $('.lcn').val() ? $('.lcn').val() : 0;
                    // paraMap.isComfortAllot = $('.radio-item:checked').hasClass('ComfortAllot') ? 1 : 0;
                    paraMap.isComfortAllot = flag ? '2' : $('.radio-item:checked').attr('data-type');
                    paraMap.postponedDate = $('#postponedDate').val();
                    paraMap.advancedDate = $('#advancedDate').val();
                    data.requestParamMap = paraMap;
                    data.groupItemMapList = $D.func.traverseNormalCombo();
                    data.roomInfoMapList = flag ? $D.func.traverseCustomList() : null;
                    
                return data;

            },
            calculatePrice: function (flag) {

                var data = $D.func.dataCollector(flag);


                $.ajax({
                    url: '/localjoin/detail/price/date/'+ $D.config.businessID +'/' + $('#start-date').val(),
                    type: 'POST',
                    dataType: 'json',
                    data: {jsonStr:JSON.stringify(data)}
                })
                .done(function(data) {
                    // console.log("success");
                    if(data.code === 1) {
                        $D.func.fillSidePrice(data.data);
                        $D.func.renderComboList(data.data);
                        //set the globle param
                        $D.config.warehouseLagDay = data.data.warehouseLagDay;
                        $D.config.roomInfoMapList = data.data.roomInfoMapList;
                        $D.config.warehouseNo = data.data.warehouseNo;

                        $D.func.initialRoomObj(data.data)


                    } else {
                        // alert()
                    }
                })
                .fail(function() {
                    // console.log("error");
                })
            },
            requestComobDate: function() {
                $.ajax({
                    url: '/localjoin/detail/price/date/'+ $D.config.businessID +'/' + $('#start-date').val(),
                    type: 'POST',
                    dataType: 'json'
                })
                .done(function(data) {
                    if (data.code ===1 ) {
                        $D.func.fillSidePrice(data.data);
                        $D.func.renderComboList(data.data);

                        //set the global param
                        $D.config.warehouseLagDay = data.data.warehouseLagDay;
                        $D.config.roomInfoMapList = data.data.roomInfoMapList;
                        $D.config.warehouseNo = data.data.warehouseNo;

                        $D.func.initialRoomObj(data.data)
                    };
                })
                .fail(function() {
                    console.log("error");
                });
                
            },
            addToCart: function() {
                var data = {
                    "adultDsc": $('#adultDsc').val(),
                    "childDsc": $('#childDsc').val(),
                    "currency": $('#currency').val(),
                    "days": $('#days').val(),
                    "imageUrl": $('#imageUrl').val(),
                    "productID": $D.config.businessID,
                    "luggageCases": $('.lcn').val() || 0,
                    "titleCn": $('#titleCn').val(),
                    "type": "localjoin",
                    "warehouseNo" : $("#warehouseNo").val(),
                    "warehouseLagDay" : $("#warehouseLagDay").val(),
                    "startDate" : $("#start-date").val()
                };
                var roomInfoMapList = $D.config.roomInfoMapList;
                var simpleNums = [{
                    "AD": $('#AD').val(),
                    "KD": $('#KD').val(),
                    "RN": $('#RN').val(),
                    "PF": $('#PF').prop('checked') ? '1' : '0'
                }];
                var comboArr = [];
                $('#bookingArea').find('.order-item').each(function(index, el) {
                    var _this = $(this), tmpObj = {};
                        tmpObj.groupType = _this.data('type');
                        tmpObj.show = _this.attr('data-forShow') == 1 ? 'true' : 'false';
                        tmpObj.formularId = _this.children('option:selected').attr('data-forId');
                        tmpObj.itemId = _this.data('type') == 'LUGGAGE_CASES' ? _this.attr('data-checkedid') : _this.val();
                        tmpObj.showValue = _this.children('option:selected').text();
                        tmpObj.showTitle = _this.siblings('label').text();

                        if( _this.data('type') == 'HOTEL' || _this.data('type') == 'UPGRADE_HOTEL' || _this.data('type') == 'ADVANCE_CHECKIN' || _this.data('type') == 'POSTPONE_CHECKIN') {
                            tmpObj.nums = roomInfoMapList;
                        } else if(_this.data('type') == 'LUGGAGE_CASES') {
                            tmpObj.nums = [{"LCN" : (_this.val() ? _this.val() : '0') }];
                        } else {
                            tmpObj.nums = simpleNums;
                        }
                        comboArr.push(tmpObj)
                });
                data.jsonContext = JSON.stringify(comboArr) ;

                
                addProductToCartWithParams(true, data);

            },
            tripEmail: function(email) {
                var emailRes = $('#div_send_email_res');
                var iconI = emailRes.find('i.icon-detail-all');
                $.ajax({
                    url: "/localjoin/trip-email/" + $D.config.businessID + "?email=" + email,
                    success: function(data) {
                        $('#div_fill_email').hide();
                        $('#div_email_loading').hide();
                        if (data == "suc") {
                            iconI.addClass('icon-email-success').removeClass('icon-email-fail');
                            emailRes.find('h3').html('已经发送到您邮箱，请注意查收');
                        } else {
                            iconI.addClass('icon-email-fail').removeClass('icon-email-success');
                            emailRes.find('h3').html('抱歉，发送失败，请稍后重试');
                        }
                        emailRes.show();
                        var t = 3; //页面自动跳转时间
                        $D.func.countDown(t);
                    },
                    error: function() {
                        emailRes.find('h3').html('发送失败，请稍后重试');
                        emailRes.show();
                        var t = 3; //页面自动跳转时间
                        $D.func.countDown(t);
                    }
                });
            },
            countDown: function(t) {
                if (t > 0) {
                    $('#span_email_close_tips').html(t + '秒');
                    t--;
                    setTimeout('$D.func.countDown(' + t + ');', 1000);
                } else {
                    $('#div_send_email_res').hide();
                }
            },
            getHotelAvePrice: function() {


                $.ajax({
                    url: '/localjoin/detail/price/room/explain/' + $D.config.businessID + '/' + $('[data-type="HOTEL"]').attr('id') ,
                    type: 'POST',
                    dataType: 'json'
                })
                .done(function(data) {
                    var titleList = $('.room-explain-title').find('td');
                    var roomPrice = $('.room-explain').find('td');
                    var keyList = [];
                    var validNum = 0;
                    if(data.code === 1) {
                        for(key in data.data) {
                            keyList.push(key);
                        }
                        for(var i=0; i < keyList.length; i++) {
                            titleList.eq(i).find('.exp-title-item').text(keyList[i]);
                            if(data.data[keyList[i]] == -1) {
                                titleList.eq(i).addClass('font_color_gray');
                                roomPrice.eq(i).text('');
                            } else {
                                roomPrice.eq(i).text($('#showCurrencySign').val() +  data.data[keyList[i]] + '/人');
                                if( i <= 3 ) {
                                    validNum++;
                                }
                            }
                        }
                        $('.explain-num').text((validNum > 4 ? 4 : validNum));
                    }
                })
                .fail(function() {
                    // console.log("error");
                })
            },
            showAllMeetPlace: function(self) {
                var _this = $(self),
                    parent = _this.parent().parent().parent();
                if (_this.is('.wq_trip_subtable_hide')) {
                    parent.find("tr.hide").hide();
                    _this.html('查看全部').removeClass('wq_trip_subtable_hide');
                } else {
                    parent.find("tr.hide").show();
                    _this.html('收起列表').addClass('wq_trip_subtable_hide');
                }
            },
            poiBriefScroll: function() {
                var briefList = $('.tour-brief-list');
                var childrenLenght = $('.tour-brief-list').children('li').length;
                var clickCounter = Math.ceil(childrenLenght / 7) - 1;
                $('.brief-next').on('click', function(){
                    var mLeft = parseInt(briefList.css('margin-left'));
                    if(clickCounter !== 0) {
                        briefList.css({
                            'margin-left': mLeft - 141*7
                        });
                        --clickCounter;
                    }
                });
                $('.brief-prev').on('click', function(){
                    var mLeft = parseInt(briefList.css('margin-left'));
                    if(mLeft !== 0){
                        briefList.css({
                            'margin-left': mLeft + 141*7
                        });
                        ++clickCounter;
                    }
                });
            },
            scrollingEffect : function() {
                 $('.booking-top').wqScrollSpy({
                    wq_scroll_nav: 'booking-top',
                    wq_scroll_part: 'book-part',
                    beforeScrollArea: function() {
                        $('.booking-top').css({
                            'position': 'relative'
                        }).removeClass('top-active');
                        $('#bookingArea').css({
                            'padding-top':'0'
                        })
                    },
                    scrollToArea: function(){
                        $('.booking-top').css({
                            'position': 'fixed',
                            'z-index': 800,
                            'top': 0,
                            'left':'auto'
                        }).addClass('top-active');
                        $('#bookingArea').css({
                            'padding-top':'81px'
                        })
                    },
                    scrollOutArea: function(){
                        $('.booking-top').css({
                            'position': 'relative'
                        }).removeClass('top-active');
                        $('#bookingArea').css({
                            'padding-top':'0'
                        })
                    }
                 });

                 $('.scroll-nav').wqScrollSpy({
                    wq_scroll_nav: 'scroll-nav',
                    wq_scroll_navbar: 'nav-item',
                    wq_scroll_part: 'scroll-part',
                    ActiveControlClass: 'on',
                    beforeScrollArea: function() {
                        $('.scroll-nav').css({
                            'position': 'absolute',
                            'z-index': '1',
                            'left:':0
                        });
                        $('.nav_btn').hide();
                        $('.scroll-nav-right').hide();
                        $('.scroll-nav').show()
                    },
                    scrollToArea: function() {
                        $('.scroll-nav').css({
                            'position': 'fixed',
                            'z-index': 800,
                            'top': 0,
                            'left':'auto'
                        });
                        $('.scroll-nav-right').show();
                        $('.scroll-nav').show()
                    },
                    scrollOutArea: function() {
                        $('.scroll-nav').hide();
                        $('.scroll-nav-right').hide();
                    }
                });
                $('.time-line-nav').wqScrollSpy({
                    wq_scroll_nav: 'scroll-nav',
                    wq_scroll_navbar: 'sidebar-item',
                    wq_scroll_part: 'detail-item',
                    ActiveControlClass: 'on',
                    beforeScrollArea: function() {
                        $('.time-line-nav').css({
                            'position': 'absolute',
                            'z-index': '1',
                            'left:':0
                        });
                        $('.time-line-nav').hide();
                    },
                    scrollToArea: function() {
                        var sidebarHeight = $('.time-line-nav').height();
                        var lastScrollPart = $('.detail-item').eq($('.detail-item').length -1);
                        $('.time-line-nav').css({
                            'position': 'fixed',
                            'z-index': 800,
                            'top': 100,
                            'left':'auto'
                        });
                        //fix the sidebar nav position issue
                        if(lastScrollPart.offset().top + lastScrollPart.height() - $(window).scrollTop() > sidebarHeight*2  ) {
                            $('.time-line-nav').show();
                        } else {
                            $('.time-line-nav').hide();
                        }
                    },
                    scrollOutArea: function() {
                        $('.time-line-nav').hide();
                    }
                });
            },
            exchangeImg: function() {
                var imgUl = $('.s-img-list'),
                    childList = imgUl.children(),
                    len = childList.length,
                    totalLen = childList.length * 136;
                imgUl.css('width', totalLen);
                $('.viewer-next').click(function() {
                    var _this = $(this),
                        able = _this.attr('data-able');
                    if (len < 4 || imgUl.css('left') == (544 - totalLen + 'px')) {
                        return;
                    }
                    _this.attr('data-able', 'false');
                    if (able == 'true') {
                        imgUl.animate({
                            left: '-=136px'
                        }, function() {
                            _this.attr('data-able', 'true');
                            imgUl.find('.on').next().click();
                            if (len < 4 || imgUl.css('left') == (544 - totalLen + 'px')) {
                                $('.viewer-next').css('visibility', 'hidden');
                            }
                            if (imgUl.css('left') != '0px') {
                                $('.viewer-prev').css('visibility', 'visible');
                            }
                        });
                    }
                });
                $('.viewer-prev').click(function() {
                    var _this = $(this),
                        able = _this.attr('data-able');
                    if (imgUl.css('left') == '0px') {
                        return;
                    }
                    _this.attr('data-able', 'false');
                    if (able == 'true') {
                        imgUl.animate({
                            left: '+=136px'
                        }, function() {
                            _this.attr('data-able', 'true');
                            imgUl.find('.on').prev().click();
                            if (imgUl.css('left') == '0px') {
                                $('.viewer-prev').css('visibility', 'hidden');
                            }
                            if (len != 4 && imgUl.css('left') != (544 - totalLen + 'px')) {
                                $(".viewer-next").css('visibility', 'visible');
                            }
                        });
                    }
                });
            },
            clickImage: function() {
                var imgUl = $('.s-img-list'),
                    childList = imgUl.children();
                    childList.click(function() {
                        var size = '120x90';
                        var bigSize = '500x300';
                        var bigUrl = $(this).find('img').attr('src').replace(size, bigSize);
                        var imgDescription = $(this).data('desc');
                        $('.viewer-big-img').attr('src', bigUrl);
                        $('.img-des-text').text(imgDescription);
                        imgUl.find('li.on').removeClass('on');
                        $(this).addClass('on');
                        $('.img-cur-index').text($(this).index() + 1);
                    });
            },
            cmtCallback: function(score, num) {
                $("#cmt-num").html(num);
                $("#avg-star").html(score + "分");
                $("#avg-star-img").addClass("evluation_star" + score);
            },
            showPOI: function(indexAndId) {
                var index = indexAndId.substr(0, indexAndId.indexOf("_")),
                    pid = indexAndId.substr(indexAndId.indexOf("_") + 1);

                $("#the_cover").remove();
                var winW = $(window).width(),
                    winH = $(window).height();
                $("<div id='the_cover' class='cover' style='width:" + winW + "px;height:" + winH + "px;' onclick='$D.func.closePoi();'></div>").appendTo("body");
                $.get("/poi/show/" + pid,
                    function(data) {
                        $D.config.currentPoiIndex = index;
                        $D.config.currentPoiID = pid;
                        var left = (winW - $("#poiContainer").width()) / 2,
                            top = (winH - $(
                                "#poiContainer").height()) / 2;
                        var poiContainer = $("#poiContainer").css({
                            left: left,
                            top: top,
                            display: "block"
                        });
                        poiContainer.find("#poiIntroduce").html(data);
                    });
            },
            goToPoi: function(i) {
                var _curr_span = $("span[poiID='" + $D.config.currentPoiIndex + "_" + $D.config.currentPoiID + "']");
                var _span = (i == -1) ? _curr_span.prev() : _curr_span.next();
                if (_span.length > 0) {
                    $D.func.showPOI(_span.attr("poiID"));
                } else {
                    $D.func.closePoi();
                }
            },
            closePoi: function() {
                $('#poiContainer').hide().find('#poiIntroduce').html('');
                $("#the_cover").remove();
            },
            poiImageScroll: function() {
                $('.teamtour-img-next').each(function() {
                    var imgUl = $(this).parent().find('.img-list'),
                        childList = imgUl.children(),
                        len = childList.length;

                    totalLen = len * 234;
                    imgUl.css('width', totalLen);
                    if (len < 5) {
                        $(this).css("display", "none");
                        $(this).siblings('.teamtour-img-prev').css("display", "none");
                    }
                });
                $('.teamtour-img-next').click(function() {
                    var _this = $(this),
                        able = _this.attr('data-able');

                    var imgUl = _this.parent().find('.img-list'),
                        childList = imgUl.children(),
                        len = childList.length,
                        totalLen = childList.length * 234;
                    imgUl.css('width' , totalLen);

                    if (len < 4 || imgUl.css('left') == (936 - totalLen + 'px')) {
                        return;
                    }
                    _this.attr('data-able', 'false');
                    if (able == 'true') {
                        imgUl.animate({
                            left: '-=234px'
                        }, function() {
                            _this.attr('data-able', 'true');
                            if (len < 4 || imgUl.css('left') == (936 - totalLen + 'px')) {
                                _this.css("display", "none");
                                _this.siblings('.teamtour-img-prev').css("display", "none");
                            }
                            if (imgUl.css('left') != '0px') {
                                _this.siblings(".teamtour-img-prev").css("display", "inline-block");
                            }
                        });
                    }
                });
                $('.teamtour-img-prev').click(function() {
                    var _this = $(this),
                        able = _this.attr('data-able');

                    var imgUl = _this.parent().find('.img-list'),
                        childList = imgUl.children(),
                        len = childList.length,
                        totalLen = childList.length * 234;
                    imgUl.css('width', totalLen);

                    if (imgUl.css('left') == '0px') {
                        return;
                    }
                    _this.attr('data-able', 'false');
                    if (able == 'true') {
                        imgUl.animate({
                            left: '+=234px'
                        }, function() {
                            _this.attr('data-able', 'true');

                            if (len != 4 && imgUl.css('left') != (936 - totalLen + 'px')) {
                                _this.siblings(".teamtour-img-next").css("display", "inline-block");
                            }
                        });
                    }
                });
            },
            fill_cookie_to_cart: function(){
                $.ajax({
                        url: "localjoin/getCompareProducts",
                        type: 'post',
                        dataType: 'JSON',
                        success: function(data){
                            $('.cp_cart_product_detail').each(function(){
                                if(!$(this).is(":hidden")){
                                    $(this).hide();
                                }
                            })
                            
                            for(var i = data.length - 1; i >= 0; i--){
                                var ld_cp_title = data[i].title,
                                    ld_cp_price = '<span id="unit-price"><span class="ld_price_currency">'+data[i].currency+'</span><font class="font_size28">'+ data[i].floatingPrice +'</font></span>/人起',
                                    ld_cp_pronum_new = data[i].id;
                                /*填取数据*/
                                $D.func.fill_to_compare_cart(ld_cp_title, ld_cp_price, ld_cp_pronum_new);

                            }
                        }

                    })
            },
            fill_to_compare_cart: function(title, price, num) {
                var is_first_mark = -1;
                $D.config.compare_product_num++;
                $('.cp_cart_product').each(function(e) {
                    var _this = $(this);
                    is_first_mark = _this.find('.cp_cart_product_detail').is(':hidden') ? is_first_mark + 1 : is_first_mark;
                    // console.log('is_first_mark',is_first_mark)
                    if (is_first_mark == 0 && _this.find('.cp_cart_product_detail').is(':hidden')) {
                        _this.find('.cp_cart_product_detail').show().siblings('.cp_cart_placeholder').hide();
                        _this.find('.cp_cart_title').text(title)
                            .siblings('.cp_cart_product_num').text(num)
                            .siblings('.cp_cart_price_wrapper').find('.cp_cart_price').html(price);
                        _this.find('.cp_cart_title').attr('href', window.location.href);
                    }
                });
                /*删除*/
                $('.cp_cart_delete').on('click', function() {
                    var cp_cart_del_num = $(this).parent().siblings('.cp_cart_product_num').text();
                    $D.func.cp_cart_delete(cp_cart_del_num);
                    if (cp_cart_del_num == $D.config.businessID) {
                        $('.compare-cancel').hide().siblings('.compare-btn').show();
                    }
                });
            },
            cp_cart_delete: function(delete_elm) {
                $('.cp_cart_product').each(function() {
                    var cp_cart_product_num = $(this).find('.cp_cart_product_num').text();
                    if (delete_elm == cp_cart_product_num) {
                        $D.config.compare_product_num--;
                        // console.log('$D.config.compare_product_num',$D.config.compare_product_num);
                        $(this).remove();

                        var productsCookie = $.cookie('compareProduct');
                        if (productsCookie !== undefined && productsCookie != '') {
                            var str = productsCookie.replace("_" + cp_cart_product_num + "_", '_');
                            str = str.replace("_" + cp_cart_product_num, '');
                            str = str.replace(cp_cart_product_num + "_", '');
                            str = str.replace(cp_cart_product_num, '');
                            $.cookie('compareProduct', str, {
                                path: '/'
                            });
                        }
                        var cp_cart_pro_li =
                            "<li class='cp_cart_product'>\
                            <div class='cp_cart_product_detail hide'>\
                                <a class='cp_cart_title' href='' target='_blank'>4日经典路线</a>\
                                <div class='cp_cart_price_wrapper'>\
                                    <span class='cp_cart_price'>\
                                        <span id='unit-price'><span>USD</span><font class='font_size20'>1012.67</font></span>/人起\
                                    </span>\
                                    <span class='cp_cart_delete'>删除</span>\
                                </div>\
                                <p class='cp_cart_product_num hide'></p>\
                            </div>\
                           <div class='cp_cart_placeholder'>\
                                <p>\
                                最多同时对比3个产品，</br>\
                                您还可以继续添加。\
                                </p>\
                            </div>\
                        </li>";

                        $('.compare_price_cart ul').children('li').eq(1).after(cp_cart_pro_li);
                    }
                });

            },
            AddFavorite: function(url, title) {
                try {
                    window.external.addFavorite(url, title);
                }
                catch (e) {
                    try {
                        window.sidebar.addPanel(title, url, "");
                    }
                    catch (e) {
                        alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
                    }
                }
            },
            renderRoom: function() {
                var roomText = doT.template($("#customRoomTpl").html());
                    $("#roomEditLayer").html(roomText($D.config.roomObj));
            },
            initialRoomObj: function(data) {

                $D.config.roomObj = {};
                $D.config.roomObj.roomInfoMapList = data.roomInfoMapList;

                for(var i = 0; i < data.tourDetailPackageGroupList.length; i++) {
                    if(data.tourDetailPackageGroupList[i].packageGroupType == 'HOTEL') {
                        $D.config.roomObj.maxCount = data.tourDetailPackageGroupList[i].tourDeatilPackageItemList[0].maxCount;
                        $D.config.roomObj.maxAd = data.tourDetailPackageGroupList[i].tourDeatilPackageItemList[0].maxAdCount;
                        $D.config.roomObj.maxKd = data.tourDetailPackageGroupList[i].tourDeatilPackageItemList[0].maxKdCount;
                        break;
                    }
                }

                $D.config.roomObj.ADResource = 0;
                $D.config.roomObj.KDResource = 0;

                $D.func.renderRoom();

            },
            warnMsg: function(type) {
                var msgType = {
                    confirm: '请确认您的房间分配',
                    sumError: '分配房间人数和总人数不符合'
                }

                $('.warn-msgbox').show();
                $('.msg-info').text(msgType[type]);

                setTimeout(function(){
                     $('.warn-msgbox').fadeOut();
                }, 1500);
            } 

            //func end
        }
    }

    window.$D = $D;

    $D.func.init();

}(jQuery, window, document));
