/* Create  a faluty calculator  that  does the following calculations incorrectly:
//1. it takes two num from the user
//2. it takes an operator from the user (+, -, *, /)
//3. it will do 
   //  + ---> -
   // * ---> +
   //  - ---> /
    // / ---> **

//4. It performs wrong operation 10% of the time. */    


function faultyCalculator(a,op,b){
    const fault={
        "+":(x,y)=>x-y,
        "-":(x,y)=>x/y,
        "*":(x,y)=>x+y,
        "/":(x,y)=>Math.pow(x,y)
    };

     const correct={
        "+":(x,y)=>x+y,
        "-":(x,y)=>x-y,
        "*":(x,y)=>x*y,
        "/":(x,y)=>x/y

     } ;
     let calculate;
     const randomNum=Math.random();
     if(randomNum<0.10){
        calculate=correct[op];
     }else{
        calculate=fault[op];
     }

     if(!calculate){
         throw new Error("Invalid oerator");

     }
     return calculate(a,b);
}

function startcalculator(){
    alert("Welcome to calculator which can be faluty for you!");

    let num1=parseFloat(prompt("enter first number:"));
    let operator=prompt("Enter operator(+,-,*,/) :");
    let num2=parseFloat(prompt("Enter second Number:"));

    try{
        let result=faultyCalculator(num1,operator,num2);
        alert(`The result of ${num1} ${operator} ${num2} =${result}`) ;
    }catch(error){
        alert(error.message);
    }

}
startcalculator();

