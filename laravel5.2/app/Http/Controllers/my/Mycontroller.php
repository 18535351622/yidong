<?php

namespace App\Http\Controllers\my;
use App\Http\Controllers\Controller;

//use Illuminate\Http\Request;
//use App\Http\Requests;
use Request,get,post;
use DB;
header("content-type:text/html;charset=utf-8");
class Mycontroller extends Controller
{
    public function anyIndex(){

        $result=DB::table('school')->get();
        return view('my/index',['arr'=>$result]);


        //将通过APP传过来的手机号进行查找


    }
    public function getLists()
    {
        $phone=Request::get('phone');
        echo $phone;die;
        print_r($phone);die;
        echo "我是列表";
    }
}
