<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>一米户外</title>
<link href="style/css.css" rel="stylesheet" type="text/css" />
    <script src="style/style.js"></script>

    <link rel="stylesheet" type="text/css" href="desk/css/index.css" />
    <!--[if IE 6]>
    <script type="text/javascript" language="javascript" src="desk/js/png.js"></script>
    <![endif]-->
    <script type="text/javascript" src="desk/js/jquery.js"></script>
    <script type="text/javascript" src="desk/js/web.js"></script>
</head>
<body>

<div class="top" id="top">
	<div class="topBar layout">
        <?php if($username){ ?>
            <span class="topLogin">

                    欢迎&nbsp;&nbsp;
                    <?php echo $username?>
                    &nbsp;&nbsp;
                   来到一米户外
            </span>
        <?php }else{ ?>
            <span class="topLogin">
                您好，欢迎来到一米户外！
               [<a href="login" class="cff0">登录</a>]
               [<a href="#" class="cfff">免费注册</a>]
            </span>
        <?php }?>

  </div>
  	<div class="layout">
  	  <div class="search">
   	    <button onclick="javascript:window.location.href='search.html'"></button><input type="text" value="输入您想去的地方" />
        </div>
    	<h1 class="logo" title="一米户外">一米户外</h1>
    	<ul class="nav">
        	<li><a href="/" class="select">首页</a></li>
        	<li><a href="/">国内游</a></li>
            <li><a href="zhoubian">周边游</a></li>
            <li><a href="baotuan">定制*包团</a></li>
        </ul>
    </div>
