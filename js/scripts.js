//Business Logic
var businessLogicArray = [];
var getArray = function(array) {
  return businessLogicArray
}

  for (var i = 0; i <= 10; i++) {
    function getArray() {
      return businessLogicArray + "," + [i];
    }
  }
    //return (businessLogicArray + "," + i);
    //alert(getArray);
    //}
      //businessLogicTotal = businessLogicTotal + "" + index + ",";
      //alert(businessLogicTotal);


//User Interface Logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

    var inputValue = parseInt($("input#number").val());
    var finalResult = getArray(inputValue);
    $("#output").text(finalResult);

    //$(".result-display").show();
    //$("div.form-group").hide();

  });
});
