<?php

namespace App\Http\Controllers\my;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;
header("content-type:text/html;charset=utf-8");
class Mycontroller extends Controller
{
    public function anyIndex(){
        $result=DB::table('school')->get();
        return view('my/index',['arr'=>$result]);


    }
    public function anyLists()
    {
       echo "我是列表";
    }
}
