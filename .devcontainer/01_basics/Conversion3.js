let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);

console.log(typeof (valueInNumber));
console.log(valueInNumber);


// "33"=> 33
// "33abc" => NaN
// true => 1
// Abhishek => NaN

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);


// 1 => true
// "" => flase
// "Abhishek" => true

let someNumber = 55;
let stringSomeNumber = String(someNumber);

console.log(stringSomeNumber);
console.log(typeof stringSomeNumber);
