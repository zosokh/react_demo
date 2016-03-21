<table>
    <tr>
        <td>Id</td>
        <td>Title</td>
        <td>CreatedAt</td>
    </tr>
    <!-- ここから、posts配列をループして、投稿記事の情報を表示 -->
    {foreach from=$body item=post}
    <tr>
        <td>{$post.id}</td>
        <td><a href="item.php/?id={$post.id}">{$post.title}</a></td>
        <td>{$post.created|date_format:"%Y/%m/%d %H:%M"}</td>
    </tr>
    {foreachelse}
    <tr>
        <td colspan="3">No posts found</td>
    </tr>
    {/foreach}
</table>

<!-- <div onclick="do_hastle()">
  <p>てすと</p>
  <h2>Click <a href="ajax/resource/delete.php" rel="ajax">Run - Resource</a><br /></h2>
</div>
<pre style="text-align: left;margin: 0px 0px 10px 0px; display: block; background: white; color: black; border: 1px solid #cccccc; padding: 5px; font-size: 12px; "><span style='color: #660000;'>$args</span> = <span style='color:black'>array</span><br>(<br><span style='color:#eeeeee;'>|</span> &nbsp;&nbsp; ['form'] = <span style='color:#a2a2a2'>(string)</span> <span style='color:green'>'test'</span><br>)<br>&nbsp;&nbsp;in <span style="color:gray"><a style="color:gray; text-decoration:none;" target="_blank" href=/__panda/edit/?file=/var/www/html/app/bear.sample/htdocs/ajax/resource/delete.php&line=17>/var/www/html/app/bear.sample/htdocs/ajax/resource/delete.php</a></span> on line 17 (Page_Ajax_Basic_Ajax_Resource_Delete::onInit)</pre> -->



<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="/js/ajacx.js"></script>
