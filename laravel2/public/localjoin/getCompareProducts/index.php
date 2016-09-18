<?php
header("content-type:text/json;charset:utf-8;");
$json=<<<END
[]
END;
$json=iconv("GB2312","UTF-8//IGNORE",$json);
echo $json;
