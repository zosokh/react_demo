<body >

    <div class="container-fluid">
        
        <div id="wrapaper">
            <div id="header">

                <div class="page-header " style="border-bottom:1px solid #CCC;">
                    <div class="title">
                        <h4>EC SITE - アイテム新規追加</h4>
                    </div>
                </div>
            </div>

            <div class="row" style="margin-bottom:30px;">
                <div style="text-align:right;" class="col-md-12 col-sm-12">
                  <a href="index.php" class="btn btn-success">管理トップへ</a>　
                </div>

                {if !empty($form.errors)}
                {foreach from=$form.errors item=error}
                  <div style="text-align:center;">
                      <span style='color:#FF0000;' class=\"error\">{$error}</span>
                  </div>
                {/foreach}
                {/if}


                <div style="text-align:center; margin-top:20px;" class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                    <form {$form.attributes}>

                        <div style="margin-top:20px;">
                            {$form.name.html}
                        </div>

                        <div style="margin-top:20px;">
                            {$form.comment.html}
                        </div>
                        
                        <div style="margin-top:20px;">
                            {$form.img.html}
                        </div>

                        <div style="margin-top:20px;">
                            {$form.price.html}
                        </div>
                        
                        <div style="margin-top:20px;">
                            {* <input class="btn btn-danger btn-lg" type="submit" name="submit" value="追加！！"> *}
                            {$form._submit.html}
                        </div>
                        {$form.hidden}

                    </form>

                </div>

            </div><!-- row -->
        </div><!-- wrapaper -->
    </div><!-- container-fluid -->


</body>
