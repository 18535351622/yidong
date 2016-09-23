<?php
namespace App\Http\Controllers\sign;
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
        return view('sign/index');
    }

    /*  方法：phone_add
     *  作用：接受注册传递的过来的数据，进行审核验证
     *        是否合法，是否已注册  给出对应的消息提示
     */
    public function phone_add(){
        $data=Request::all();
        $rule = "/^\d{11}$/";
        if(preg_match($rule, $data['phone'])){
           //检测是否注册过
            $result=DB::table('user')->where(['user_tel'=>$data['phone']])->first();
            if($result)
            {
                echo $this -> failure( 10001 , '此手机号已注册，请更换手机号重新注册' );die;
            }
            else
            {
                $result['user_tel']=$data['phone'];
                $number=rand(1,5);
                $result['user_header']='myimg/'.$number.'.jpg';
                $arr=DB::table('user')->insertGetId($result);
                if($arr){
                   $data1=DB::table('user')->where(['user_id'=>$arr])->first();
                    //记录session
                    session(['user_id'=>$data1['user_id'],'user_tel'=>$data1['user_tel']]);
                    echo $this ->success( $data1,"注册成功",10003);die;
                    return redirect('bbb');
                }
            }

        }else{
            echo $this -> failure( 10002 , '请输入真确的手机号' );die;
        }
    }

    /*
     * 展示页面测试
     */
    public function bbb(){
        $arr=DB::table('user')->get();
        return view('sign/list',['arr'=>$arr]);

    }





}
