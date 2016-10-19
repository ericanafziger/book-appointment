$(document).ready(function(){
console.log("page ready");
  $(function(){
    $("#datepicker").datepicker();
  });
console.log("date function done");
// debugger;
  $("#booking form").submit(function(event) {

console.log("function start");
    var yourNameInput = $("input#yourName").val();
    var datepickerInput = $("input#datepicker").val();
    var lengthInput = $("#length").val();
    var commentsInput = $("input#comments").val();
console.log("variables set");
    $(".yourName").text(yourNameInput);
    $(".datepicker").text(datepickerInput);
    $(".length").text(lengthInput);
    $(".comments").text(commentsInput);

    $("#booking").hide();
    $("#confirmation").show();
    event.preventDefault();
  });

});
