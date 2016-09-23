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

                session(['user_tel'=>$arr['user_tel'],'user_id'=>$arr['user_id']]);
                echo $this -> success( 10004 ,'登录成功',$arr);
                //测试数据
                print_r(json_decode($this -> success( 10004 ,'登录成功',$arr),true));die;
                return redirect('ceshi');

            }else{

                echo $this -> failure( 10004 ,'没有此用户');
                print_r(json_decode($this -> failure( 10004 ,'没有此用户'),true));die;
            }
        }else{
            echo $this -> failure( 10002 , '请输入正确的手机号' );
            echo "<br>";
            print_r(json_decode($this -> failure( 10002 , '请输入正确的手机号' ),true));
            die;
        }
    }


    /*
     * 展示页面
     * */
    public function bbb(){
        echo session('key');die;
        $arr=DB::table('user')->get();
        return view('login/list',['arr'=>$arr]);
    }


    /*
     *退出方法
     */
    public function loginout(){
      echo 1;
    }

    /*
     *测试显示页面
     */
    public function ceshi(){
        echo session('user_tel');
        echo session('user_id');
    }


}
