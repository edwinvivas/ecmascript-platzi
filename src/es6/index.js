// antes de ES6
function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}

// con ES6
function newFunction2(name = "oscar", age = "32", country = "MX") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Ricardo", "23", "CO");

// antes de ES6
let hello = "Hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// Con ES6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// destructuracion antes 
