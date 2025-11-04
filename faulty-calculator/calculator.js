function cal(a,op,b){
  const fault={
    "+" : (x,y)=>x-y,
    "-" : (x,y)=>x*y,
    "*" : (x,y)=>x-y,
    "/" : (x,y)=>Math.pow=(x,y)
  };

  const correct={
    "+":(x,y)=>x+y,
    "-":(x,y)=>x-y,
    "*":(x,y)=>x*y,
    "/":(x,y)=>x/y
  };
   let calcu;
   const random=Math.random();
   if(random<0.10){
    calcu=correct[op];
   }else{
    calcu=fault[op];
   }
   if(!calcu){
    throw new error("Invalid operator");
   }
   return calcu( a,b);
}
function startcal(){
    alert("Welcome");
    let num1=parseFloat(prompt("Enter first number: "));
    let operator=prompt("Enter operator (+ , - , * , / )");
    let num2=parseFloat(prompt("Enter second number"));
    try{
        let result=cal(num1,operator,num2);
        alert(`the reasult of ${num1} ${operator} ${num2} = ${result}`);
    }catch(error){
        alert(error.message);
    }

}
startcal();