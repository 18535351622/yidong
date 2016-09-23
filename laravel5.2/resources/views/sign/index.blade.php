<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<form action="{{URL('phone_add')}}" method="post">
    <table border="1" align="center">
        <tr>
            <td>手机号：</td>
            <td>
                <input type="text" name="phone">
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