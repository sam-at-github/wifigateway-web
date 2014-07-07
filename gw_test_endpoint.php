<?php
require_once("gw.php");
$gw = new Gateway();

if($argc < 2)
{
  echo "Bad args\n";
  exit();
}
if(!is_callable(array("Gateway", $argv[1])))
{
  echo "Gateway::{$argv[1]} DNE\n";
  exit();
}
array_shift($argv);
$method = array_shift($argv);
call_user_func_array(array($gw,$method),$argv);
?>
  
