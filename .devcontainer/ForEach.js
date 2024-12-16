

const arr = [1, 2, 3, 4, 5, 10]
for(const num of arr){
    // console.log(num);
}



const greeting = "Hello Abhishek"
for(const greet of greeting){
    // console.log(greet);
}



const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('RU', "Russia")
map.set('IS', "Isrile")

// console.log(map)
for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`)
}



const myObject = {
    'game1': 'GTA V',
    'game2': 'Free Fire'
}

// for (const [key, value] of myObject) {
//         console.log(`${key} :- ${value}`)             We can't access any object with forof loop;
// }