<?php
namespace App\Http\Controllers\login;
use App\Http\Controllers\Controller;
use DB;
use Request;
use Input,get,post;

header("content-type:text/html;charset=utf-8");
class Logincontroller extends CommonController
{
    /**
     * 方法：登录
     * 作用：接受登录者的手机号进行登录
     * 参数：手机号
     */
    public function Index(){
        return view('login/index');
    }

    /*
     * 方法：接受登录的参数
     * 作用：接受登录者的手机号进行登录
     * 参数：手机号
     */
    public function phone_login(){
        $data=Request::all();
        $rule = "/^\d{11}$/";
        if(preg_match($rule, $data['phone'])){
            $arr=DB::table('user')->where(['user_tel'=>$data['phone']])->first();
            if($arr){
//               session(['user_id'=>$arr['user_id']]);
//               session(['user_tel'=>$arr['user_tel']]);

                echo $this -> success( 10004 ,'登录成功',$arr);
                //测试数据
                print_r(json_decode($this -> success( 10004 ,'登录成功',$arr),true));
//                return redirect('ceshi');

            }else{

                echo $this -> failure( 10004 ,'没有此用户');
                print_r(json_decode($this -> failure( 10004 ,'没有此用户'),true));
            }

        }else{
            echo $this -> failure( 10002 , '请输入正确的手机号' );
            print_r(json_decode($this -> failure( 10002 , '请输入正确的手机号' ),true));
        }
    }





    /*
     *测试显示页面
     */
    public function ceshi(){
      echo session('user_id');
      echo session('user_tel');
    }


}
