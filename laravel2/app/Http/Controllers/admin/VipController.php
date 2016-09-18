<?php
namespace App\Http\Controllers\admin;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use DB;
use Request;

header("content-type:text/html;charset=utf-8");
class VipController extends Controller{
    /*
     * 会员的添加
     */
    public function vip_add(){
        return view('vip.add');
    }

    /*
     * 会员添加接受数据
     */
    function vip_add1(){
        $file = Input::file('filename');    //接受文件的信息
        $clientName = $file -> getClientOriginalName();   //文件的名字
        $type = $file -> getClientOriginalExtension();    //文件的类型
        $newName = md5(date('ymdhis').$clientName).".".$type;  //文件的新名字

        $path="vipuploads/";
        if(!is_dir($path)){
            mkdir($path,777,true);
        }
        $path1=$path.$newName;                   //图片入库的路径
        $path = $file->move($path,$newName);    //移动文件
        //接受表单的其他数据
        $arr=Request::all();
        $arr1=DB::table('vip_img')->insert(
            [
                'username'=>$arr['username'],
                'email'=>$arr['email'],
                'phone'=>$arr['phone'],
                'nickname'=>$arr['nickname'],
                'sex'=>$arr['sex'],
                'birthday'=>$arr['birthday'],
                'vip_img'=>$path1,
                'address'=>$arr['address']
            ]
        );






    }

}


?>


















