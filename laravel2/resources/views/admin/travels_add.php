<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>一米户外后台数据管理系统</title>
<link href="home\style/css.css" rel="stylesheet" type="text/css" />
<script src="home\style/jquery.js" type="text/javascript"></script>
<script src="home\style/style.js" type="text/javascript"></script>
</head>

<body>
<div class="top">
	<h1>一米户外后台数据管理系统</h1>
</div>
<div>
    <div class="left">
        <a href="admin">首页</a>
        <a href="way">线路管理</a>
        <a href="travels" class="select">游记管理</a>
        <a href="vip">会员管理</a>
        <a href="type">分类管理</a>
        <a href="about.html">一米介绍</a>
        <a href="captainList.html">领队资料</a></div>
    <div class="right">
        <table class="TB xian">
            <caption>
                游记详细
            </caption>
            <tr>
                <th>游记名</th>
                <td><input name="textfield" type="text" id="textfield" value="2012行走在向阳之地-蓝色星球上的净土“稻城亚丁”" /></td>
            </tr>
            <tr>
                <th>关键词：</th>
                <td><input name="textfield2" type="text" id="textfield2" value="四川，西藏，稻叶山" />
                    最多可以写5个词，用逗号分隔</td>
            </tr>
            <tr>
                <th>相关线路：</th>
                <td><input name="textfield5" type="text" id="textfield6" value="http://detail.tmall.com/item.htm?spm=a230r.1.10.1&amp;id=15290665667&amp;ad_id=&amp;am_id=&amp;cm_id=&amp;pm_id=" /></td>
            </tr>
            <tr>
                <th>插入形象大图：</th>
                <td><input type="file" name="fileField" id="fileField" /></td>
            </tr>
            <tr>
              <th>游记正文：</th>
              <td><a href="#" class="TBbtn1">在下面输入一段话</a> <a href="#" class="TBbtn1">输入一张图片</a></td>
            </tr>
            <tbody id="youjiIns">
           		 <tr>
              <th>&nbsp;</th>
              <td>dddd</td>
            </tr>
            </tbody>
            <tr>
              <th>&nbsp;</th>
              <td>
                     <div><img src="../images/addCaptian.gif" /></div>
                     <div class="xianluUpImg" style="">
	                 <input type="text" class="xianluUpImgValue">  
                     <input type="file" class="xianluUpImgFile">
                     <input type="button" class="xianluUpImgButton" value="上传图片" />
          	  	 </div>
                <a href="#">图片向上移</a> | <a href="#">图片向下移</a></td>
            </tr>
            <tr>
                <th>&nbsp;</th>
                <td><textarea name="textfield3" id="textfield5">
此条线路特点：
    ★ “泰”超值：市场独家！全程入住当地五星酒店，最后1晚更为您安排升级入住曼谷超豪华酒店之一的曼谷半岛酒店，体验奢华与尊贵，享受高品质服务！酒店独特的设计使每个房间都可以将绝美的湄南河景尽收眼底！
    ★ “泰”好玩：大皇宫、玉佛寺、夜游湄南河、东芭乐园、古法按摩等缤纷经典项目全包含，快乐假期就此展开！
    ★ “泰”好吃：Rmayana国际自助餐、海鲜餐、泰式桌餐等等各色餐食，体验不同味道！
    ★ “泰”省心：购物、自费明明白白，游玩更安心！ </textarea>
      <br />
      <a href="#">文字向上线</a> | <a href="#">文字向下移</a></td>
            </tr>
            <tr>
                <th>&nbsp;</th>
                <td><button>修改</button></td>
            </tr>
        </table>
    </div>
</div>
</body>
</html>
