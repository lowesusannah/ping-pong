//Business Logic
//var businessLogicTotal = [];

  //for(var index = 0; index < inputValue; index += 1) {
    //console.log(index, inputValue); alert(index);
    //businessLogicTotal = .append(i);
  //}

//User Interface Logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

    var inputValue = parseInt($("input#number").val());
    alert(inputValue);
    //var finalResult = $('Your result is:' + businessLogicTotal);

    //$(".result-display").show();
    //$("div.form-group").hide();

  });
})
