//Business Logic

var getArray = function(input) {
  alert("hi");
  var outputArr = [];
  for (var i = 0; i > input; i++) {
    if (i % 2 === 0) {
      outputArr.push(", " + "ping");
    } else if (i % 3 === 0){
      outputArr.push(", " + "pong");
    } else if (i % 6 === 0) {
      outputArr.push(", " + "ping-pong");
    } else {
      outputArr.push(i);
    }
    var joinedArr = outputArr.join('');
    return joinedArr;
  }
  };


//User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#number-input").val());
    var inputArr = [1];
      for (var i = 0; i < input; i += 1) {
        inputArr.push(i);
      }
    var outputs = getArray(input);

    $("#output").show();
    $("ul#output").text('<li>' + outputs + '</li>' + '<br>');
  });
});
