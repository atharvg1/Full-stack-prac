//What will the following print in javascript?  Console-log (" har\"*. leng th)?
function q1(){
  console.log("hello\"".length)
}
     //output : 6 
     
//Expore the includes, startsWith & endsWith functions of a string
   function q2(){
   let a="hello";
   console.log(a.startsWith('k')) ;

   }
    //output : false */

//Write a program to convert a given String to lowerCase
function q3(){
let a="HELLO";
 console.log("HELLO changes to = "+a.toLowerCase());
}
    //output :HELLO changes to = hello
 
  
//Extract the amount out of this string " Please give Rs 1000"  
function q4(){
  let a ="Please give Rs 1000";
  console.log(a.match(/\d+/)[0]);
}
    //output :1000


//Extract the multiple amount out of this string " Please give Rs 1000 2000 3000"  
 function q5(){
    let a=" Please give Rs 1000 2000 3000"
    console.log(a.match(/\d+/g));
 }
 
 //try to Change th character of a given string Were you able to do it
  function q6(){
  let a="hello";
  let b= a.slice(0,3)+"a"+a.slice(4);
  console.log(b);
    
  }

  
  
  