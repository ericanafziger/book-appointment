$(document).ready(function(){
// console.log("page ready");
//   $(function(){
//     $("#datepicker").datepicker();
//   });
// debugger;
  $("#booking form").submit(function(event) {

    var yourNameInput = $("input#yourName").val();
    var datepickerInput = $("input#datepicker").val();
    var lengthInput = $("#length").val();
    var commentsInput = $("input#comments").val();
    var colorInput = $("input#color").val();
    var therapyInput = $("input:radio[name=therapy]:checked").val();

    $(".yourName").text(yourNameInput);
    $(".datepicker").text(datepickerInput);
    $(".length").text(lengthInput);
    $(".comments").text(commentsInput);
    $(".color").text(colorInput);
    $(".therapy").text(therapyInput);

    $("#booking").hide();
    $("#confirmation").show();
    event.preventDefault();
  });

});
