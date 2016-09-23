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
<<<<<<< HEAD
           //检测是否注册过
            $result=DB::table('user')->where(['user_tel'=>$data['phone']])->first();
            if($result)
            {
                echo $this -> failure( 10001 , '此手机号已注册，请更换手机号重新注册' );
                echo "<br>";
                print_r(json_decode($this -> failure( 10001 , '此手机号已注册，请更换手机号重新注册' ),true));
            }
            else
            {
                $result['user_tel']=$data['phone'];
                $number=rand(1,5);
                $result['user_header']='myimg/'.$number.'.jpg';
                $arr=DB::table('user')->insertGetId($result);
                if($arr){
                   $data1=DB::table('user')->where(['user_id'=>$arr])->first();
                    echo $this ->success( $data1,"注册成功",10003);
                    echo "<br>";
                    print_r(json_decode($this ->success( $data1,"注册成功",10003),true));
                    die;
                    return redirect('bbb');
                }
=======
            $arr=DB::table('user')->where(['user_tel'=>$data['phone']])->first();
            if($arr){
                session(['user_tel'=>$arr['user_tel'],'user_id'=>$arr['user_id']]);
                echo $this -> success( 10004 ,'登录成功',$arr);die;
                //测试数据
                print_r(json_decode($this -> success( 10004 ,'登录成功',$arr),true));
                return redirect('ceshi');
>>>>>>> xiaojun
            }
        }else{
            echo $this -> failure( 10002 , '请输入正确的手机号' );
            echo "<br>";
            print_r(json_decode($this -> failure( 10002 , '请输入正确的手机号' ),true));
            die;
        }
    }

<<<<<<< HEAD
    /*
     * 展示页面
     * */
    public function bbb(){
        echo session('key');die;
        $arr=DB::table('user')->get();
        return view('login/list',['arr'=>$arr]);
=======
>>>>>>> xiaojun


    /*
     *退出方法
     */
    public function loginout(){
      
    }








    /*
     *测试显示页面
     */
    public function ceshi(){
        echo session('user_tel');
        echo session('user_id');
    }


}
