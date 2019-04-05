function changeNumber(number) {
  var numberString = number.toString();
  if (numberString.includes("3")) {
    return "I am sorry Dave, I am afraid I cannot do that."
  } else if (numberString.includes("2")) {
    return "Boop!"
  } else if (numberString.includes("1")) {
    return "Beep!"
  } else {
    return number;
  }
}

function makeArray(number) {
  var output = [];
  var numberString = number.toString();
  if (numberString.includes("3")) {
    return 'I am sorry Dave, I am afraid I cannot do that. <img src="img/icant.png" alt="This is an image of I cannot.">'
  } else if (numberString.includes("2")) {
    return 'Boop! <img src="img/boop2.jpg" alt="This is an image of boop.">'
  } else if (numberString.includes("1")) {
    return 'Beep! <img src="img/beep.png" alt="This is an image of beep.">'
  } else {
    for (var i = 0; i <= number; i++) {
      output.push(changeNumber(i));
    }
    return output;
  }
}

// var myNumber = 8732;
// console.log(makeArray(myNumber));


$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#enterNumber").val());
    var output = makeArray(number);
    $(".yourResult").html(output);

    $("#result").show();

  });
});
