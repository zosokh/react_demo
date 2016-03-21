<?php
class App_Form_Post extends BEAR_BAse
{
    public function onInject()
    {
    }

    public function build(array $defaults = array())
    {
        $form = BEAR::factory('BEAR_Form', [
          'formName' => 'form',
          'adapter' => BEAR_Form::RENDERER_SMARTY_ARRAY
          ]);
        $form->setDefaults($defaults);
        $form->addElement('text', 'name', '商品名', 'size=30 maxlength=30 class="form-control" placeholder="商品名"');
        $form->addElement('textarea', 'comment', '商品説明', 'cols=30 rows=10 class="form-control" placeholder="商品説明"');
        $form->addElement('text', 'price', '商品名', 'size=10 maxlength=10 class="form-control" placeholder="価格"');
        $form->addElement('text', 'img', '画像', 'size=30 maxlength=300 class="form-control" placeholder="画像パス"');
        // フィルタと検証ルール
        $form->applyFilter('__ALL__', 'trim');
        $form->applyFilter('__ALL__', 'strip_tags');
        $form->addRule('name', '商品を入力してください', 'required');
        $form->addRule('comment', '商品説明を入力してください', 'required');
        $form->addRule('price', '価格を入力してください', 'required');
        $form->addElement('submit', '_submit', '登録する', 'class="btn btn-danger btn-lg"');    
    }
}
