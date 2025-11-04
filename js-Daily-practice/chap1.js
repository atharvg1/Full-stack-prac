// Q1. Create a variable of type string and try to add a number to it?
function q1(){

let a="abc";
console.log(a);  
let b=10;
console.log(b);
let c=console.log(a+b);
}
// Q2. Use typeof operator to find the datatype of the stung in last question
function q2(){
    console.log(typeof(c));

}
// Q3. Create a const object in javascript Can you chang it to hold a number later? 
 function q3(){
    const obj={
    name:"jhon",
    age:"30"
 }
}
    // !!! obj=10; // This will give an error because we cannot reassign a const variable

// Q4. Try to add a new key to the const object in Q3?
    function q4(){
    obj.city="Pune"; 
    console.log(obj);
    }
//Q5 .Write a js program to create a word meaning dictionary of 5' 'words.
    function q5(){
    let dictionary={
        hello:"A greeting or expression of goodwill",
        world:"The earth or globe; the planet we live on",
        computer:"An electronic device for storing and processing data",
        javascript:"A high-level programming language used primarily for web development",
        book:"A set of written or printed pages bound together"

    };
    console.log(dictionary);
    }