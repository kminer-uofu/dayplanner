$(document).ready(function(){
    console.log("Hello World")
    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    })
    function hourUpdater() {
        var currentHour = moment().hours();
        $(".time-block").each(function(){
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            console.log($(this).attr("id").split("-")[1]);
        })
    }
    hourUpdater();
})