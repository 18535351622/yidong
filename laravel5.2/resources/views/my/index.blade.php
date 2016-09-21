<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<table border="1">
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
            <td><a href="{{ URL::to('my/my/lists') }}?phone=18535351622">删除</a></td>
        </tr>
    @endforeach
</table>
</body>
</html>