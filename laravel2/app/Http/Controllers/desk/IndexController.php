<?php
namespace App\Http\Controllers\desk;
use App\Http\Controllers\Controller;
use DB;
use App\api\API;
use Request;
use Session;

header("content-type:text/html;charset=utf-8");
class IndexController extends ComController
{
        public  function __construct(){
            session_start();
        }


    /*
     * 项目首页
     * */
    public function index()
    {
        if(isset( $_SESSION['username'])){
           $data['username']=$_SESSION['username'];
        }else{
           $data['username']='';
        }
        $arr=DB::table('images')->get();
        $arr1=DB::table('region')->get();
        //首页
        $arr3=DB::table('show')->get();
        //周边游
        $arr4=DB::table('privilege')->get();
        $data['arr1']=$this->set($arr1,$pid=0);
        //周边游子类
        $data['arr4']=$this->set1($arr4,$pid=0);
       // var_dump($data);die;
        $data['arr2']=$arr;
        $data['arr3']=$arr3;
 //print_r($data);die;
        return view('desk.index',$data);
    }
     //左侧导航栏
      function set($category,$pid=0){
        $result=array();
        foreach($category as $k=>$v){
            if($v['parent_id']==$pid){
                $result[$k]=$v;
                $result[$k]['son']=$this->set($category,$v['region_id']);
            }
        }
        return $result;
    }
    /*
     * 周边游子类
     * */
    function set1($category,$pid=0){
        $result=array();
        foreach($category as $k=>$v){
            if($v['fid']==$pid){
                $result[$k]=$v;
                $result[$k]['son']=$this->set1($category,$v['pid']);
            }
        }
        return $result;
    }
    /*
    周边游详情
     */
    function zhoubian(){
        $arr=DB::table('tourism')->get();
        $arr1=DB::table('privilege')->get();
        $data['arr1']=$this->set2($arr1,$pid=0);
        $data['arr2']=$arr;
        //var_dump($data);die;
        return view('desk.zhoubian',$data);
    }
      function set2($category,$pid=0){
        $result=array();
        foreach($category as $k=>$v){
            if($v['fid']==$pid){
                $result[$k]=$v;
                $result[$k]['son']=$this->set2($category,$v['pid']);
            }
        }
        return $result;
    }
    //周边游购买页
    function zhoubian_list(){
         $id=$_GET['t_id'];
         //print_r($id);die;
        $arr=DB::table('tourism')->where('t_id', '=', $id)->get();
        return view('desk.zhoubianlist',['arr'=>$arr]);
    }
 
    //地区页面
    public function area(){
        // $arr=DB::table('region')->get();
        // $data['arr']=$this->set1($arr1,$pid=0);
        // //var_dump($arr1);die;
        return view('desk.xingcheng1');
    }
 
    //地区详情
      public function arealist(){
        $id=$_GET['id'];
        //var_dump($id);die;
        $show=DB::table('region')->where('region_id', '=', $id)->get();
        //var_dump($show);die;
        return view('desk.tour',['show'=>$show]);
    }

    /*
     *米友游记
     */
    function travel(){
        $arr1=DB::table('region')->get();
        $data['arr1']=$this->set($arr1,$pid=0);
       return view('desk.travel',$data);
    }

    /*
     * 活动行程
     */
    function xingcheng(){
        $arr1=DB::table('region')->get();
        $data['arr1']=$this->set($arr1,$pid=0);
        return view('desk.xingcheng',$data);
    }

    /*
     * 定制包团
     */
    function baotuan(){
        $show=DB::table('tour_region')->where('parent_id', '=', 0)->get();
        //var_dump($show);die;
        return view('desk.intent',['show'=>$show]);
    }
    /*
    定制包团添加
     */
    function bao_add(){
        $arr=$_POST;
        unset($arr['ls']);
        var_dump($arr);die;
     DB::table('baotuan')->insert($arr);
    }
    /*
  * 活动行程页面
  * */
    function route(){
        return view('desk.route');
    }



    /*
     * 登陆界面
     * */
    function login(){
        return view('desk.login');
    }
    /*
     * 登录接受数据
     */
    function dologin(){
        $arr=Request::all();
        $user_name=$arr['username'];
        $user_psd=$arr['pwd'];
        $url = API::getApiUrl('login/');
        $param = [
            'user_name' => $user_name,
            'user_psd' => $user_psd
        ];
        $api_result = CurlPost($url, $param);
        // print_r($api_result);die;
      
        if ($api_result['status'] == 0) {
           // $request->session()->put('user_info', $api_result['data']);
           // session(['user_info' => $api_result['data'] ]);
            //登录令牌
            $u_token=md5(rand(1000,9999));
            //存入token
            // $user_name=$_GET['user_name'];
            // $user_psd=$_GET['user_psd'];
            // echo $user_name;die;
            $re=DB::update("UPDATE user set u_token = '$u_token' WHERE user_name='$user_name' and user_psd='$user_psd' ");
            // var_dump($re);die;
            $_SESSION['username']=$user_name;
            $_SESSION['u_token']=$u_token;
            echo "1";
        } else {
            echo $api_result['msg'];
        }

    }


 /*
    第三方登陆
     */
  function qq1(){
    //echo 123;die;
   include 'qq/open51094.class.php';

    $open = new \open51094();
    $code = $_GET['code'];
    $arr=$open->me($code);
    //$only=$arr['uniq'];
   //print_r($arr);die;
    if($arr){
        $only=$arr['uniq'];
        $list=DB::table('qq')->where(['uniq'=>$only])->first();
        if($list){
            return redirect('/');
        }else{
            return redirect('fair');
        }
        
    }else{
       $user=DB::table('qq')->insert($arr);
    }
    
 }

}



?>