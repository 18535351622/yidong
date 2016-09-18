<?php
namespace App\Http\Controllers\admin;
use App\Http\Controllers\Controller;
use DB;
use Request;

header("content-type:text/html;charset=utf-8");
class LoginController extends Controller{
    /*
     * 后台首页
     */
    function index(){
        return view('admin.index');
    }
    /*
     * 路线管理
     */
    function way(){
        return view('admin.way');
    }
    /*
     * 添加线路
     */
    function waylist(){
        return view('admin.waylist');
    }

    /*
     * 游记管理的主页面
     */
    function travels(){
        return view('admin.travels');
    }
    /*
     * 添加游记
     */
    function travels_add(){
        return view('admin.travels_add');
    }

    /*
     * 会员展示页面
     */
    function vip(){
        return view('admin.vip');
    }

    /*
     * 分类管理
     */
    function type(){
        $arr=DB::table('region')->get();
        $arr1=$this->set($arr,$pid=0,$levle=0);
        return view('admin.type',['arr'=>$arr1]);
    }
    /*
     * 添加省份
     */
    function type_sheng(){return view('admin.type_sheng');}
    function type_sheng1(){
       $arr=Request::all();
        $region_name=$arr['region_name'];
        if($region_name==''){
            echo "<script>alert('请输入旅游省份名称');location.href='type_sheng'</script>";die();
        }
        $data=DB::table('region')->where(['region_name'=>$region_name])->first();
       if($data){
           echo "<script>alert('已有此分类');location.href='type_sheng'</script>";
       }else{
           $arr=DB::table('region')->insert(
               [
                   'parent_id'=>0,
                   'region_name'=>$region_name
               ]
           );
           if($arr){
               echo "<script>alert('Your information added successfully');location.href='type'</script>";
           }else{
               echo "<script>alert('Sorroy，Add information failed ')</script>";
           }
       }

    }


   /*
    * 左侧导航栏
    */
    function set($arr,$pid=0,$levle=0){
        static $data=array();
        foreach($arr as $v){
            if($v['parent_id']==$pid){
                $v['levle']=$levle;
                $data[]=$v;
                $this->set($arr,$v['region_id'],$levle+1);
            }
        }
        return $data;

    }


    /*
     * 旅游分类添加
     */
    function type_add(){
        $arr=DB::table('region')->where(['parent_id'=>0])->get();
        return view('admin.type_add',['user'=>$arr]);
    }

    /*
     * 旅游城市景区添加
     */
    function type_add2(){
        $data=Request::all();
        $parent_id=$data['parent_id'];
        $region_name=$data['region_name'];
        $data=DB::table('region')->where(['region_name'=>$region_name])->first();
        if($data){
            echo "<script>alert('已有此分类');location.href='type_add'</script>";
        }else{
            $arr=DB::table('region')->insert(['parent_id'=>$parent_id,'region_name'=>$region_name]);
            if($arr){
                echo "<script>alert('Your information added successfully');location.href='type_add'</script>";
            }else{
                echo "<script>alert('Sorroy，Add information failed ');location.href='type_add'</script>";
            }
        }

    }


  /*
   *提示界面
   */
    function tishi(){
        return view('admin.tishi');
    }

}


?>