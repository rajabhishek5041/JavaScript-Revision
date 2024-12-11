

const Array = [0, 1, 2, 3, 4, 5];
// console.log(Array);

const myArr = [1, 2, 3, 4, 5];

myArr.push(6);
myArr.push(7);

// console.log(myArr)

// console.log(myArr.pop())
// console.log(myArr)

myArr.unshift(9)
// console.log(myArr);


const NextArr = [1, 2, 3, 4, 5, 6]
console.log("Original Array - " +NextArr)

const sArr1 = NextArr.slice(1, 3)
console.log(sArr1);

const sArr2 = NextArr.splice(2, 3);
console.log(sArr2);

console.log(NextArr);


// console.log(Array.isArray("Abhishek"));               // Something went wrong;
// console.log(Array.from("Abhishek"));               // Something went wrong;
// console.log(Array.from(name: "Abhishek"));               // Something went wrong;         intresting;


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

