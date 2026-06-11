console.log("Hello, World!");
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

document.addEventListener('click', function() {
    alert('You clicked the document!');
    confirm('Do you want to continue?');
});

//use strcit
"use strict";
a = 10; // This will throw an error in strict mode
console.log(a);
//arrow func

let num = number => number * 2;


console.log(num(5)); // Output: 10

//array destrcuturing
let arr = [1, 2, 3];
let [x, y, z] = arr;
console.log(x);