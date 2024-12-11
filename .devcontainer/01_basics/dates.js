let myDate = new Date();

console.log(myDate);
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(typeof myDate)

let myCreatedDate = new Date(2002, 1, 19)
console.log(myCreatedDate.toDateString());


let myCreatedDateandTime = new Date(2002, 1, 19, 6, 7)
console.log(myCreatedDateandTime.toLocaleDateString());


let newDate = new Date();
console.log(newDate)
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1)


newDate.toLocaleString('default',{
    weekday:"long"
})