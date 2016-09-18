<?php
namespace App\api;
class API
{

    /**
     * 根据配置获取对应的接口地址
     * @param string $conf
     * @return string
     */
    public static function getApiUrl( $conf = '' ){
        //获取配置文件的配置
        $api_conf = include LARAVEL_ROOT_PATH . '/app/api/config.php';
        //获取接口的地址
        $api_host = $api_conf['api_host'];
        //获取接口的列表
        $api_list = $api_conf['api_list'];
        //获取$conf对应的方法
        $api_method = empty($api_list[$conf]) ? '' : $api_list[$conf];
        return $api_host . $api_method;
    }


}