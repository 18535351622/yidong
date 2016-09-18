<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>一米户外</title>
<link href="style/css.css" rel="stylesheet" type="text/css" />
<script src="style/style.js"></script>
</head>

<body>
<div class="top" id="top">
    <div class="topBar layout">
        <div class="topLoginDiv" style="display:none">
            <!-- login -->
            <table class="topLoginTB">
                <tr>
                    <th>帐号：</th>
                    <td><input type="text" name="textfield3" id="textfield3" /></td>
                </tr>
                <tr>
                    <th>密码：</th>
                    <td><input type="text" name="textfield3" id="textfield3" /></td>
                </tr>
                <tr>
                    <th>验证码：</th>
                    <td><input type="text" name="textfield4" id="textfield4" class="w50" />
                        8484</td>
                </tr>
                <tr>
                    <th>&nbsp;</th>
                    <td><button>登录</button></td>
                </tr>
            </table>
        </div>
        <span class="topLogin">您好，欢迎来到一米户外！[<a href="#" class="cff0">登录</a>] [<a href="#" class="cfff">免费注册</a>]</span> <span class="topBarNav"><a href="#">收藏</a> | <a href="#">手机版</a> | <a href="#">微博</a> |</span> <span class="topTel">4008008888</span></div>
    <div class="layout">
        <div class="search">
            <button onclick="javascript:window.location.href='search.html'"></button>
            <input type="text" value="输入您想去的地方" />
        </div>
        <h1 class="logo" title="一米户外">一米户外</h1>
        <ul class="nav">
            <li><a href="index.html">首页</a></li>
            <li><a href="xingcheng.html" class="select">国内游</a></li>
            <li><a href="youji.html">周边游</a></li>
            <li><a href="captain.html">领队风采</a></li>
            <li><a href="#">出行装备</a></li>
            <li><a href="about.html">一米介绍</a></li>
        </ul>
    </div>
</div>
<div class="layout of">
<div class="right">
  <div class="tour">
  	
    <div class="tourMain">
    <?php foreach ($show as $key => $v) {
    
    ?>
    	<div class="tourRight">
       	  <h1><?php echo $v['region_name']?></h1>
	  		<ul class="tourMain">
		        <li>价格：<span class="tourPrice"><?php echo $v['price']?></span>元</li>
		        <li class="tourDateIe6">出行日期：<span class="tourDate"><?php echo $v['datetime']?></span></li>
			</ul>
            <div>
            	<span class="tourPStit">备注：</span>
                	<div class="tourPS"><?php echo $v['content']?></div>
            </div>
          <button>去淘宝预订付款</button> 
        	<dl class="tourStrong">
            	<dt>此条线路特点：</dt>
                <dd>★ “泰”超值：市场独家！全程入住当地五星酒店，最后1晚更为您安排升级入住曼谷超豪华酒店之一的曼谷半岛酒店，体验奢华与尊贵，享受高品质服务！酒店独特的设计使每个房间都可以将绝美的湄南河景尽收眼底！</dd>
                <dd>★ “泰”好玩：大皇宫、玉佛寺、夜游湄南河、东芭乐园、古法按摩等缤纷经典项目全包含，快乐假期就此展开！</dd>
                <dd>★ “泰”好吃：Rmayana国际自助餐、海鲜餐、泰式桌餐等等各色餐食，体验不同味道！</dd>
                <dd>★ “泰”省心：购物、自费明明白白，游玩更安心！ </dd>
                
            </dl>
        </div>
   
    	<div class="tourLeft">
        	<div class="tourPhoto"><img src="<?php echo $v['img']?>" width="480" height="319" /></div>
            <div class="tourMap"><img src="images/temp8.jpg" width="480" height="300" /></div>
        </div>
       <?php } ?>  
    </div>
    <div class="tourBox">
    	<div class="tourBoxTit">行程详情</div>
        <div class="tourDay"><h3>第0天</h3>汇聚成都</div>
        <div class="tourText">
        	俱乐部统一安排商务酒店，领队晚间与队员见面，召开行前会。<br /> 
			餐饮：不含<br />
			住宿：成都商务酒店（双人标间）
        </div>
        <div class="tourDay">
          <h3>第1天</h3>
          成都—雅安—泸定—康定—新都桥—雅江</div>
        <div class="tourText">
        	 今日车行约13小时，行程较长、望大家做好相应准备（早餐请各位驴亲自行提前准备）。早上6点酒店集结出发，过成雅高速到拥有3雅的之称雅安（雅鱼、雅女、雅雨），沿着青衣江翻越二郎山抵泸定、中餐后出发经情歌之乡康定翻折多山抵摄影天堂新都桥，最后一座高尔寺山后抵达今日目的地雅江。<br /> 
            餐饮：泸定中餐，雅江晚餐。<br /> 
            住宿：雅江当地宾馆（2~4人普间）<br /> 
            海拔：成都540米、康定2900米、新都桥3400米、雅江2530米）
        </div>
        <div class="tourDay">
          <h3>第2天</h3>
          雅江—理塘—铁匠山垭口—章纳乡（230KM）</div>
        <div class="tourText">
        	 晨起7:30出发，今天会翻越3座垭口：4659米的剪子弯山和海拔4718米的卡子拉山、4770米铁匠山。每个垭口风景各异，也就是说，今日垭口远眺群山，请诸位准备好你的摄影器材。在傍晚时分到达喇嘛垭欣赏暮色中的宁静小村，继续向章纳乡挺进。<br /> 
