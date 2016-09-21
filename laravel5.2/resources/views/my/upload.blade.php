<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<form action="{{ url('my/my/aaa') }}" method="post" enctype="multipart/form-data">
    <table align="center" >
        <tr>
            <td>身份证正面：</td>
            <td><input type="file" name="filename"/></td>
        </tr>
        <tr>
            <td>身份证反面：</td>
            <td><input type="file" name="filename1"/></td>
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