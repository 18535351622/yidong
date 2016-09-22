<?php
namespace App\Http\Controllers\login;
use Illuminate\Routing\Controller;

class CommonController extends Controller
{
    /**
     * 失败输出
     */
    public function failure($error_status = 1, $error_msg = 'ERROR', $error_data = array(), $other_data = array()){
        //拼装数据
        $error_arr = array();
        //失败的状态码
        $error_arr['status'] = $error_status;
        //失败的提示信息
        $error_arr['msg'] = $error_msg;
        //失败返回的错误数据
        $error_arr['data'] = $error_data;
//        print_r($error_arr);die();
        return  $this->JsonOutPut($error_arr, $other_data);

    }

    /**
     * 成功输入
     */
    public function success($data = array(), $success_msg = 'success', $success_status = 0, $other_data = array()){
        //拼装数据
        $error_arr = array();
        //失败的状态码
        $error_arr['status'] = $success_status;
        //失败的提示信息
        $error_arr['msg'] = $success_msg;
        //失败返回的错误数据
        $error_arr['data'] = $data;
        return $this->JsonOutPut($error_arr, $other_data);

    }
    /**
     * 输入json数据
     */
    public function JsonOutPut($arr = array(), $other_data)
    {
        if (!is_array($arr)) {
            $arr = ( array )$arr;
        }
        //合并要返回的数据
        $arr = array_merge($arr, (array)$other_data);
        //返回的JSON数据
        $json_str = json_encode($arr);
        return $json_str;
        exit;
    }

}
