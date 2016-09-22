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
        <td>图片</td>
    </tr>
    @foreach($arr as $k=>$v)
        <tr>
            <td>{{$v['user_id']}}</td>
            <td><img src="{{$v['user_header']}}" width="100" height="100"></td>
        </tr>
    @endforeach
</table>

</body>
</html>