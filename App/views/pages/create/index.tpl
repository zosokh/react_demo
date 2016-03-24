<div class="container-fluid">
  {include file='elements/nav.tpl'}
    
    <div id="wrapaper">
        <div class="row" style="margin-bottom:30px;">
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
                        {$form._submit.html}
                    </div>
                    {$form.hidden}

                </form>

            </div>

        </div><!-- row -->
    </div><!-- wrapaper -->
</div><!-- container-fluid -->
