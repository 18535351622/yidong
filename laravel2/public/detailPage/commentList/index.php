<?php
header("content-type:text/html;charset:utf-8;");
$json=<<<END



<div class="pt40">
    <div class="eqa_wrapper bd_color_gray wq_scroll_part_top">
        <div class="title_wrapper">
            <h2 class="eqa_title font_size18 font_color_black">用户点评</h2>
            <span class="font_color_gray font_size14">&nbsp;&nbsp;来自12位游客的真实感受</span>

            <a href="http://bbs.woqu.com/forum/thread/collection/BU122AC15" class="note_comment_link"
               target="blank">查看全部点评</a>
        </div>
        <ul class="comment_list">

                <li class="comment_item">
                    <div class="comment_content">
                        <div class="user_avatar">
                            <img src="//www.quimg.com/fixed/img/community/userhead/common_bright_100x100.png" width="60" height="60">

                            <p>Helen</p>
                        </div>
                        <div class="user_content">
                            <i></i>
                            <h4 class="font_size14"></h4>

                            <p class="content">波利尼西亚温泉家庭spa 很不错！几十块钱的家庭spa在国内是找不到这么好质量的了。因为多预留两天留在新西兰的，就在罗托鲁瓦多呆了一天，一家大小出去找吃的，还重新去了一次泥浆浴。
                                <a target="_blank" href="http://bbs.woqu.com/thread/360">查看更多</a>
                            </p>

                            <p class="comment_time date">
                                2015-05-23

                            </p>

                        </div>
                    </div>

                </li>

                <li class="comment_item">
                    <div class="comment_content">
                        <div class="user_avatar">
                            <img src="//www.quimg.com/fixed/img/community/userhead/common_bright_100x100.png" width="60" height="60">

                            <p>毕瑞英</p>
                        </div>
                        <div class="user_content">
                            <i></i>
                            <h4 class="font_size14"></h4>

                            <p class="content">一家人都很满意 爱死新西兰了 自然风光好 娱乐项目多 小动物也很多 回到国内儿子还念念不忘 问妈妈什么时候再去 谢谢我趣的耐心服务吧，签证也是在这里做的，一家大小的签证办下来累坏了，多亏了小燕子耐心服务。
                                <a target="_blank" href="http://bbs.woqu.com/thread/504">查看更多</a>
                            </p>

                            <p class="comment_time date">
                                2015-05-07

                            </p>

                        </div>
                    </div>

                </li>

                <li class="comment_item">
                    <div class="comment_content">
                        <div class="user_avatar">
                            <img src="//www.quimg.com/fixed/img/community/userhead/tent_100x100.png" width="60" height="60">

                            <p>龚北</p>
                        </div>
                        <div class="user_content">
                            <i></i>
                            <h4 class="font_size14"></h4>

                            <p class="content">这个团吃住都很满意。景点都狠好玩。毛利文化村的地热喷泉老壮观了。
                                <a target="_blank" href="http://bbs.woqu.com/thread/653">查看更多</a>
                            </p>

                            <p class="comment_time date">
                                2015-04-19

                            </p>

                        </div>
                    </div>

                </li>

                <li class="comment_item">
                    <div class="comment_content">
                        <div class="user_avatar">
                            <img src="//www.quimg.com/fixed/img/community/userhead/hill_100x100.png" width="60" height="60">

                            <p>小河马</p>
                        </div>
                        <div class="user_content">
                            <i></i>
                            <h4 class="font_size14"></h4>

                            <p class="content">很棒！
                                <a target="_blank" href="http://bbs.woqu.com/thread/784">查看更多</a>
                            </p>

                            <p class="comment_time date">
                                2015-03-25

                            </p>

                        </div>
                    </div>

                </li>

                <li class="comment_item">
                    <div class="comment_content">
                        <div class="user_avatar">
                            <img src="//www.quimg.com/fixed/img/community/userhead/common_bright_100x100.png" width="60" height="60">

                            <p>小河马</p>
                        </div>
                        <div class="user_content">
                            <i></i>
                            <h4 class="font_size14"></h4>

                            <p class="content">愉快的北岛之旅。。。
                                <a target="_blank" href="http://bbs.woqu.com/thread/816">查看更多</a>
                            </p>

                            <p class="comment_time date">
                                2015-03-18

                            </p>

                        </div>
                    </div>

                </li>


        </ul>
        <div class="pagination_wrapper">
            <a id="cmt-prev-id" href="javascript:" name="cmt-prev" class="prev_page_btn"></a>
            <span class="current_page font_size14 font_color_gray">
                <span id="cmt-cur-page" name="cur-page">1</span>/
                <span id="cmt-total-page" name="total-page">3</span>
            </span>
            <a id="cmt-next-id" href="javascript:" name="cmt-next" class="next_page_btn"></a>
        </div>
    </div>
</div>

<!-- new comment section end -->

END;
$json=iconv("GB2312","UTF-8//IGNORE",$json);
echo $json;
