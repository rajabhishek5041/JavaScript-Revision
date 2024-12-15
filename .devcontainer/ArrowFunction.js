// Arrow Function:

// () => {}     This is the simple syntex of Arrow function;

const addTwoNum = (num1, num2) => {
    return num1 + num2;                           // This is explicit return;
}

console.log(addTwoNum(3, 5))


const addthreeNum = (num1, num2, num3) =>  num1+num2+num3 ;

console.log(addthreeNum(4, 5, 1))                     // This is implicit return;


const addfourNum = (num1, num2, num3, num4) =>  (num1+num2+num3+num4) ;   // We can also write like this;
console.log(addfourNum(4,5,6,2))
