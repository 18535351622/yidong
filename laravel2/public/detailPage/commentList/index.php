<?php
header("content-type:text/html;charset:utf-8;");
$json=<<<END



<div class="pt40">
    <div class="eqa_wrapper bd_color_gray wq_scroll_part_top">
        <div class="title_wrapper">
            <h2 class="eqa_title font_size18 font_color_black">�û�����</h2>
            <span class="font_color_gray font_size14">&nbsp;&nbsp;����12λ�ο͵���ʵ����</span>

            <a href="http://bbs.woqu.com/forum/thread/collection/BU122AC15" class="note_comment_link"
               target="blank">�鿴ȫ������</a>
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

                            <p class="content">������������Ȫ��ͥspa �ܲ�����ʮ��Ǯ�ļ�ͥspa�ڹ������Ҳ�����ô���������ˡ���Ϊ��Ԥ�����������������ģ���������³�߶����һ�죬һ�Ҵ�С��ȥ�ҳԵģ�������ȥ��һ���ཬԡ��
                                <a target="_blank" href="http://bbs.woqu.com/thread/360">�鿴����</a>
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

                            <p>����Ӣ</p>
                        </div>
                        <div class="user_content">
                            <i></i>
                            <h4 class="font_size14"></h4>

                            <p class="content">һ���˶������� ������������ ��Ȼ���� ������Ŀ�� С����Ҳ�ܶ� �ص����ڶ��ӻ������ ������ʲôʱ����ȥ лл��Ȥ�����ķ���ɣ�ǩ֤Ҳ�����������ģ�һ�Ҵ�С��ǩ֤�������ۻ��ˣ������С�������ķ���
                                <a target="_blank" href="http://bbs.woqu.com/thread/504">�鿴����</a>
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

                            <p>����</p>
                        </div>
                        <div class="user_content">
                            <i></i>
                            <h4 class="font_size14"></h4>

                            <p class="content">����ų�ס�������⡣���㶼�ݺ��档ë���Ļ���ĵ�����Ȫ��׳���ˡ�
                                <a target="_blank" href="http://bbs.woqu.com/thread/653">�鿴����</a>
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

                            <p>С����</p>
                        </div>
                        <div class="user_content">
                            <i></i>
                            <h4 class="font_size14"></h4>

                            <p class="content">�ܰ���
                                <a target="_blank" href="http://bbs.woqu.com/thread/784">�鿴����</a>
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

                            <p>С����</p>
                        </div>
                        <div class="user_content">
                            <i></i>
                            <h4 class="font_size14"></h4>

                            <p class="content">���ı���֮�á�����
                                <a target="_blank" href="http://bbs.woqu.com/thread/816">�鿴����</a>
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
