<?php

namespace App\Http\Controllers\my;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
//use Illuminate\Http\Request;
//use App\Http\Requests;
use Faker\Provider\File;
use Request,get,post;
use DB;
header("content-type:text/html;charset=utf-8");
class Mycontroller extends Controller
{
    /**
     * User: 王晓军
     * Date: 2016/9/21
     * Time: 15:25
     * 作用：登录成功后，点击我的按钮，根据登录传过来的手机号查找用户
     *       显示登录用户的信息
     */
    public function anyIndex(){
        $phone=Request::get('phone');
        $result=DB::table('user')->where(['user_tel'=>$phone])->first();
        //json数据
//        echo json_encode($result);die;
        return view('my/index',['arr'=>$result]);


    }



    /**
     * User: 王晓军
     * Date: 2016/9/21
     * Time: 15:25
     * 作用：身份证上传显示页面
     */
    public function getLists()
    {
        $phone=Request::get('phone');
        return view('my/upload');
    }


    /**
     * User: 王晓军
     * Date: 2016/9/21
     * Time: 15:25
     * 作用：接受图片的信息
     */
    public function anyAaa(){
        $file = Input::file('filename');
        print_r($file);
    }

}
