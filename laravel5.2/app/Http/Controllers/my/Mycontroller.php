<?php

namespace App\Http\Controllers\my;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Faker\Provider\File;

use Request,get,post;
use DB;
header("content-type:text/html;charset=utf-8");
class Mycontroller extends Controller
{
    /**
     * 作用：登录成功后，点击我的按钮，根据登录传过来的手机号查找用户
     *       显示登录用户的信息
     * 参数：注册用户的手机或用户的ID
     */
    public function anyIndex(){


        //根据注册人的手机号进行查询
        $phone=Request::get('phone');
        $result=DB::table('user')->where(['user_tel'=>$phone])->first();
        session(['key'=>123]);

//         根据用户的ID进行查询
//        $user_id=Request::get('user_id');
//        $result=DB::table('user')->where(['user_id'=>$user_id])->first();


//         返回json数据
//        $json=json_encode($result);
//        echo $json;die;


        return view('my/index',['arr'=>$result]);

    }

    /**
     * 作用：身份证上传显示页面
     */
    public function getLists(){
        echo session('key');die;

        $phone=Request::get('phone');
         return view('my/upload');
    }



















    /**
     * 作用：接受图片的信息
     */
    public function anyAaa()
    {
        $file = Input::file('filename');
        print_r($file);
    }

}
