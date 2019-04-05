
function makeArray(number) {
  var output = [];
  for (var i = 0; i <= number; i++) {
    output.push(i);
  }
  return output;
}

var myNumber = 124;
console.log(makeArray(myNumber));
