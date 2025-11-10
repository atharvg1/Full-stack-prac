// Q1. use logial operator to find whether the age of a persion lies between 10 and 20?
function q1(){
let age=15;
if(age>=10 && age<=20){
    console.log("Your age lies between 10 and 20");
}else{

    console.log("you'r age is below 10 or above 20");
}
}
// Q2. Demonstrate the use of swith case statement in Javascript
 function q2(){

 let num = prompt("Enter a number of week (1-7): ");
 num=Number(num);
 switch(num){
    case 1:
        console.log("monday");
        break;
    case 2:
            console.log("tuesday");
            break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");    
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input");

    }
}
    //Q3. Write a Java Script program to find whether a numtber is Divisible by 2 and 3
function q3(){

    let num=prompt("Enter a number:");
    num=Number(num);
    if(num%2===0 && num%3===0){
        console.log("The number is divisible by both 2 and 3");
    }else{
        console.log("The number is not divisible by both 2 and 3"); 
    }
    
}
    //Q4. write a prog to find a num is divisible by 2 or 3?
    function q4(){
        let num=prompt("enter a number:");
    num=Number(num);
    if(num%2===0 ||num%3===0){
        console.log("The number is divisible by 2 or 3")
    }else{
        console.log("The number is not divisible by 2 or 3");
    }
}
   //Q5.print you can drive if you are above 18 using if else ladder?
   function q5(){
    let age=prompt("Enter your age:");
   age=Number(age);
   if(age<18){
    console.log("You cannot drive");
   }
   else if(age===18){
    console.log("You are eligible to drive with a learner's license");
   }
   else{
    console.log("You can drive if you have a valid driving license");

   }
    
   }