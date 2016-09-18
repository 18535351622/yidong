<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>一米户外</title>
<link href="style/css.css" rel="stylesheet" type="text/css" />
<script src="style/jquery.js"></script>
<script type="text/javascript" src="http://open.51094.com/user/myscript/157a9c754ecd64.html"></script>
</head>
<body>
<div class="top" id="top">
	<div class="topBar layout">
	  <span class="topLogin">您好，欢迎来到一米户外！[<a href="login" class="cff0">登录</a>] [<a href="#" class="cfff">免费注册</a>]</span>
        <span class="topBarNav"><a href="#">收藏</a> | <a href="#">手机版</a> | <a href="#">微博</a> |</span>
        <span class="topTel">4008008888</span>
  </div>
	<div class="layout">
	    <div class="search">
	        <button onclick="javascript:window.location.href='search.html'"></button>
	        <input type="text" value="输入您想去的地方" />
        </div>
	    <h1 class="logo" title="一米户外">一米户外</h1>
	    <ul class="nav">
	        <li><a href="index.html">首页</a></li>
	        <li><a href="xingcheng.html">活动行程</a></li>
	        <li><a href="youji.html">米友游记</a></li>
	        <li><a href="captain.html">领队风采</a></li>
	        <li><a href="#">出行装备</a></li>
	        <li><a href="about.html">一米介绍</a></li>
        </ul>
    </div>
</div>
<div class="login">
	<div class="loginBg"></div>
    <!-- 会员登录 -->
	<div class="loginMain" id="a">
        <table>
        	<caption>会员登录</caption>
            <tr>
                <th>账号：</th>
                <td>
                    <input type="text" placeholder="请输入手机号" tabindex="1" name="username" onclick="this.value=''" id="username"/>
                </td>
            </tr>
            <tr>
                <th>密码：</th>
                <td>
                    <input type="password" name="password"  placeholder="请输入密码" id="pwd"/>
                </td>
            </tr>
            <tr>
                <td></td>
                <td><span id="show"></span></td>
              </tr>
            <tr>
                <th></th>
                <td>
                <input class="loginCheckBox" type="checkbox" name="checkbox" id="checkbox" />保存登录信息两周内免登录</td>
            </tr>
            <tr>
                <th></th>
                <td>
                	<button onclick="check()">登录</button>
                </td>
            </tr>
            <tr>
                <th></th>
                <td>
                    <a href="#" target="_blank">找回密码</a> |
                    <a href="javascript:void(0)" onclick="zhuce()">免费注册</a>
                </td>
            </tr>
        </table>
        <div class="loginPartner">
			<p>使用合作网站账号登录：</p>
            <ul>
            	<li class="loginPartnerLi1"><span id="hzy_fast_login"></span></li>
            </ul>
        </div>
	</div>
    





     <!-- 会员注册 -->
	<div class="loginMain"  id="b" style="display:none">
        <table>
        	<caption>会员注册</caption>
            <tr>
                <th>账号：</th>
                <td><input type="text" value="手机号/会员名/邮箱/会员卡号" tabindex="1" name="username" onclick="this.value=''"/></td>
            </tr>
            <tr>
                <th>密码：</th>
                <td><input type="password" name="password2"/></td>
            </tr>
            <tr>
                <th>确认密码：</th>
                <td><input type="password" name="password"/></td>
            </tr>
            <tr>
                <th>邮箱：</th>
                <td><input type="text" tabindex="1" name="username2"/></td>
            </tr>
            <tr>
                <th></th>
                <td>
                	<button>注册</button>
                </td>
            </tr>
        </table>
        <div class="loginPartner">
            <font>去登陆：</font>
            <a href="login">
                <img src="2.jpg" width="55" height="55" style="padding-left:10px">
            </a>
        </div>
	</div>
</div>
<script>
    function zhuce(){
        var a=$('#b').html();
        $('#a').html(a)
    }
    function check(){
        var username=$('#username').val();
        var pwd=$('#pwd').val();
        $.ajax({
//            url:"http://www.php101.com/add",
            url:"dologin",
            type:"post",
            data:{username:username,pwd:pwd},
            success: function(msg){
                        // alert(msg);
                         if(msg==1){
                            window.location.href="/";
                         }else{
                            $("#show").text(msg).css('color','#ff0000');
                         }
                       }
//            data:{username:username,pwd:pwd},
//            dataType:'jsonp',
//            jsonp:'callback',
//            jsonpCallback:'data',
//            success:function(e){
//                var status = e.status;//状态码
//                var msg= e.msg;     //提示信息
//                var data= e.data    //查询出来的信息
//                if(status==1){
//                    alert(msg)
//                }
//            }
        })
    }

</script>

<div class="foot">Copyright © 2012 一米户外 1mhw.com |  川ICP证B2-20070191</div>
</body>
</html>

