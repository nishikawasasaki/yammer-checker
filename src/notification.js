// Generated by CoffeeScript 1.4.0

$(function() {
  $("#type").html(localStorage.ls_type);
  delete localStorage.ls_type;
  $("#message").html(localStorage.ls_message);
  return delete localStorage.ls_message;
});