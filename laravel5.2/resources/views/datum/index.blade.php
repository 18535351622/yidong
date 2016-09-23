<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<form action="{{URL('datum_add')}}">
    <table align="center">
        <tr>
            <td>手机号：</td>
            <td>
                <input type="text" name="user_tel">
            </td>
        </tr>
        <tr>
            <td>姓名：</td>
            <td><input type="text" name="user_name"></td>
        </tr>
        <tr>
            <td>邮箱：</td>
            <td>
                <input type="text" name="user_email">
            </td>
        </tr>
        <tr>
            <td>地址：</td>
            <td>
                <input type="text" name="user_address">
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <input type="submit" value="提交">
            </td>
        </tr>
    </table>
</form>

</body>
</html>