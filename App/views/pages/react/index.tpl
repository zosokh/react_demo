{* <body > *}
    <div class="container-fluid">
        {include file='elements/nav.tpl'}
        <div id="wrapaper">
            <div id="header">

                <div class="page-header hero-head" style="border-bottom:1px solid #CCC;">
                    <div class="title">
                        <h4>SAMPLE SITE</h4>
                    </div>
                    <div class="head_btn">
                        <a href="/create"><button type="button" class="btn btn-danger">新規登録</button></a>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="itemlist_h1">
                    <h1>ITEM LIST</h1>
                </div>
                {foreach from=$itemList key=k item=v}
                  {if ($k%4 == 0 )}
                    <div class="row" style="margin-bottom: 30px;">
                  {/if}
                <div class="col-md-3 col-sm-6" style="background-color: #FFF;">
                      <div class="thumbnail ">
                        <div class="item_imgbox">
                            <img class="img-rounded img-responsive" src="{$v.img}" alt="">
                        </div>
                        <div class="caption">
                          <h4>{$v.name}</h4>
                          <p>{$v.comment}</p>
                        </div>
                      </div>
                </div>
                {if ((($k+1)%4 == 0) || (count($ITEMS) == $k+1))}
                  </div>
                {/if}
                {/foreach}

            </div>
            <div id="footer">
                <div class="jumbotron black_footer">
                </div>
            
            </div>

        </div>
    </div>


{* </body> *}
