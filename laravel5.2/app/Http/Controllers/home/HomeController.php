<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;
use App\api\functions;
use App\Http\Requests;
use DB;
use App\Http\Controllers\Controller;
header("content-type:text/html;charset=utf-8");
class HomeController extends Controller
{
    //展示六条大学数据
    public function anyIndex()
    {
        $users = DB::table('school')->limit(6)->get();
        echo functions::success($users);



        //print_r($users);exit();
//        $res = array();
//        foreach($users as $k => $v)
//        {
//            $str2 = [
//                'school_name'=>$v['school_name'],
//                'school_badge'=>$v['school_badge'],
//                'school_desc'=>$v['school_desc'],
//                'school_id'=>$v['school_id']
//            ];
//            //print_r($res[][$str]);die;
//            $str = $v['school_name'].','.$v['school_badge'].','.$v['school_desc'].','.$v['school_id'];
//            //echo $str;die;
//            unset($v['school_name']);
//            unset($v['school_badge']);
//            unset($v['school_desc']);
//            unset($v['school_id']);
//            if( !isset($res[$str]) )
//            {
//                $res[$str]['cur'][] = $v;
//            }
//            else
//            {
//                $res[$str]['cur'][] = $v;
//            }
//            //print_r($res);
////            $arr = array();
////            foreach($res as $ke => $va)
////            {
////
////            }
//
//        }
//        $res = array_values($res);
//        foreach( $res as $k => $v )
//        {
//                $res[$k]=123;
//        }
//
//
//
//        print_r($res);



        //print_r($res);
//        print_r($users);
//        exit;
//        $num = count($users);
//        $newData = [];
//        for($i=0;$i<$num;$i++){
//            if(!in_array($users[$i]['school_name'],$newData)){
//                $newData[$users[$i]['school_name']][] = $users[$i];
//            }
//            if($i<$num-2){
//                if($users[$i]['school_name'] == $users[$i+1]['school_name'] ){
//                    $newData[$users[$i]['school_name']][] = $users[$i+1];
//                    $i+=2;
//                }
//            }
//        }
    }

    //显示所有大学的数据
    public function anyShow(){
        $arr=DB::table('school')->get();

        $data= json_encode($arr);
    }

    //点击大学展示 大学简介和大学课程
    public function anyDetails(){
        $id=$_GET['id'];
        if(empty($id)){
            $users = DB::table('school')
                ->join('course', 'course.school_id', '=', 'school.school_id')
                ->where('course.school_id',$id)
                ->get();
            echo functions::success($users);die();

        }else{
            echo functions::failure('1','现在还有没具体内容  敬请期待!!!');
        }


    }
}
