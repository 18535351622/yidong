<?php

namespace App\Http\Controllers\study;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\api\functions;


class StudyController extends Controller
{
    /***
     * 根据学校和专业查询出对应下的所有课程
     * @return json
     */
    public function anyIndex()
    {
        $res1 =DB::table('course')
            //->groupBy('school.school_name')
            ->join('course_type','course.type_id','=','course_type.type_id')
            ->join('school','course.school_id','=','school.school_id')
            ->select('course.*', 'school.school_name', 'course_type.type_name')
            ->get();

        /**
         * 处理数组
         * 1、定义一个空的数组
         * 2、第一次循环过来判断 以学校和专业组成的下标  在定义的数组中是否设置
         * 3、如果没有设置就设置定义数组的下标 并把这次循环过来的一维数组写入这个下标
         * 4、第二次再过来的时候还是判断所定义的下标是否存在  如何不存在就继续执行第三步 如果存在就把这个遍历的一维数组装入这个下标中
         * 5、这样就可以组成一个新的数组  并且可以吧数组中的相同学校和专业下的可以放入一个相同下标的数组中 方便处理
         */
        $res = array();
        foreach($res1 as $item)
        {
            if(! isset($res[$item['school_name'].'.'.$item['type_name']]))
            {
                $res[$item['school_name'].'.'.$item['type_name']][] = $item;
            }
            else
            {
                $res[$item['school_name'].'.'.$item['type_name']][] =  $item;
            }

        }

        // if(!empty($res))
        // {
        //     $data = functions::success($res);
        //     // $data = json_decode($data,true);

        //     echo $data;
        // }
        // else
        // {
        //      echo functions::failure('','没有数据');
        // }
        // session(['user'=>'张三']);

        //print_r($res);die;
        //print_r(array_values($res));die();
        echo functions::success($res);
        //return view('study/index',['data'=>$res]);
    }

    /**
     * 根据表单传过来的课程id查询出课程的目录信息接口
     * @param $id
     * return array()
     */
    public function anyLists($id)
    {
        
        $course_info = DB::table('list')
            ->where('course_id',$id)
            ->get();
        //print_r($course_info);die();
        if(!empty($course_info))
        {
            $course_info = functions::getList($course_info);
            echo functions::success($course_info);die();
            //return view('study.lists',['data'=>$course_info]);
        }
        else
        {
            echo functions::failure('1','现在还有没具体内容  敬请期待!!!');

            //echo "现在还有没具体内容  敬请期待!!!";
        }
        //return $course_info;
    }

    /***
     * 查询课程目录下对应的课程详情
     * @param $id
     * return array();
     */
    public function getListinfo( $id )
    {
        //echo $id;die;
        $res =DB::table('data')
            ->where('list_id',$id)
            ->first();

        if(empty( $res ))
        {
            return back();
        }
        else
        {
            echo functions::success($res);
            //return view('study/list_info',['data'=>$res]);
        }

    }


   


}
