<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<table>
    @foreach($data as $v)
    <tr>
        <td><a href="{{ url('study/listinfo',$v['list_id']) }}">{{ str_repeat('----',$v['level']).$v['list_name'] }}</a></td>
    </tr>

        @endforeach
</table>
</body>
</html>