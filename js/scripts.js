function changeNumber(number) {
  var numberString = number.toString();
  if (numberString.includes("3")) {
    return 'I am sorry <span class="name"></span>, I am afraid I cannot do that.'
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
    return 'I am sorry <span class="name"></span>, I am afraid I cannot do that. <img src="img/icant.png" alt="This is an image of I cannot.">'
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

function reverseOrder(number) {
  var output = []
  var numberString = number.toString();
  if (numberString.includes("3")) {
    return 'I am sorry <span class="name"></span>, I am afraid I cannot do that. <img src="img/icant.png" alt="This is an image of I cannot.">'
  } else if (numberString.includes("2")) {
    return 'Boop! <img src="img/boop2.jpg" alt="This is an image of boop.">'
  } else if (numberString.includes("1")) {
    return 'Beep! <img src="img/beep.png" alt="This is an image of beep.">'
  } else {
    for (var i = 0; i <= number; i++) {
      output.push(changeNumber(i));
    }
    return output.reverse();
  }
}

// var myNumber = 78;
// console.log(reverseOrder(myNumber));


$(document).ready(function(){
  $("#button1").click(function(event) {
    event.preventDefault();
    var number = parseInt($("#enterNumber").val());
    var output = makeArray(number);
    var nameInput = $("input#name").val();

    $(".yourResult").html(output);
    $(".name").html(nameInput);
    $("#result").show();

  });
});

$(document).ready(function(){
  $("#button2").click(function(event) {
    event.preventDefault();
    var number = parseInt($("#enterNumber").val());
    var output = reverseOrder(number);
    var nameInput = $("input#name").val();

    $(".yourResult").html(output);
    $(".name").html(nameInput);
    $("#result").show();

  });
});
