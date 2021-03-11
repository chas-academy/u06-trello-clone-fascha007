//datepicker
$(function(){
  $("#datepicker").datepicker({
      showButtonPanel: true
    });  
});
//submit task function
$("#submitBtn").click(function(){
  var taskList = $("#addTask").val();
  var date = $("#datepicker").val();
  //append input to the list
  $("#sortable1").append("<li>" + taskList +"<span> </span> "+ date +"</li>");
});

//draggable & dropable
$(function(){
  $("#sortable1").sortable({
      connectWith:"#sortable2, #sortable3",
      // drop: function(event,ui){
      //   $(this).css("background-color","yellow")
      // }
  });
  $("#sortable2").sortable({
      connectWith:"#sortable3, #sortable1",
  });
  $("#sortable3").sortable({
      connectWith:"#sortable1, #sortable2",
  });
});

//dialog message
$( function() {
  $( "#content_1" ).dialog({
    modal: true,
    responsive: true,
  });
});

//tabs function
$( function() {
  var tabs = $( "#tabs" ).tabs();
  tabs.find( ".ui-tabs-nav" ).sortable({
    axis: "x",
    stop: function() {
      tabs.tabs( "refresh" );
    }
  });
});

//copy template function
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).html()).select();
  document.execCommand("copy");
  $temp.remove();
 }
