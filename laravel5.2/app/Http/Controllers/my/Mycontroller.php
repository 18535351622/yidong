<?php

namespace App\Http\Controllers\my;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class Mycontroller extends Controller
{
    //
    public function anyIndex()
    {
        echo "我是我的模块";
        // return redirect('my/my/lists');
    }
    public function anyLists()
    {
       echo "我是列表";
    }
}
