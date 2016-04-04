<div class="container-fluid">
    {include file='elements/nav.tpl'}
    <div id="wrapaper">
        <div class="row">
          <div class="hero-head">
              <h3 class="title">ITEM LIST</h3>
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
            {if ((($k+1)%4 == 0) || (count($itemList) == $k+1))}
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
