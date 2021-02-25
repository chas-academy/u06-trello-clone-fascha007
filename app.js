//add function 
$(function(){
    var $input = $("#addText"), 
        $list = $("ul");

    function addTask(e) {
        if(e.type==="keydown" && e.which!== 15) return;
        e.preventDefault();//form not submitted
        $list.append("<li>" + $input.val() + "</li>");
        $input.val(""); //reset form
    }

    $("#addBtn").click(addTask);
    $("#addText").keydown(addTask);
})
