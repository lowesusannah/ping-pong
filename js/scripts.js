//Business Logic
//var businessLogicTotal = [];

  for(var index = 0; index < 10; index += 1) {
    alert(index);
    //businessLogicTotal = .append(i);
  }

//User Interface Logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

    var inputValue = parseInt($("input#number").val());
    alert(inputValue)
    //var finalResult = $('Your result is:' + businessLogicTotal);

    $(".result-display").show();
    //$("div.form-group").hide();

  });
});