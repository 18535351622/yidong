<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>一米户外后台数据管理系统</title>
<link href="home/style/css.css" rel="stylesheet" type="text/css" />
<script src="home/style/jquery.js" type="text/javascript"></script>
<script src="home/style/style.js" type="text/javascript"></script>
    {{--地图--}}
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=X2wtiDmk7IIZomWvg0jQIPp31I4jXcLn"></script>
    <style type="text/css">
        #allmap {width: 500px;height: 100px;overflow: hidden;margin:0;font-family:"微软雅黑";}
    </style>


    {{--日期--}}
    <script src="riqi/jquery.js" type="text/javascript"></script>
    <link href="riqi/jquery.datepick.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="riqi/jquery.datepick.js"></script>
    <script type="text/javascript" src="riqi/jquery.datepick-zh-CN.js"></script>
</head>

<body>
<div class="top">
	<h1>一米户外后台数据管理系统</h1>
</div>
<div>
    <div class="left">
        <a href="/">首页</a>
        <a href="way">线路管理</a>
        <a href="travels">游记管理</a>
        <a href="" class="select">会员管理</a>
        <a href="type">分类管理</a>
        <a href="about.html">一米介绍</a>
        <a href="captainList.html">领队资料</a></div>
    <div class="right">
        <form action="vip_add1" method="post" enctype="multipart/form-data">
        <table class="TB xian">
            <caption>
                会员详细
            </caption>
            <tr>
                <th>会员名</th>
                <td><input name="username" type="text" placeholder="请输会员名称"/></td>
            </tr>
            <tr>
                <th>邮箱地址：</th>
                <td><input name="email" type="text" placeholder="请输入邮箱地址"/></td>
            </tr>
            <tr>
                <th>手机号：</th>
                <td><input name="phone" type="text" placeholder="请输入手机号"/></td>
            </tr>
            <tr>
                <th>昵称：</th>
                <td>
                    <input name="nickname" type="text" placeholder="请输入昵称"/>
                </td>
            </tr>
            <tr>
                <th>性别：</th>
                <td>
                    <select style="width: 503px" name="sex">
                        <option value="-1"><--请选择--></option>
                        <option value="1">男</option>
                        <option value="0">女</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th>出生日期：</th>
                <td>
                    <input type="text" id="TextBox1" placeholder="请输入出入日期" name="birthday" />
                </td>
                <script type="text/javascript">
                    $(function () {
                        $("#TextBox1").datepick({ dateFormat: 'yy-mm-dd' });
                        $("#TextBox2").datepick({ dateFormat: 'yy-mm-dd' });
                    });
                </script>
            </tr>
            <tr>
                <th>工作单位详细地址：</th>
                <td>
                    <div id="allmap"></div>
                </td>
            </tr>
            <tr>
                <th>地址：</th>
                <td>
                    <input class="normal" name="address"  id='aa' type="text"/>
                </td>
            </tr>
            <tr>
                <th>个人形象图：</th>
                <td>
                    <input type="file" name="filename" />
                    图片尺寸为80 x 80</td>
            </tr>
            <tr>
                <th>&nbsp;</th>
                <td><input type="submit"/></td>
            </tr>
        </table>
        </form>
    </div>
</div>
<script type="text/javascript">
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,12);
    var geoc = new BMap.Geocoder();
    map.addEventListener("click", function(e){
        var pt = e.point;
        geoc.getLocation(pt, function(rs){
            var addComp = rs.addressComponents;
            var sheng=addComp.province;
            var shi=addComp.city;
            var qu=addComp.district;;
            var res=addComp.province + "," + addComp.city + "," + addComp.district + "," + addComp.street + "," + addComp.streetNumber;
            $('#aa').val(res);
            $('#bb').val(sheng);
            $('#cc').val(shi);
            $('#dd').val(qu);

        });
    });
</script>
</body>
</html>
