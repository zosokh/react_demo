<?php

require_once 'App.php';

class Page_Index extends App_Page
{
    public function onInject()
    {
        $this->_resource = BEAR::dependency('BEAR_Resource');
        $this->injectGet('limit', 'limit', 20);
    }

    public function onInit(array $args)
    {
        $this->set('limit', $args['limit']);
    }

    public function onOutput()
    {
        $this->display('react/index.tpl');
    }
}

App_Main::run('Page_Index');
