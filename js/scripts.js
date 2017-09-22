//Business Logic
var array = [];
var getArray = function(array) {
  var total = 0;
    for (var index = 1; index <= 10; index ++) {
      array += index + 1 + ","
    }
    return (array);
  }
    //getArray() {
      //console.log();
  //}
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
