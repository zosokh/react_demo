<?php

require_once 'App.php';

class Page_Index extends App_Page
{
    const DEFAULT_LIMIT = 20;
    public function onInject()
    {
        $this->_resource = BEAR::dependency('BEAR_Resource');
        $this->injectGet('limit', 'limit', 20);
    }

    public function onInit(array $args)
    {
        $values = ['limit' => $args['limit']];
        $params = array(
            'uri' => 'Item',
            'values' => $values
        );
        $itemList = $this->_resource->read($params)->getBody();
        $this->set('itemList', $itemList);
    }

    public function onOutput()
    {
        $this->display('index.tpl');
    }
}

App_Main::run('Page_Index');
