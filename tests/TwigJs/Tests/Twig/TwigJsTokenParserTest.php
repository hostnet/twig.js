<?php

namespace TwigJs\Tests\Twig;

use PHPUnit\Framework\TestCase;
use TwigJs\Twig\TwigJsTokenParser;

class TwigJsTokenParserTest extends TestCase
{
    public function testParse()
    {
        $env = $this->getEnv();
        $stream = $env->tokenize('{% twig_js name="foo" %}');
        $token = $env->parse($stream)->getNode('body')->getNode(0);

        $this->assertInstanceOf('TwigJs\Twig\TwigJsNode', $token);
        $this->assertEquals('foo', $token->getAttribute('name'));
    }

    private function getEnv()
    {
        $env = new \Twig_Environment();
        $env->addTokenParser(new TwigJsTokenParser());
        $env->setLoader(new \Twig_Loader_String());

        return $env;
    }
}