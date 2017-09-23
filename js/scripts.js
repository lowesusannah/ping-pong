//Business Logic
var array = [ ];
var getArray = function(input) {
  var total = [];

    for (var index = 1; index <= 10; index++) {
      total = total +  " " + index + ", ";
      var totalArray = total.split(", ", total.length - 1);
      //return array;
    }

    return totalArray;

  }
    //getArray() {
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

    var inputValue = $("input#number");
    var finalResult = getArray(inputValue);
    $("#output ul").append('<li>' + finalResult + '</li>');
    //$("#output").text(finalResult);


  });
});
