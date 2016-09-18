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
        <table class="TB xian">
            <caption>
                分类管理
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="type_add"><button>添加旅游景点</button></a>
                <a href="type_sheng"><button>添加旅游省份</button></a>
            </caption>
            <?php foreach($arr as $k=>$v){?>
                <tr>
                    <td>
                        <?php echo str_repeat('-----',$v['levle'])?>
                        <?php echo $v['region_name']?>
                    </td>
                </tr>
            <?php }?>
        </table>
    </div>
</div>
</body>
</html>