</div>
<style>

    .u-pointer{position:absolute;bottom:10px;left:0;right:0;z-index:50;text-align:center;line-height:0;}
    .u-pointer i{display:inline-block;width:10px;height:10px;margin:0 0 0 5px;border-radius:50%;box-shadow:inset 0 1px 0 rgba(0,0,0,0.5);cursor:pointer;background:#ccc;}
    .u-pointer i:first-child{margin-left:0;}
    .u-pointer i:hover{background:#999;}
    .u-pointer i.z-crt{background:#40a1d9;}
    /* 居右 */
    .u-pointer-rt{right:10px;left:auto;}

    /* 单片式幻灯-默认淡入淡出  */
    .m-slide{position:relative;width:709px;height:300px;overflow:hidden;}
    .m-slide ol,.m-slide li{position:absolute;top:0;left:0;width:100%;height:100%;z-index:20;}
    .m-slide li{opacity:0;-webkit-transition:0.5s ease-out;-moz-transition:0.5s ease-out;-ms-transition:0.5s ease-out;transition:0.5s ease-out;-webkit-transition-property:opacity,left,top;-moz-transition-property:opacity,left,top;-ms-transition-property:opacity,left,top;transition-property:opacity,left,top;}
    .m-slide li.z-crt{z-index:21;opacity:1;}
    /* 水平滚动 */
    .m-slide-x li{left:-100%;}
    .m-slide-x li.z-crt{left:0;}
    .m-slide-x li.z-crt ~ li{left:100%;}
    /* 垂直滚动 */
    .m-slide-y li{top:-100%;}
    .m-slide-y li.z-crt{top:0;}
    .m-slide-y li.z-crt ~ li{top:100%;}

</style>

<div class="layout of">
	<div class="right">
    	<div class="xuanyan"></div>
   	  <div class="recoMain">
        	<div class="tit"><h2></h2></div>
            <div class="recoImg">
                <div class="m-slide m-slide-y">
                    <ul class="bxslider">
                        <?php foreach($arr2 as $u){?>
                            <li class="z-crt"><a href="#"><img src="<?php echo $u['img_url']?>" width="709" height="300"/></a></li>
                        <?php }?>
                    </ul>
                    <span class="u-pointer u-pointer-rt">
                        <i class="z-crt"></i><i></i><i></i><i></i>
                    </span>
                </div>
                <script type="text/javascript">
                    (function(_slides){
                        each(_slides,function(_slide,i){
                            var _ctrls = _slide.getElementsByTagName('i');
                            var _lists = _slide.getElementsByTagName('li');
                            each(_ctrls,function(_ctrl,i){
                                _ctrl.onclick=function(){
                                    each(_lists,function(_list,i){
                                        delClass(_list,"z-crt");
                                    });
                                    each(_ctrls,function(_ctrl,i){
                                        delClass(_ctrl,"z-crt");
                                    });
                                    addClass(_lists[i],"z-crt");
                                    addClass(_ctrls[i],"z-crt");
                                }
                            });
                        });
                        function hasClass(_object,_clsname){
                            var _clsname = _clsname.replace(".","");
                            var _sCls = " "+(_object.className)+" ";
                            return (_sCls.indexOf(" "+_clsname+" ") != -1) ? true : false;
                        }
                        function toClass(_str){
                            var _str = _str.toString();
                            _str = _str.replace(/(^\s*)|(\s*$)/g,"");
                            _str = _str.replace(/\s{2,}/g," ");
                            return _str;
                        }
                        function addClass(_object,_clsname){
                            var _clsname = _clsname.replace(".","");
                            if(!hasClass(_object,_clsname)){
                                _object.className = toClass(_object.className+(" "+_clsname));
                            }
                        }
                        function delClass(_object,_clsname){
                            var _clsname = _clsname.replace(".","");
                            if(hasClass(_object,_clsname)){
                                _object.className = toClass(_object.className.replace(new RegExp("(?:^|\\s)"+_clsname+"(?=\\s|$)","g")," "));
                            }
                        }
                        function each(_objects,_fn){
                            for(var i=0,len=_objects.length;i<len;i++){
                                _fn(_objects[i],i);
                            }
                        }
                    })(document.getElementsByTagName('div'));
                </script>
            </div>
      </div>
      <div class="youji">
     	 <div class="tit">
        		<h2 class="tit1"></h2>
          </div>
          <ul class="youjiList">
          <?php foreach($arr3 as $k=>$va1){?>
          	<li>
             
          
            	<img src="<?php echo $va1['img']?>"  width="250" height="150"/>
           	  <div class="youjiTit">
                	<h3><a href="tour.html"><?php echo $va1['title']?></a></h3>
                    <h5>文：<a href="#">小猫</a></h5>
                    <h5><?php echo $va1['datetime']?></h5>
                  </div>
                  <strong class="youjiKey">【关键字：<a href="#">瓦屋山</a> | <a href="#">西藏</a> | <a href="#">徒步</a> | <a href="#">腐败游</a> | <a href="#">热线</a>】</strong>
                  <span class="youjiText"><?php echo $va1['content']?></span>
				<div class="youjiBtn"><button class="youjiBtn1" onclick="javascript:window.location.href='raiders.html'">游记正文</button><button class="youjiBtn2" onclick="javascript:window.location.href='tour.html'">查看此线路</button></div>  
       
            </li>
            <?php }?>
   </ul>
      </div>
    </div>


	<div class="left">
<!--        <div class="leftBox">-->
<!--            <h2>活动分类</h2>-->
<!--            <div class="line1" ></div>-->
<!--            <dl class="keyword">-->
<!--                --><?php // foreach($arr1 as $k=>$v){?>
<!--                <dt><a href="search.html">--><?php //echo $v['region_name']?><!--</a></dt>-->
<!--                    --><?php //foreach($v['son'] as $k1=>$va){?>
<!--                <dd><a href="search.html">--><?php //echo $va['region_name']?><!--</a></dd>-->
<!--                        --><?php //}?>
<!--                --><?php //}?>
<!--            </dl>-->
<!--        </div>-->


        <div class="product_sort fl">
            <div class="hd">旅游产品导航</div>
            <div class="bd">
                <div class="item">

                    <div class="title two">
                        <a href="#"><i></i>国内游</a></div>
                    <div class="list">
                        <a href="#">北京</a>
                        <a href="#">四川</a>
                        <a href="#">山西</a>
                        <a href="#">河南</a>
                        <a href="#">海南</a>
                        <a href="#">......</a>
                    </div>
                    <div class="arrow">&gt;</div>
                    <div class="line"></div>
                    <div class="subitem">
                        <div class="inner">
                            <?php  foreach($arr1 as $k=>$v){?>
                            <div class="tit tit1">
                                <div class="name"><?php echo $v['region_name']?></div>
                                <ul>
                                    <?php foreach($v['son'] as $k1=>$va){?>
                                    <li>
                                        <a href="arealist?id=<?php  echo  $va['region_id']?>"><?php echo $va['region_name']?></a>
                                    </li>
                                    <?php }?>
                                </ul>
                                <span style="display: block;border-bottom: dashed 1px;margin-top: 15px;width: 500px;margin-left: 100px"></span>
                            </div>
                            <?php }?>

                        </div>
                    </div>
                </div>


                <!--数据填充-->
                <div class="item">
                    <div class="title one"><a href="#"><i></i>出境游</a></div>
                    <div class="list">
                        <a href="#">泰国</a>
                        <a href="#">首尔</a>
                        <a href="#">曼谷</a>
                        <a href="#">大阪</a>
                        <a href="#">普吉岛</a>
                    </div>

                    <div class="arrow">&gt;</div>
                    <div class="line"></div>
                    <div class="subitem">
                        <div class="inner">
                            <div class="tit tit1">
                                <div class="name">泰国</div>
                                <ul>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">新加坡</a></li>
                                    <li><a href="#">菲律宾</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">文莱</a></li>
                                    <li><a href="#">蓝梦岛</a></li>
                                    <li><a href="#">吉隆坡</a></li>
                                </ul>
                            </div>
                            <div class="tit">
                                <div class="name">印度尼西亚</div>
                                <ul>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">新加坡</a></li>
                                    <li><a href="#">菲律宾</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">文莱</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="title three"><a href="zhoubian"><i></i>周边游</a></div>
                    <div class="list">
                        <a href="#">交通</a>
                        <a href="#">巴士游</a>
                        <a href="#">北京</a>
                        <a href="#">天津</a>
                    </div>
                    <div class="arrow">&gt;</div>
                    <div class="line"></div>
                    
                    <div class="subitem">
                    <!-- 周边游 -->
                    
                        <div class="inner">
                    <?php foreach ($arr4 as $key => $v1) {  ?>
                            <div class="tit tit1">

                                <div class="name"><?php echo $v1['privilege']?></div>
                                <ul>
                                <?php foreach ($v1['son'] as $k1 => $v2) {
                                    
                                ?>
                                    <li><a href="zhoubian"><?php echo $v2['privilege']?></a></li>
                                   <?php } ?>
                                </ul>
                            </div>

                            <?php } ?>
                           <!--  <div class="tit">
                                <div class="name"></div>
                                <ul>
                                    <li><a href="#">一天</a></li>
                                    <li><a href="#">一礼拜</a></li>
                                </ul>
                            </div> -->
                        </div>
                       <!--  <div class="inner">
                            <div class="tit tit1">
                                <div class="name">周边目的地</div>
                                <ul>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">新加坡</a></li>
                                    <li><a href="#">菲律宾</a></li>
                                </ul>
                            </div>
                            <div class="tit">
                                <div class="name">热门景点</div>
                                <ul>
                                    <li><a href="#">故宫</a></li>
                                    <li><a href="#">广府古城</a></li>
                                </ul>
                            </div>
                        </div> -->
                        
                    </div>
 
                </div>

                <div class="item">
                    <div class="title four"><a href="#"><i></i>邮轮</a></div>
                    <div class="list">
                        <a href="#">泰国</a>
                        <a href="#">首尔</a>
                        <a href="#">曼谷</a>
                        <a href="#">大阪</a>
                        <a href="#">普吉岛</a>
                    </div>
                    <div class="arrow">&gt;</div>
                    <div class="line"></div>
                    <div class="subitem">
                        <div class="inner">
                            <div class="tit tit1">
                                <div class="name">泰国</div>
                                <ul>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">新加坡</a></li>
                                    <li><a href="#">菲律宾</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">文莱</a></li>
                                    <li><a href="#">蓝梦岛</a></li>
                                    <li><a href="#">吉隆坡</a></li>
                                    <li><a href="#">塞班岛</a></li>
                                    <li><a href="#">柬埔寨</a></li>
                                    <li><a href="#">马来西亚</a></li>
                                    <li><a href="#">越南</a></li>
                                    <li><a href="#">下龙湾</a></li>
                                    <li><a href="#">吴哥</a></li>
                                    <li><a href="#">芽庄</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">新加坡</a></li>
                                    <li><a href="#">菲律宾</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">文莱</a></li>
                                    <li><a href="#">蓝梦岛</a></li>
                                    <li><a href="#">吉隆坡</a></li>
                                    <li><a href="#">塞班岛</a></li>
                                    <li><a href="#">柬埔寨</a></li>
                                    <li><a href="#">马来西亚</a></li>
                                    <li><a href="#">越南</a></li>
                                    <li><a href="#">下龙湾</a></li>
                                    <li><a href="#">吴哥</a></li>
                                    <li><a href="#">芽庄</a></li>
                                </ul>
                            </div>
                            <div class="tit">
                                <div class="name">印度尼西亚</div>
                                <ul>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">新加坡</a></li>
                                    <li><a href="#">菲律宾</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">文莱</a></li>
                                    <li><a href="#">蓝梦岛</a></li>
                                    <li><a href="#">吉隆坡</a></li>
                                    <li><a href="#">塞班岛</a></li>
                                    <li><a href="#">柬埔寨</a></li>
                                    <li><a href="#">马来西亚</a></li>
                                    <li><a href="#">越南</a></li>
                                    <li><a href="#">下龙湾</a></li>
                                    <li><a href="#">吴哥</a></li>
                                    <li><a href="#">芽庄</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="title five"><a href="#"><i></i>东南亚</a></div>
                    <div class="list">
                        <a href="#">泰国</a>
                        <a href="#">首尔</a>
                        <a href="#">曼谷</a>
                        <a href="#">大阪</a>
                        <a href="#">普吉岛</a>
                    </div>
                    <div class="arrow">&gt;</div>
                    <div class="line"></div>
                    <div class="subitem">
                        <div class="inner">
                            <div class="tit tit1">
                                <div class="name">泰国</div>
                                <ul>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">新加坡</a></li>
                                    <li><a href="#">菲律宾</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">文莱</a></li>
                                    <li><a href="#">蓝梦岛</a></li>
                                    <li><a href="#">吉隆坡</a></li>
                                    <li><a href="#">塞班岛</a></li>
                                    <li><a href="#">柬埔寨</a></li>
                                    <li><a href="#">马来西亚</a></li>
                                    <li><a href="#">越南</a></li>
                                    <li><a href="#">下龙湾</a></li>
                                    <li><a href="#">吴哥</a></li>
                                    <li><a href="#">芽庄</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">新加坡</a></li>
                                    <li><a href="#">菲律宾</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">文莱</a></li>
                                    <li><a href="#">蓝梦岛</a></li>
                                    <li><a href="#">吉隆坡</a></li>
                                    <li><a href="#">塞班岛</a></li>
                                    <li><a href="#">柬埔寨</a></li>
                                    <li><a href="#">马来西亚</a></li>
                                    <li><a href="#">越南</a></li>
                                    <li><a href="#">下龙湾</a></li>
                                    <li><a href="#">吴哥</a></li>
                                    <li><a href="#">芽庄</a></li>
                                </ul>
                            </div>
                            <div class="tit">
                                <div class="name">印度尼西亚</div>
                                <ul>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">新加坡</a></li>
                                    <li><a href="#">菲律宾</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">文莱</a></li>
                                    <li><a href="#">蓝梦岛</a></li>
                                    <li><a href="#">吉隆坡</a></li>
                                    <li><a href="#">塞班岛</a></li>
                                    <li><a href="#">柬埔寨</a></li>
                                    <li><a href="#">马来西亚</a></li>
                                    <li><a href="#">越南</a></li>
                                    <li><a href="#">下龙湾</a></li>
                                    <li><a href="#">吴哥</a></li>
                                    <li><a href="#">芽庄</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="title six"><a href="#"><i></i>日本、韩国、朝鲜</a></div>
                    <div class="list">
                        <a href="#">泰国</a>
                        <a href="#">首尔</a>
                        <a href="#">曼谷</a>
                        <a href="#">大阪</a>
                        <a href="#">普吉岛</a>
                    </div>
                    <div class="arrow">&gt;</div>
                    <div class="line"></div>
                    <div class="subitem">
                        <div class="inner">
                            <div class="tit tit1">
                                <div class="name">泰国</div>
                                <ul>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">新加坡</a></li>
                                    <li><a href="#">菲律宾</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">文莱</a></li>
                                    <li><a href="#">蓝梦岛</a></li>
                                    <li><a href="#">吉隆坡</a></li>
                                    <li><a href="#">塞班岛</a></li>
                                    <li><a href="#">柬埔寨</a></li>
                                    <li><a href="#">马来西亚</a></li>
                                    <li><a href="#">越南</a></li>
                                    <li><a href="#">下龙湾</a></li>
                                    <li><a href="#">吴哥</a></li>
                                    <li><a href="#">芽庄</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">新加坡</a></li>
                                    <li><a href="#">菲律宾</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">文莱</a></li>
                                    <li><a href="#">蓝梦岛</a></li>
                                    <li><a href="#">吉隆坡</a></li>
                                    <li><a href="#">塞班岛</a></li>
                                    <li><a href="#">柬埔寨</a></li>
                                    <li><a href="#">马来西亚</a></li>
                                    <li><a href="#">越南</a></li>
                                    <li><a href="#">下龙湾</a></li>
                                    <li><a href="#">吴哥</a></li>
                                    <li><a href="#">芽庄</a></li>
                                </ul>
                            </div>
                            <div class="tit">
                                <div class="name">印度尼西亚</div>
                                <ul>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">新加坡</a></li>
                                    <li><a href="#">菲律宾</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">文莱</a></li>
                                    <li><a href="#">蓝梦岛</a></li>
                                    <li><a href="#">吉隆坡</a></li>
                                    <li><a href="#">塞班岛</a></li>
                                    <li><a href="#">柬埔寨</a></li>
                                    <li><a href="#">马来西亚</a></li>
                                    <li><a href="#">越南</a></li>
                                    <li><a href="#">下龙湾</a></li>
                                    <li><a href="#">吴哥</a></li>
                                    <li><a href="#">芽庄</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="title seven"><a href="#"><i></i>欧美</a></div>
                    <div class="list">
                        <a href="#">泰国</a>
                        <a href="#">首尔</a>
                        <a href="#">曼谷</a>
                        <a href="#">大阪</a>
                        <a href="#">普吉岛</a>
                    </div>
                    <div class="arrow">&gt;</div>
                    <div class="line"></div>
                    <div class="subitem">
                        <div class="inner">
                            <div class="tit tit1">
                                <div class="name">泰国</div>
                                <ul>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">新加坡</a></li>
                                    <li><a href="#">菲律宾</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">文莱</a></li>
                                    <li><a href="#">蓝梦岛</a></li>
                                    <li><a href="#">吉隆坡</a></li>
                                    <li><a href="#">塞班岛</a></li>
                                    <li><a href="#">柬埔寨</a></li>
                                    <li><a href="#">马来西亚</a></li>
                                    <li><a href="#">越南</a></li>
                                    <li><a href="#">下龙湾</a></li>
                                    <li><a href="#">吴哥</a></li>
                                    <li><a href="#">芽庄</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">新加坡</a></li>
                                    <li><a href="#">菲律宾</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">文莱</a></li>
                                    <li><a href="#">蓝梦岛</a></li>
                                    <li><a href="#">吉隆坡</a></li>
                                    <li><a href="#">塞班岛</a></li>
                                    <li><a href="#">柬埔寨</a></li>
                                    <li><a href="#">马来西亚</a></li>
                                    <li><a href="#">越南</a></li>
                                    <li><a href="#">下龙湾</a></li>
                                    <li><a href="#">吴哥</a></li>
                                    <li><a href="#">芽庄</a></li>
                                </ul>
                            </div>
                            <div class="tit">
                                <div class="name">印度尼西亚</div>
                                <ul>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">新加坡</a></li>
                                    <li><a href="#">菲律宾</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">文莱</a></li>
                                    <li><a href="#">蓝梦岛</a></li>
                                    <li><a href="#">吉隆坡</a></li>
                                    <li><a href="#">塞班岛</a></li>
                                    <li><a href="#">柬埔寨</a></li>
                                    <li><a href="#">马来西亚</a></li>
                                    <li><a href="#">越南</a></li>
                                    <li><a href="#">下龙湾</a></li>
                                    <li><a href="#">吴哥</a></li>
                                    <li><a href="#">芽庄</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="title eight"><a href="#"><i></i>澳洲</a></div>
                    <div class="list">
                        <a href="#">泰国</a>
                        <a href="#">首尔</a>
                        <a href="#">曼谷</a>
                        <a href="#">大阪</a>
                        <a href="#">普吉岛</a>
                    </div>
                    <div class="arrow">&gt;</div>
                    <div class="line"></div>
                    <div class="subitem">
                        <div class="inner">
                            <div class="tit tit1">
                                <div class="name">泰国</div>
                                <ul>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">新加坡</a></li>
                                    <li><a href="#">菲律宾</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">文莱</a></li>
                                    <li><a href="#">蓝梦岛</a></li>
                                    <li><a href="#">吉隆坡</a></li>
                                    <li><a href="#">塞班岛</a></li>
                                    <li><a href="#">柬埔寨</a></li>
                                    <li><a href="#">马来西亚</a></li>
                                    <li><a href="#">越南</a></li>
                                    <li><a href="#">下龙湾</a></li>
                                    <li><a href="#">吴哥</a></li>
                                    <li><a href="#">芽庄</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">新加坡</a></li>
                                    <li><a href="#">菲律宾</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">文莱</a></li>
                                    <li><a href="#">蓝梦岛</a></li>
                                    <li><a href="#">吉隆坡</a></li>
                                    <li><a href="#">塞班岛</a></li>
                                    <li><a href="#">柬埔寨</a></li>
                                    <li><a href="#">马来西亚</a></li>
                                    <li><a href="#">越南</a></li>
                                    <li><a href="#">下龙湾</a></li>
                                    <li><a href="#">吴哥</a></li>
                                    <li><a href="#">芽庄</a></li>
                                </ul>
                            </div>
                            <div class="tit">
                                <div class="name">印度尼西亚</div>
                                <ul>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">新加坡</a></li>
                                    <li><a href="#">菲律宾</a></li>
                                    <li><a href="#">沙巴</a></li>
                                    <li><a href="#">文莱</a></li>
                                    <li><a href="#">蓝梦岛</a></li>
                                    <li><a href="#">吉隆坡</a></li>
                                    <li><a href="#">塞班岛</a></li>
                                    <li><a href="#">柬埔寨</a></li>
                                    <li><a href="#">马来西亚</a></li>
                                    <li><a href="#">越南</a></li>
                                    <li><a href="#">下龙湾</a></li>
                                    <li><a href="#">吴哥</a></li>
                                    <li><a href="#">芽庄</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!--数据填充-->
            </div>
        </div>
        <script type="text/javascript">
            //首页旅游产品分类
            $(".product_sort .bd .item").hover(function(){
                $(this).addClass("layer");
            },function(){
                $(this).removeClass("layer");
            });
        </script>

        <div class="leftBox">
            <h2>邻队风采</h2>
            <div class="line1" ></div>
            <div class="hreo">
                <ul>
                    <li><a href="captain.html"><img src="images/temp1.jpg" width="80" height="80" /><strong>58牲口</strong></a></li>
                    <li><a href="captain.html"><img src="images/temp1.jpg" width="80" height="80" /><strong>58牲口</strong></a></li>
                    <li><a href="captain.html"><img src="images/temp1.jpg" width="80" height="80" /><strong>58牲口</strong></a></li>
                    <li><a href="captain.html"><img src="images/temp1.jpg" width="80" height="80" /><strong>58牲口</strong></a></li>
                    <li><a href="captain.html"><img src="images/temp1.jpg" width="80" height="80" /><strong>58牲口</strong></a></li>
                    <li><a href="captain.html"><img src="images/temp1.jpg" width="80" height="80" /><strong>58牲口</strong></a></li>
                </ul>
            </div>
      </div>
      <div class="leftBox">
            <h2>一米专题</h2>
            <div class="line1" ></div>
            <ul class="special">
           	  <li><a href="#"><img src="images/temp2.jpg" /></a></li>
                <li><a href="#"><img src="images/temp2.jpg" /></a></li>
                <li><a href="#"><img src="images/temp2.jpg" /></a></li>
                <li><a href="#"><img src="images/temp2.jpg" /></a></li>
        </ul>
      </div>
      <div class="leftBox">
        <h2>订阅邮件</h2>
        <div class="line1" ></div>
        <table class="edm">
        	<caption>如果您喜欢我们，可以在下面留下联系方式，我们有新的活动，会及时通知您，谢谢您的关注。</caption>
          <tr>
            <th>通过邮件方式</th>
          </tr>
          <tr>
            <td><label>
              <input type="text" name="textfield" id="textfield" />
            </label></td>
          </tr>
          <tr>
            <th>通过邮件方式</th>
          </tr>
          <tr>
            <td><input type="text" name="textfield2" id="textfield2" /></td>
          </tr>
          <tr>
            <td><button onclick="javascript:alert('订阅成功！');">订阅</button></td>
          </tr>
        </table>

      </div>
	</div>
</div>



































<div class="link of">
	<ul class="layout">
<!--    	<li><a href="#"><img src="images/temp4.jpg" width="118" height="48" /></a></li>-->
<!--        <li><a href="#"><img src="images/temp4.jpg" width="118" height="48" /></a></li>-->
<!--        <li><a href="#"><img src="images/temp4.jpg" width="118" height="48" /></a></li>-->
<!--        <li><a href="#"><img src="images/temp4.jpg" width="118" height="48" /></a></li>-->
<!--        <li><a href="#"><img src="images/temp4.jpg" width="118" height="48" /></a></li>-->
<!--        <li><a href="#"><img src="images/temp4.jpg" width="118" height="48" /></a></li>-->
<!--        <li><a href="#"><img src="images/temp4.jpg" width="118" height="48" /></a></li>-->
    </ul>
</div>
<div class="QA of">
	<div class="layout">
        <dl>
            <dt>关于一米户外</dt>
            <dd><a href="faq.html">一米户外究竟是做什么的？</a></dd>
            <dd><a href="faq.html">一米户外的独特之处</a></dd>
            <dd><a href="faq.html">一米户外都有些什么样的活动？</a></dd>
            <dd><a href="faq.html">一米户外一般什么时候会有活动？</a></dd>
            <dd><a href="faq.html">一米户外有保险吗？</a></dd>
        </dl>
        <dl>
            <dt>关于一米户外</dt>
            <dd><a href="faq.html">一米户外究竟是做什么的？</a></dd>
            <dd><a href="faq.html">一米户外的独特之处</a></dd>
            <dd><a href="faq.html">一米户外都有些什么样的活动？</a></dd>
            <dd><a href="faq.html">一米户外一般什么时候会有活动？</a></dd>
            <dd><a href="faq.html">一米户外有保险吗？</a></dd>
        </dl>
        <dl>
            <dt>关于一米户外</dt>
            <dd><a href="faq.html">一米户外究竟是做什么的？</a></dd>
            <dd><a href="faq.html">一米户外的独特之处</a></dd>
            <dd><a href="faq.html">一米户外都有些什么样的活动？</a></dd>
            <dd><a href="faq.html">一米户外一般什么时候会有活动？</a></dd>
            <dd><a href="faq.html">一米户外有保险吗？</a></dd>
        </dl>
        <dl>
            <dt>关于一米户外</dt>
            <dd><a href="faq.html">一米户外究竟是做什么的？</a></dd>
            <dd><a href="faq.html">一米户外的独特之处</a></dd>
            <dd><a href="faq.html">一米户外都有些什么样的活动？</a></dd>
            <dd><a href="faq.html">一米户外一般什么时候会有活动？</a></dd>
            <dd><a href="faq.html">一米户外有保险吗？</a></dd>
        </dl>
    </div>
</div>
<div class="foot">Copyright © 2012 一米户外 1mhw.com |  川ICP证B2-20070191</div>
</body>
</html>
