<?php
namespace App\api;

class functions
{
    /***
     * 处理无限极分类
     * @param $data  原始数组
     * @param $pid   父级id从几开始
     * @param $level 定义参数 分隔数据
     * return array() 返回数组
     */

    public static function getList($data,$pid=0,$level=0)
    {
         static $res = array();
         foreach($data as $k =>$v)
         {
             if($v['pid'] == $pid)
             {
                 $v['level'] = $level;
                 $res[] = $v;
                 self::getList($data,$v['list_id'],$level+1);
             }
         }
        //print_r($res);
        return $res;
    }



    /**
     * 失败输出
     */
    public static function failure($error_status = 1, $error_msg = 'ERROR', $error_data = array(), $other_data = array())
    {

        //拼装数据
        $error_arr = array();

        //失败的状态码
        $error_arr['status'] = $error_status;

        //失败的提示信息
        $error_arr['msg'] = $error_msg;

        //失败返回的错误数据
        $error_arr['data'] = $error_data;

        return self::JsonOutPut($error_arr, $other_data);die();

    }

    /**
     * 成功输入
     */
    public static function success($data = array(), $success_msg = 'success', $success_status = 0, $other_data = array())
    {

        //拼装数据
        $error_arr = array();

        //失败的状态码
        $error_arr['status'] = $success_status;

        //失败的提示信息
        $error_arr['msg'] = $success_msg;

        //失败返回的错误数据
        $error_arr['data'] = $data;

        return self::JsonOutPut($error_arr, $other_data);

    }

    /**
     * 输入json数据
     */
    public static function JsonOutPut($arr = array(), $other_data)
    {

        if (!is_array($arr)) {
            $arr = ( array )$arr;
        }

        //合并要返回的数据
        $arr = array_merge($arr, (array)$other_data);

//        P( $arr );

        //返回的JSON数据
        $json_str = json_encode($arr);

        return $json_str;
        exit;
    }



}