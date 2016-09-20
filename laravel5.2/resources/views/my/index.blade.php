<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<table>
    <tr>
        <td>ID</td>
        <td>学校名称</td>
        <td>学校图片</td>
        <td>学校简介</td>
    </tr>
    @foreach($arr as $k=>$v)
        <tr>
            <td>{{$v['school_id']}}</td>
            <td>{{$v['school_name']}}</td>
            <td><img src="{{$v['school_badge']}}"/></td>
            <td>{{$v['school_desc']}}</td>
        </tr>
    @endforeach
</table>
</body>
</html>