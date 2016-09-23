<?php
namespace App\Http\Controllers\datum;
use App\Http\Controllers\Controller;
use DB;
use Request;
use Input,get,post;

header("content-type:text/html;charset=utf-8");
class Logincontroller extends CommonController
{
    /**
     * 方法：添加个人资料
     * 作用：接受用户添加的资料
     * 参数：手机号    名字   邮箱     地址
     */
    public function Index(){
        return view('datum/index');
    }



    /**
     * 接受添加资料的数据
     */
    public function datum_add(){
        $data=Request::all();
        //名字
        $arr['user_name']=$data['user_name'];
        //邮箱
        $arr['user_email']=$data['user_email'];
        //地址
        $arr['user_address']=$data['user_address'];
        $res=DB::table('user')->where(['user_tel'=>$data['user_tel']])->update($arr);
        if($res){
            $result=DB::table('user')->where(['user_tel'=>$data['user_tel']])->first();
            //记录session
            session(['user_id'=>$result['user_id'],'user_tel'=>$result['user_tel']]);
            echo $this ->success( $result,"修改成功",10005);die;
        }
    }



}
