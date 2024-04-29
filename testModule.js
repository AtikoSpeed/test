// testModule.js
function add(a, b) {
  return a + b;
}

function shout(input) {
  const calculation = add(1, 2);
  const result = input.toUpperCase();
  console.log(result);
  console.log("calculation: ", calculation);

  return result;
}

const teachersName = "Mr. Smith";

// module.exports = shout;

module.exports = {
  shout: shout,
  teachersName: teachersName,
};
