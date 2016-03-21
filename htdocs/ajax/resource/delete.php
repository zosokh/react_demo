<?php

require_once 'App.php';

class Page_Ajax_Basic_Ajax_Resource_Delete extends App_Page
{
    public function onInject()
    {
        $this->_resource = BEAR::dependency('BEAR_Resource');
        $this->_ajax = BEAR::dependency('BEAR_Page_Ajax');
        // $this->injectAjaxRequest();
        $this->injectArg('form',$_POST['form']);
    }

    public function onInit(array $args)
    {
        // p($args);exit;
        $params = array(
            'uri' => 'Post',
            'options' => array('template' => 'post')
        );
        $this->_resource->read($params)->set('post');
    }

    public function onOutput()
    {
        // $this->_ajax->addAjax(
        //     'val',
        //     array('person1' => 'person'),
        //     array('effect' => 'slide')
        // );
        $this->_ajax->addAjax('json',array('msg' => 'AJAXリクエスト成功!','test' => 'OKKKK'));
        $this->output('ajax');
    }
}

BEAR_Main::run('Page_Ajax_Basic_Ajax_Resource_Delete');
?>
