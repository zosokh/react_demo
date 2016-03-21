<?php


class App_Ro_Test_UserTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @var BEAR_Resource
     */
    public $resource;

    public function setUp()
    {
        $this->resource = BEAR::dependency('BEAR_Resource');
        parent::setUp();
    }


    public function testCreateCode()
    {
        $values = [
          'title' => 'titletest',
          'body' => 'bodytest'
        ];
        $params = [
            'uri' => 'Post',
            'values' => $values
        ];
        $ro = $this->resource->create($params)->getRo();
        $this->assertSame(200, $ro->getCode());

        return $ro;
    }


    public function testReadCode()
    {
        $params = array(
            'uri' => 'Post'
        );
        // $this->_resource->read($params)->set('post');
        $ro = $this->resource->read($params)->getRo();
        $this->assertSame(200, $ro->getCode());

        return $ro;
    }

    // public function testReadCode()
    // {
    //     $params = array(
    //         'uri' => 'Test/User',
    //         'values' => array('id' => 1),
    //         'options' => array()
    //     );
    //     $ro = $this->resource->read($params)->getRo();
    //     $this->assertSame(200, $ro->getCode());
    //
    //     return $ro;
    // }

    // /**
    //  * @param App_Ro $ro
    //  *
    //  * @depends testReadCode
    //  */
    // public function testReadBody(App_Ro $ro)
    // {
    //     $body = $ro->getBody();
    //     $this->assertSame("BEAR", $body['name']);
    // }
}
