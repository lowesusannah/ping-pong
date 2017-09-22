//Business Logic
//var businessLogicArray = [];
  //for (i = 0; i <= 10; i++) {
    //function getArray() {
      //return i;
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
    var finalResult = calculateBusinessLogicTotal(inputValue);

    return (finalResult);
    alert(finalResult);

    $(".result-display").show();
    //$("div.form-group").hide();

  });
});
