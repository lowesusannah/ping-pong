//Business Logic



//User Interface Logic
$(document).ready(function(){
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

    var inputValue = $("input.form-control").val();
    alert(inputValue);
    //var finalResult =

    //$(".result-display").show();
    //$("form#ping-pong").hide();

  });
})
