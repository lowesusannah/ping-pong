//Business Logic
var inputValue = parseInt($("input#number").val());
var businessLogicTotal = [];

  for(var index = 0; index < inputValue; index += 1) {
      businessLogicTotal = businessLogicTotal + "" + index + ",";
      alert(businessLogicTotal);
  }

//User Interface Logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

    var finalResult = businessLogicTotal(inputValue);
    text(finalResult);
    $(".result-display").show();
    //$("div.form-group").hide();

  });
});
