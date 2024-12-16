

const coding = ["js", "java", "python", "cpp"]

// coding.forEach(function (val) {
//     console.log(val);
    
// })


// coding.forEach((item) => {
//     console.log(item);
    
// })


// function printme(item){
//     console.log(item);
    
// }

// coding.forEach(printme)



// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })



const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(`Language Name: ${item.languageName} & Language File Name: ${item.languageFileName}`);
    
})