餐饮：雅江早餐，理塘午餐，章纳晚餐<br /> 
住宿：章纳藏族民居（地铺）<br /> 
需时：雅江-理塘约4.5小时；理塘-章纳乡约4小时<br /> 
海拔：理塘4014米、章纳乡3700米
        </div>
        <div class="tourDay">
          <h3>第4天</h3>
          章纳乡-6km-乃干多村-7km-虎皮坝</div>
        <div class="tourText">
        	请时刻准备着拿起手中的相机，格聂神山、肖扎神山、喀麦隆峰会时不时的出现在你瞳孔里，
今日海拔在平坝和溪流中缓缓上升、如此美景中徒步，相信你会很轻松的度过今日行程。乃干多路餐、下午直抵虎皮坝扎营。（今日徒步时间7小时左右）<br /> 
餐饮：章纳乡早餐、虎皮坝营地晚餐<br /> 
住宿：露营<br /> 
需时：章纳乡-乃干多村2.5小时；乃干多村-虎皮坝3.5小时<br /> 
海拔：章纳乡3540米、乃干多村3700米、虎皮坝约3900米
        </div>
        <div class="tourDay">
          <h3>第5天</h3>
          虎皮坝-3km-冷古寺-10km-乃干多村</div>
        <div class="tourText">
        	 清晨拉开帐篷，就能举机拍摄格聂的晨曦，早餐后行进冷古寺，途中如有幸能够看到部分野生动物、晌午时分返回虎皮坝、用过路餐拔营，直抵今日露营点乃干多村。<br /> 
餐饮：营地早餐、营地晚餐<br /> 
住宿：露营乃干多村头<br /> 
海拔：冷谷寺4150米、乃干多村3700米<br /> 
需时：虎皮坝-冷谷寺约2小时、返回虎皮坝约1小时、虎皮坝-乃干多2.5小时
        </div>
        <div class="tourDay"><h3>第6天</h3>乃干多村-6km-则通村-4km-拉在垭口-4km-喇嘛垭-71km-理塘</div>
        <div class="tourText">
        	 今日诸位驴亲，将在一次又一次的视觉冲击中度过，辽阔的坝子、格聂、肖扎、喀麦隆、库日岗中、等山峰。在你的视野中呈一字排开。不用质疑，这一切美景都是真实的。下午13-14点抵达喇嘛垭乘车经铁匠山垭口返回理塘。<br /> 
餐饮：营地早餐、理塘晚餐<br /> 
住宿：理塘当地宾馆（准三星，双人标间独卫）<br /> 
海拔：乃干多村3700米、拉则垭口4180米、理塘4014米<br /> 
需时：乃干多-则通2小时、则通村-喇嘛垭2.5小时、喇嘛垭-理塘约3小时。
        </div>
        <div class="tourDay">
          <h3>第7天</h3>
          理塘-294km-康定</div>
        <div class="tourText">
        	8点早餐后，参观著名的长青春科尔寺，踏上归程。傍晚经摄影天堂新都桥到达情歌故乡康定。<br />
