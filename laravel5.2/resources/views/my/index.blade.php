<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<table align="center">
    <tr>
        <td>
            <div  style="width: 100px;height: 100px;background-color: red">
                <table>
                    <tr>
                        <td>
                            {{$arr['user_tel']}}
                        </td>
                    </tr>
                </table>
            </div>
        </td>
    </tr>
    <tr>
        <td><a>我的照片</a></td>
    </tr>
    <tr>
        <td><a href="{{ url('my/my/lists') }}?phone=18535351622">我的身份证</a></td>
    </tr>
    <tr>
        <td><a>退出登录</a></td>
    </tr>
    <tr>
        <td><a>关于我们</a></td>
    </tr>
</table>
</body>
</html>