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

/**
 * 注册模块路由
 */
Route::any('sign','sign\LoginController@index');
Route::post('phone_add','sign\LoginController@phone_add');
//测试展示
Route::get('bbb','sign\LoginController@bbb');

/**
 * 登录模块路由
 */
Route::any('login','login\LoginController@index');
Route::any('phone_login','login\LoginController@phone_login');
//测试展示
Route::any('ceshi','login\LoginController@ceshi');


/**
 *我的资料
 */
Route::any('datum','datum\LoginController@index');
Route::any('datum_add','datum\LoginController@datum_add');

Route::any('datum_list','datum\LoginController@datum_list');




/**
 * 我的模块路由
 */
Route::group(['prefix' =>'my','namespace'=>'my'], function () {
    Route::controller('my','MyController');
});

/**
 * 首页模块路由
 */
Route::group(['prefix' =>'home','namespace'=>'home'], function () {
    Route::controller('home','HomeController');
});

/**
 * 学习模块路由
 */


Route::group(['namespace' => 'study'], function () {

        Route::controller('study', 'StudyController');
    });

