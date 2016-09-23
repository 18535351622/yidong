<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .span{

            font-size: 20px;
            color: #f00 ;
        }
        a{
            color: #0000f0;
            text-decoration: none;
        }
    </style>
</head>
<body>


            @foreach($data as $k => $v)
            <tr>
               <span class="span">{{ $k }}</span>
            </tr>
            <br>

                @foreach($v as $va)
                    &nbsp;<a href="{{ url('study/lists',$va['course_id']) }}">{{ $va['course_name'] }}</a>


            @endforeach
            <br>
                @endforeach


</body>
</html>