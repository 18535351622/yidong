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
     * 方法：注册
     * 作用：接受登录者的手机号进行入库
     * 参数：手机号
     */
    public function Index(){
        //根据注册人的手机号进行查询
        return view('login/index');
    }

    /*
     *
     */
    public function phone_add(){
        $data=Request::all();
        $rule = "/^\d{11}$/";
        if(preg_match($rule, $data['phone'])){
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
        $arr=DB::table('user')->get();
        return view('login/list',['arr'=>$arr]);

    }





}
