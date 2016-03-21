<?php

class App_Ro_Item extends App_Ro
{
    protected $_table = 'itemlist';

    public function onInject()
    {
        parent::onInject();
        $this->_query = BEAR::factory('BEAR_Query', $this->_queryConfig);
    }

     public function onRead($values)
     {
         $sql = "SELECT * FROM " . $this->_table;
         $sql .= " ORDER BY id DESC";
         $sql .= " limit $values[limit]";
         $result = $this->_query->select($sql, [], $values);
         return $result;
     }

     public function onCreate($values)
    {
        $result = $this->_query->insert($values);
    }
}
