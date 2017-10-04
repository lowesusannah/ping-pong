//Business Logic
var getArray = function(input) {
  var outputArr = [];
  for (var index = 1; index <= input; index++) {
    if (index % 6 === 0) {
      outputArr.push("ping-pong");
    } else if (index % 3 === 0) {
      outputArr.push("pong");
    } else if (index % 2 === 0) {
      outputArr.push("ping");
    } else {
      outputArr.push(index);
    }
  }
  return outputArr;
};

//User Interface Logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    $("ul#numList").empty();
    var input = parseInt($("input#number").val());
    var outputs = getArray(input);
    $("#output").show();
      outputs.forEach(function(number) {
      $("ul#numList").append('<li>' + number + '</li>' + '<br>');
    });
  });
});

/*   Comments -- Business Logic
for (var i = 1; i <= input; i++) {
changed the var i = 1 because we want output to start at 1 & changed i <=input instead of i > input because i will never get larger than input in the loop, so the loop will never initialize.

outputArr.push("ping");
removed ", " + from before the "ping", "pong" and "ping-pong" because pushing it to an array will automatically add a comma between elements.

"var joinedArr = outputArr.join('');"
removed the line because if pushing, don't need to join it into a string anymore.

return outputArr;
moved this line down one line to be below the closing }, because otherwise it is going to stop the loop from looping back again -- anytime it sees "return" within the loop, the for loop will think that it has finished its job and stops looping. Changed from the previously used "joinedArr" used in the deleted line above to outputArr, since that is the name of the array we will want to return -- it has all of our .pushed elements within it.*/

/*  Comments Front-end Logic
$("ul#numList").empty();
inserted this line in order to clear out the values that were previously imputted by the user if they are displayed below from previous submissions.  .remove() will not work because it will actually remove the ul element in the .html, to which we are trying to append our output. That would result in no output at all being displayed.

var outputs = getArray(input);
moved this line, and the line $(#output).show up from lines 30 and 31, where it was below the closing curly bracket in the for loop. This is because we will need outputs to be defined and shown before we use it below.

outputs.forEach(function(number) {
added this line of text in order to define the function that we are using to append the outputs back to the user - we will need to loop through each number which is in the outputs array.

$("ul#numList").append('<li>' + number + '</li>' + '<br>');
changed from $("ul#output").text('<li>' + outputs + '</li>' + '<br>'); because the original was only going to append the entire array to one li. because we now are using the forEach function, the outputs array will be broken down into all of its elements (each number). We want to do the .append instead of .text because each inidivdual array element will be appended to the list as a single item.

var inputArr = [1];
  for (var i = 0; i < input; i += 1) {
    inputArr.push(i);
  }
The for loop above was removed because it was already addressed in the back end logic, and it should also not reside in the front end logic because it doesn't refer to user's input or output at all.
*/
