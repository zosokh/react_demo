<?php

require_once 'App.php';

class Page_Ajax_Basic_Api_Create extends App_Page
{
    private $result;
    private $itemList;
    
    public function onInject()
    {
        $this->_resource = BEAR::dependency('BEAR_Resource');
        $this->_ajax = BEAR::dependency('BEAR_Page_Ajax');
        $this->injectArg('name',$_POST['name']);
        $this->injectArg('img',$_POST['img'], null);
        $this->injectArg('comment',$_POST['comment']);
        $this->injectArg('price',$_POST['price']);
    }

    public function onInit(array $args)
    {
        $submit = [
          'name' => $args['name'],
          'img' => $args['img'],
          'comment' => $args['comment'],
          'price' => $args['price']
        ];
        $params = [
            'uri' => 'Item',
            'values' => $submit
        ];
        $result = $this->_resource->create($params)->request();
        $this->itemList = $submit;
    }

    public function onOutput()
    {
        $this->_ajax->addAjax('json', [
          'result' => $this->result,
          'item' => $this->itemList
        ]);
        $this->output('ajax');
    }
}

App_Main::run('Page_Ajax_Basic_Api_Create');
?>
