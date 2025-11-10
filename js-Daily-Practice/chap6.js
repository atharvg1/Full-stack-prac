//Write a program using prompt function to take input of age 
// as a value from user and use alert to tell him if he can drive !
function q1(){
let age=parseInt(prompt("Enter you age to Verify : "));

 if(age<=0){
    alert("can not Enter negative number");
}
else if(age<18){
    alert("you are minor can't drive!");
}
else if(age==18){
    alert("you can drive if has learning license!");
}
else{
    alert("you can drive if has  valid documents!");
}

//Q2 : In q1 use confirm to ask user if he wants to see prompt again or not?
let seeAgain=confirm("do you want  to see propmt(message) again ? " );
    if(seeAgain==true){
      q1();
    }

 //Q3 : In privious question use console.error to log the error if the age entered by user is negative .
  if(age <0)   {
    console.error("Error age can't be negative!");
  }
}


//write a program to change the url to ggogl.com (Redirection)if user enters a number greater than 4;
function q2() {
let num=parseInt(prompt("Enter a number :"));
if(num>4){
    window.location.href="https://www.google.com";
}else{
    alert("number is "+num+" (No redirection!)Enter number greater than 4 to redirection to google.com! ");

}
}

//change the background color of the page to yellow ,red or any other color based on user input through prompt
function q3(){
    let color=prompt("Enter a colour name or colour code to change background colour of page :");
    document.body.style.backgroundColor=color;
}


 
    
    

