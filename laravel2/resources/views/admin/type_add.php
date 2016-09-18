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
        <a href="travels">游记管理</a>
        <a href="vip">会员管理</a>
        <a href="" class="select">分类管理</a>
        <a href="about.html">一米介绍</a>
        <a href="captainList.html">领队资料</a>
    </div>
    <script scr="jquery.js"></script>
    <div class="right">
        <form action="type_add2" method="post">
        <table class="TB xian">
            <caption>
                分类管理&nbsp;&nbsp;>>添加省份
            </caption>
            <tr>
                <th>请输入旅游省份：</th>
                <td>
                    <select name="parent_id" style="width: 503px">
                        <option value="0"><--请选择--></option>
                        <?php foreach($user as $k=>$v){?>
                            <option value="<?php echo $v['region_id']?>"><?php echo $v['region_name']?></option>
                        <?php }?>
                    </select>
                </td>
            </tr>
            <tr>
                <th>请输入旅游景点：</th>
                <td>
                    <input type="text" name="region_name"/>
                </td>
            </tr>
            <tr>
                <th></th>
                <td><input type="submit" value="提交"/></td>
            </tr>
        </table>
        </form>
        <table class="TB xian">
            <tr>
                <td colspan="2">
                    <a href="type"><button>分类列表</button></a>
                </td>
            </tr>
        </table>
    </div>
</div>
</body>
</html>
