<?php

require_once 'App.php';

class Page_Ajax_Basic_Api_Select extends App_Page
{
    private $itemList;
    
    public function onInject()
    {
        $this->_resource = BEAR::dependency('BEAR_Resource');
        $this->_ajax = BEAR::dependency('BEAR_Page_Ajax');
        $this->injectArg('limit',$_POST['limit'], 20);
    }

    public function onInit(array $args)
    {
        $values = ['limit' => $args['limit']];
        $params = array(
            'uri' => 'Item',
            'values' => $values
        );
        $this->itemList = $this->_resource->read($params)->getBody();
    }

    public function onOutput()
    {
        $this->_ajax->addAjax('json',$this->itemList);
        $this->output('ajax');
    }
}

App_Main::run('Page_Ajax_Basic_Api_Select');
