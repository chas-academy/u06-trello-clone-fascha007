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
  //reset input form
  $("addTask").val("");
});

//draggable & dropable
$(function(){
  $("#sortable1").sortable({
      connectWith:"#sortable2, #sortable3",
      drop: function(event,ui){
        $(this).css("background-color","yellow")
      }
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