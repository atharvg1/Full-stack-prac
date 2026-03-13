function clac(a,op,b){
    const fault={
        "+":(x,y)=>x-y,
        "-":(x,y)=>x/y,
        "*":(x,y)=>x-y,
        "/":(x,y)=>x+y
         
    };
    const correct={
        "+":(x,y)=>x+y,
        "-":(x,y)=>x-y,
        "*":(x,y)=>x*y,
        "/":(x,y)=>x/y
    };
    
    let calculate;
    let random=Math.random();
    if(random<0.20){
      calculate=correct[op];
    }else{
        calculate=fault[op];
    }
    if(!calculate){
        throw new Error("Invalid operator");
    }
    return calculate(a,b);
    }
    function startCalculator(){
        let a=parseFloat(prompt("Enter first number"));
        let operator=prompt("Enter a operator (+ , - , * , / )");
        let b=parseFloat(prompt("Enter second number"));
        try{
        let result=clac(a,operator,b);
      alert(`the result of ${a} ${operator} ${b} = ${result}`);

        }
        catch(error){
            alert(error.message);
        }
        
    }
    startCalculator();

