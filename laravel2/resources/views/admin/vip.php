<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>一米户外后台数据管理系统</title>
<link href="home/style/css.css" rel="stylesheet" type="text/css" />
<script src="home/style/jquery.js" type="text/javascript"></script>
<script src="home/style/style.js" type="text/javascript"></script>
</head>

<body>
<div class="top">
	<h1>一米户外后台数据管理系统</h1>
</div>
<div>
    <div class="left">
        <a href="admin">首页</a>
        <a href="way">线路管理</a>
        <a href="travels">游记管理</a>
        <a href="vip" class="select">会员管理</a>
        <a href="type">分类管理</a>
        <a href="about.html">一米介绍</a>
        <a href="captainList.html">领队资料</a></div>
    <div class="right">
        <table class="TB">
            <tr>
                <th>选择</th>
                <th>会员名</th>
                <th>邮箱地址</th>
                <th>手机号</th>
                <th>昵称</th>
                <th>发表游记</th>
                <th>收藏线路</th>
                <th>注册日期</th>
                <th>操作</th>
            </tr>
            <tr>
                <td><input type="checkbox" name="checkbox" id="checkbox" class="TBradio"/></td>
                <td class="textLeft"><a href="#">zhaofuqun</a></td>
                <td>zhaofuqun@gmail.com</td>
                <td>13770792749</td>
                <td>福群</td>
                <td>5篇</td>
                <td>11篇</td>
                <td>12.08.12</td>
                <td>
                    <a href="javascript:void(0)" class="TBbtn">修改</a>
                    <a href="javascript:void(0)" class="TBbtn">重置密码</a>
                    <a href="javascript:void(0)" class="TBbtn">删除</a>
                </td>
            </tr>
        <caption>
            <span>
                <a href="javascript:void(0)">按日期排序</a> |
                <a href="javascript:void(0)">按点击数排名</a>
            </span>
            会员管理
        </caption>
        <tr>
            <td colspan="10">
                <a href='vip_add'><button>添加一条个会员</button></a>
                <button>删除选中</button>
            </td>
        </tr>
        </table>
    </div>
</div>
</body>
</html>