餐饮：理塘早餐、雅江午餐、康定晚餐<br />
住宿：康定当地宾馆<br />
海拔：理塘4014米、康定2900米<br />
需时：全程行车约8小时
        </div>
        <div class="tourDay">
          <h3>第8天</h3>
          康定-390km-成都</div>
        <div class="tourText">
        	 早餐后离开康定，经泸定，翻二郎山，经雅安返回成都，结束愉快的旅程。到达成都的时间大约在下午3点左右，请当天要离开成都的外地朋友做好相应的安排，以免误车或误机。<br />
餐饮：康定早餐、天全午餐<br />
住宿：自理<br />
需时：全程行车约6.5小时<br />
海拔：康定2900米、成都540米
        </div>
    </div>
    <div class="tourBox">
      <div class="tourBoxTit">费用包含 </div>
      <div class="tourText">
1、交通：全程包车进山往返费用。<br /> 
2、住宿：按行程所列标准入住。<br />
3、餐饮：10正6早。全程所有餐费,包含营地早餐、及营地晚餐。<br />
4、门票：包含冷谷寺进山门票及理塘温泉费用 <br />
5、马匹：已包含马匹驮装备费用，个人骑马费用自理。<br />
6、装备：炊事帐篷、燃料、炉具、炊具、部分餐具、通讯工具等。<br />
7、向导及协作：一米户外专业领队,当地藏族协作<br />
8、俱乐部组织费等。 
      </div>
    </div>
    <div class="tourBox">
      <div class="tourBoxTit">自理费用</div>
      <div class="tourText">  参加活动人员自身保险费用，（一米户外将替每一名队员出资购买太平洋专业登山保险一份，最高赔偿金额15W。）同时建议每一个参与活动队员在活动前替自己也单独购买一份户外险。户外有风险，请慎重。
个人骑马费用，购物费用，以及其他奢侈性消费所产生的费用。</div>
    </div>
    <div class="tourBox">
      <div class="tourBoxTit">活动装备 <a href="#">来我们的一米淘宝店逛逛吧，一米会员享受88折优惠，预订此线路享受75折优惠！</a></div>
      <div class="tourText">
      <a href="#">必备衣裤</a>：冲锋衣、冲锋裤、登山鞋、抓绒衣、抓绒裤、棉袜、抓绒手套、帽子，秋裤、羽绒服<br />
      <a href="#">工具</a>：头灯（或电筒）、雨具、登山杖、太阳镜、雪套<br />
      <a href="#">其它</a>：个人特殊药品、水壶、饭盒、个人日常用品、防晒霜、照相机（带电池）、手机（带电池）、压缩袋、垃圾袋、炉头、3顿路餐<br />
	  <a href="#">公用装备</a>：炊事帐篷、燃料、炉具、炊具、部分餐具、通讯工具、应急药品等 </div>
    </div>
    <div class="tourBox">
      <div class="tourBoxTit">活动守则</div>
      <div class="tourText">
      1、注意安全，遵守组织纪律，听从领队安排，遇到分歧大家可以商量解决，但决定权在领队。
<br />2、保持良好的团队协作精神。
<br />3、禁止私自离队活动，外出至少2人一组并向领队报告，保证通讯工具畅通。
<br />4、禁止私自进行攀登、涉水等具有危险性的活动。
<br />5、环保。
<br />6、禁止私自生火。
<br />7、注意饮食卫生，注意预防疾病。注意自我保护。
<br />8、有任何困难或疑问尽快和领队沟通。
<br />9、遵守当地风俗习惯，不要伤害当地人感情。
<br />10、公用马匹是用来驮装备和大家背包的，不建议负重进山,需要骑马的请提前联系。</div>
    </div>
    <div class="tourBox">
      <div class="tourBoxTit">注意事项</div>
      <div class="tourText"> 1、本次活动为高原徒步线路，请大家对自己身体情况加以正确评估以决定是否参加。
