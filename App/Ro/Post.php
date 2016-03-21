<?php

class App_Ro_Post extends App_Ro
{
    protected $_table = 'posts';

    public function onInject()
    {
        parent::onInject();
        $this->_query = BEAR::factory('BEAR_Query', $this->_queryConfig);
    }

     public function onRead($values)
     {
         $sql = "SELECT * FROM posts";
         $result = $this->_query->select($sql, array(), $values);
        //  var_dump($result);
        //  exit;
         return $result;
     }

     public function onCreate($values)
    {
        $result = $this->_query->insert($values);
    }
}
