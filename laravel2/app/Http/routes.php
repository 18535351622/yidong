<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

// Route::group(['middleware' => ['web']], function () {
//     //
// });

//前台的路由
Route::get('/','desk\Indexcontroller@index');
Route::get('login','desk\Indexcontroller@login');
Route::get('route','desk\Indexcontroller@route');
Route::get('travel','desk\Indexcontroller@travel');
Route::get('xingcheng','desk\Indexcontroller@xingcheng');
Route::get('lingdui','desk\Indexcontroller@lingdui');
Route::any('dologin','desk\Indexcontroller@dologin');
Route::any('fff','desk\Indexcontroller@fff');
Route::any('aouth','desk\Indexcontroller@aouth');
//地区
Route::any('area','desk\Indexcontroller@area');
//地区详情
Route::any('arealist','desk\Indexcontroller@arealist');
//定制*包团
Route::any('baotuan','desk\Indexcontroller@baotuan');
//包团添加
Route::any('bao_add','desk\Indexcontroller@bao_add');
//周边游
Route::any('zhoubian','desk\Indexcontroller@zhoubian');
Route::any('zhoubian_list','desk\Indexcontroller@zhoubian_list');
//第三方登录
Route::any('qq1','desk\Indexcontroller@qq1');

//后台的路由
Route::get('admin','admin\Logincontroller@index');
Route::get('way','admin\Logincontroller@way');
Route::get('travels','admin\Logincontroller@travels');
Route::get('travels_add','admin\Logincontroller@travels_add');
Route::get('vip','admin\Logincontroller@vip');
Route::get('type','admin\Logincontroller@type');

//添加省份
Route::get('type_sheng','admin\Logincontroller@type_sheng');
Route::any('type_sheng1','admin\Logincontroller@type_sheng1');


Route::get('waylist','admin\Logincontroller@waylist');
Route::any('type_add','admin\Logincontroller@type_add');
//旅游城市的添加
Route::any('type_add2','admin\Logincontroller@type_add2');
//提示页面    没用到
Route::any('tishi','admin\Logincontroller@tishi');
//会员的添加
Route::any('vip_add','admin\Vipcontroller@vip_add');
Route::any('vip_add1','admin\Vipcontroller@vip_add1');




