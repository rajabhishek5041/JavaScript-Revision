

const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "rubi",
    swift: "swift by apple"
}

for (const key in myObject) {
     console.log(`${key} :- ${myObject[key]}`);
     
}