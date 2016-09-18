<?php
header("content-type:text/json;charset:utf-8;");
$json=<<<END


<!-- travel note start -->

<div class="pt40">
	<div class="eqa_wrapper bd_color_gray wq_scroll_part_top">
		<div class="title_wrapper">
			<h2 class="eqa_title font_size18 font_color_black">相关游记</h2>
			<span class="font_color_gray font_size12">&nbsp;&nbsp;0篇游记&nbsp;&nbsp;&nbsp;&nbsp;</span>
			<a href="#/help-center#getCoupon" class="note_comment_link" target="blank">写游记即送优惠券，最高减500！</a>
		</div>
		<ul class="note_list">


		</ul>
		<div class="pagination_wrapper">
			<a id="note-prev" href="javascript:;" name="cmt-prev" class="prev_page_btn"></a>
			<span class="current_page font_size14 font_color_gray"><span id="note-cur-page" name="cur-page">1</span>/<span id="note-total-page" name="total-page">1</span></span>
			<a id="note-next" href="javascript:;" name="cmt-next" class="next_page_btn"></a>
		</div>
	</div>
</div>

<!-- travel note end -->

END;
$json=iconv("GB2312","UTF-8//IGNORE",$json);
echo $json;
