function changeNumber(number) {
  var numberString = number.toString();
  if (numberString.includes("3")) {
    return "I'm sorry, Dave. I'm afraid I can't do that."
  } else if (numberString.includes("2")) {
    return "Boop"
  } else if (numberString.includes("1")) {
    return "Beep"
  } else {
    return number;
  }
}

function makeArray(number) {
  var output = [];
  for (var i = 0; i <= number; i++) {
    output.push(changeNumber(i));
  }
  return output;
}

var myNumber = 23;
console.log(makeArray(myNumber));