<br />2、高原长冬无夏，气候变化无常，昼夜温差很大，即使夏天也有降雪可能，请大家注意携带保暖衣物，并请选择-15℃温标睡袋。高原紫外线强烈，请准备防晒用品。
<br />3、喇嘛垭到冷谷寺手机全无信号。
<br />4、高原地区热量流失迅速，因要进行长途跋涉（体力不支者可骑马），请自备高热量食品以补充体力。巧克力、压缩饼干、维生素等可适当准备。
<br />5、所达地区风景秀丽，摄影景点无数，胶片玩家请带够胶卷和电池，数码玩家请带够存储卡和电池。
<br />6、本次活动路线特殊，路线长，路况差，当地接待设施很差，当地人服务意识不足。活动组织方只能尽力去为大家安排好一切。但难免有许多不足之处，请多多包涵。,</div>
    </div>
    <div class="tourBox">
      <div class="tourBoxTit">报名事项</div>
      <div class="tourText">1、本次活动每队限28人内，少于6人则本次活动取消，活动出发前4天截至报名。人满则不接受报名
<br />2、请有次打算的队员提前做好工作安排，并适当调整身体状况（锻炼），另外提前准备装备。有困难请及时联系我们。
<br />3、请确定要参加本次活动的队员及时跟我们联系，并预交900/人的定金用于联系包车以及购买公用食品。</div>
    </div>
    <div class="tourBox">
        <div class="tourText"> 
            <iframe src="lianxi.html" class="lianxiIframe"></iframe>
        </div>
    </div>
  </div>
</div>
	<div class="left">
        <div class="leftBox">
            <h2>活动分类</h2>
            <div class="line1" ></div>
            <dl class="keyword">
                <dt><a href="search.html">四川</a></dt>
                <dd><a href="search.html">九寨沟</a></dd>
                <dd><a href="search.html">峨眉山</a></dd>
                <dd><a href="search.html">成都</a></dd>
                <dd><a href="search.html">海螺沟</a></dd>
                <dd><a href="search.html">四姑娘</a></dd>
                <dt><a href="search.html">西藏</a></dt>
                <dd><a href="search.html">西藏</a></dd>
                <dd><a href="search.html">拉萨</a></dd>
                <dd><a href="search.html">布达拉宫</a></dd>
                <dd><a href="search.html">纳木措</a></dd>
                <dd><a href="search.html">林芝</a></dd>
                <dd><a href="search.html">日喀则</a></dd>
                <dd><a href="search.html">羊卓雍措</a></dd>
                <dt><a href="search.html">西藏</a></dt>
                <dd><a href="search.html">成都</a></dd>
                <dd><a href="search.html">海螺沟</a>在</dd>
                <dd><a href="search.html">四姑娘</a></dd>
                <dd><a href="search.html">九寨沟</a></dd>
                <dd><a href="search.html">峨眉山</a></dd>
                <dt><a href="search.html">西藏</a></dt>
                <dd><a href="search.html">成都</a></dd>
                <dd><a href="search.html">海螺沟</a>在</dd>
                <dd><a href="search.html">四姑娘</a></dd>
                <dd><a href="search.html">九寨沟</a></dd>
                <dd><a href="search.html">峨眉山</a></dd>
                <dt><a href="search.html">西藏</a></dt>
                <dd><a href="search.html">成都</a></dd>
                <dd><a href="search.html">海螺沟</a>在</dd>
                <dd><a href="search.html">四姑娘</a></dd>
                <dd><a href="search.html">九寨沟</a></dd>
                <dd><a href="search.html">峨眉山</a></dd>
            </dl>
        </div>
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
<div class="layout photo clear">
  <div class="tit">
    <h2 class="tit5"></h2>
  </div>
  <ul>
  	<li><a href="#"><img src="images/temp5.jpg" /></a></li>
    <li><a href="#"><img src="images/temp5.jpg" /></a></li>
    <li><a href="#"><img src="images/temp5.jpg" /></a></li>
    <li><a href="#"><img src="images/temp5.jpg" /></a></li>
    <li><a href="#"><img src="images/temp5.jpg" /></a></li>
  </ul>
</div>
<div class="link of">
	<ul class="layout">
    	<li><a href="#"><img src="images/temp4.jpg" width="118" height="48" /></a></li>
        <li><a href="#"><img src="images/temp4.jpg" width="118" height="48" /></a></li>
        <li><a href="#"><img src="images/temp4.jpg" width="118" height="48" /></a></li>
        <li><a href="#"><img src="images/temp4.jpg" width="118" height="48" /></a></li>
        <li><a href="#"><img src="images/temp4.jpg" width="118" height="48" /></a></li>
        <li><a href="#"><img src="images/temp4.jpg" width="118" height="48" /></a></li>
        <li><a href="#"><img src="images/temp4.jpg" width="118" height="48" /></a></li>
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
