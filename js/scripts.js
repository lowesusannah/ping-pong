//Business Logic
var array = [ ];
var getArray = function(input) {
  var total = [];

    for (var index = 1; index <= 10; index++) {
      if ((input % 3 === 0)) {
        return "ping";
      }
      else if ((input % 5 === 0)) {
        return "pong";
      }
      else if ((input % 15 === 0))
        return "ping-pong";
      } else {
        return total.append(index);
      total = total +  " " + index + ", ";
      var totalArray = total.split(", ", total.length - 1);
      //return array;
      return totalArray;
    }
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
    var input = parseInt ($("input#number").val());
    var finalResult = getArray(input);
    $("#output ul").append('<li>' + finalResult + '</li>');
    //$("#output").text(finalResult);


  });
});
