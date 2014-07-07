<?php
/**
 * End point for web calls.
 * Even though the class returns JSON reponses, kept separate for testing.
 * @todo auth for ip parametized.
 */
ini_set('include_path', dirname(dirname(__FILE__)) . "/:" . ini_get('include_path'));
require_once("gw_logging.php");
require_once("gw.php");
$host_ip = null;
$action = null;
$gw = new Gateway();
 
// Should always be a remote addr even if dont use.
$host_ip = (empty($_POST['ip']) ? null : $_POST['ip']);
$host_ip = (empty($host_ip) ? $_SERVER['REMOTE_ADDR'] : $host_ip);

//debug_log("B ".$_POST['ip']." ".var_dump_s($_POST['ip']));
//debug_log("host_ip ".$host_ip."\n\n");

if(empty($host_ip))
{
  echo json_encode(array("status" => "fail", "message" => "no IP address provided!"));
  exit();
}
$action = (empty($_POST['action']) ? "x" : $_POST['action']);


switch($action)
{
  case "start_session" :
  {
    $gw->start_session($host_ip);
    break;
  }
  case "pause_session" :
  {
    $gw->pause_session($host_ip);
    break;
  }
  case "play_session" :
  {
    $gw->play_session($host_ip);
    break;
  }
  case "end_session" :
  {
    $gw->end_session($host_ip);
    break;
  }
  case "update_session" :
  {
    $gw->update_session($host_ip);
    break;
  }
  case "get_session_stats" :
  {
    $gw->get_session_stats($host_ip);
    break;
  }
  case "get_ips" :
  {
    $gw->get_ips(null);
    break;
  }
  default :
  {
    echo json_encode(array("status" => "fail", "message" => "unknown command"));
  }
  exit();
}
?>
