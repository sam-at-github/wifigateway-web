/**
 * If session exist start is successful.
 */
function start_session(ip_in)
{
  console.log("gateway::start_session ", typeof(ip_in));
  ip_in = (ip_in ? ip_in : 0);
  var settings = {};
  settings.type = "POST";
  settings.dataType = "json";
  settings.url = "gw_endpoint.php";
  settings.data = {method:"start_session", params:{ip:ip_in}};
  settings.error = function(jqXHR, textStatus, errorThrown)
  {
    jQuery(document).trigger("start_session_cb",{result:null, error:{message:textStatus, code:1}});
    jQuery(document).trigger("comms_err", null);
  }
  settings.success = function(result)
  {
    jQuery(document).trigger("start_session_cb",result);
  }
  jQuery.ajax(settings);
}


function update_session(ip_in)
{
  console.log("gateway::update_session ", ip_in);
  var settings = {};
  ip_in = (ip_in ? ip_in : 0);
  settings.type = "POST";
  settings.dataType = "json";
  settings.url = "gw_endpoint.php";
  settings.data = {method:"update_session", params:{ip:ip_in}};
  settings.error = function(jqXHR, textStatus, errorThrown)
  {
    jQuery(document).trigger("update_session_cb",{result:null, error:{message:textStatus, code:1}});
    jQuery(document).trigger("comms_err", null);
  }
  settings.success = function(result)
  {
    jQuery(document).trigger("update_session_cb",result);
  }
  jQuery.ajax(settings);
}


function pause_session(ip_in)
{
  console.log("gateway::pause_session ", ip_in);
  console.log(arguments);
  var settings = {};
  ip_in = (ip_in ? ip_in : 0);
  settings.type = "POST";
  settings.dataType = "json";
  settings.url = "gw_endpoint.php";
  settings.data = {method:"pause_session", params:{ip:ip_in}};
  settings.error = function(jqXHR, textStatus, errorThrown)
  {
    jQuery(document).trigger("pause_session_cb",{result:null, error:{message:textStatus, code:1}});
    jQuery(document).trigger("comms_err", null);
  }
  settings.success = function(result)
  {
    jQuery(document).trigger("pause_session_cb",result);
  }
  jQuery.ajax(settings);
}


function play_session(ip_in)
{
  console.log("gateway::play_session", ip_in);
  var settings = {};
  ip_in = (ip_in ? ip_in : 0);
  settings.type = "POST";
  settings.dataType = "json";
  settings.url = "gw_endpoint.php";
  settings.data = {method:"play_session", params:{ip:ip_in}};
  settings.error = function(jqXHR, textStatus, errorThrown)
  {
    jQuery(document).trigger("play_session_cb",{result:null, error:{message:textStatus, code:1}});
    jQuery(document).trigger("comms_err", null);
  }
  settings.success = function(result)
  {
    jQuery(document).trigger("play_session_cb",result);
  }
  jQuery.ajax(settings);
}


function end_session(ip_in)
{
  console.log("gateway::end_session ", ip_in);
  var settings = {};
  ip_in = (ip_in ? ip_in : 0);
  settings.type = "POST";
  settings.dataType = "json";
  settings.url = "gw_endpoint.php";
  settings.data = {method:"end_session", params:{ip:ip_in}};
  settings.error = function(jqXHR, textStatus, errorThrown)
  {
    jQuery(document).trigger("end_session_cb",{result:null, error:{message:textStatus, code:1}});
    jQuery(document).trigger("comms_err", null);
  }
  settings.success = function(result)
  {
    jQuery(document).trigger("end_session_cb",result);
  }
  jQuery.ajax(settings);
}


function delete_session(ip_in)
{
  console.log("gateway::delete_session ", ip_in);
  var settings = {};
  ip_in = (ip_in ? ip_in : 0);
  settings.type = "POST";
  settings.dataType = "json";
  settings.url = "gw_endpoint.php";
  settings.data = {method:"delete_session", params:{ip:ip_in}};
  settings.error = function(jqXHR, textStatus, errorThrown)
  {
    jQuery(document).trigger("delete_session_cb",{result:null, error:{message:textStatus, code:1}});
    jQuery(document).trigger("comms_err", null);
  }
  settings.success = function(result)
  {
    jQuery(document).trigger("delete_session_cb",result);
  }
  jQuery.ajax(settings);
}



function stats(ip_in)
{
  console.log("gateway::stats ", ip_in);
  var settings = {};
  ip_in = (ip_in ? ip_in : 0);
  settings.type = "POST";
  settings.dataType = "json";
  settings.url = "gw_endpoint.php";
  settings.data = {method:"get_session_stats", params:{ip:ip_in}};
  settings.error = function(jqXHR, textStatus, errorThrown)
  {
    jQuery(document).trigger("stats_cb",{result:null, error:{message:textStatus, code:1}});
    jQuery(document).trigger("comms_err", null);
  }
  settings.success = function(result)
  {
    jQuery(document).trigger("stats_cb",result);
  }
  jQuery.ajax(settings);
}


function ips()
{
  console.log("gateway::ips ");
  var settings = {};
  settings.type = "POST";
  settings.dataType = "json";
  settings.url = "gw_endpoint.php";
  settings.data = {method:"get_ips"};
  settings.error = function(jqXHR, textStatus, errorThrown)
  {
    jQuery(document).trigger("ips_cb",{result:null, error:{message:textStatus, code:1}});
    jQuery(document).trigger("comms_err", null);
  }
  settings.success = function(result)
  {
    jQuery(document).trigger("ips_cb",result);
  }
  jQuery.ajax(settings);
}


function state_code_to_string(code)
{
  ret = "unknown";
  var map = {
    0: "uninitialized",
    1: "started",
    2: "paused",
    3: "exhausted",
    4: "ended"
  }
  if(typeof map[code] != "undefined")
  {
    ret = map[code];
  }
  return ret;
}
