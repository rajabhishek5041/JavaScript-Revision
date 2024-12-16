// Immediately Invoke Function Expressions (IIFE);

// ()()       // This is a simple syntax of IIFE

function chai() {
    console.log(`DB Connected`)
}
chai();                          // This is not a IIFE technique;

(function chaiCode() {                               // This is a named IIFE;
    console.log(`This is IIFE technique`);           // This is IIFE technique ;
}) ();                                               // We use this if we don't want to let this function intrupt from global pollution;


(() => {                                                 
    console.log(`This is also a IIFE technique`);
}) ();


((name) => {
    console.log(`If you wanna pass a value ${name}`)
}) ('Abhishek');