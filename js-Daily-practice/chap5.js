//Crate an array of numbers and   take input from user to add numbers to this array
function q1(){
let arr=[];
let count=parseInt(prompt("Enter size of array : "));
for(let i=0 ;i<count;i++){
 let num=parseInt(prompt("Enter number " +(i+1)+ " of array : "));
 arr.push(num);
}
document.write("Array : "+arr.join(","));
}




//keep adding numbers to an array until 0 is added to array 
 
 function q2(){
   let arr=[];
   while(true){
    let num=parseInt(prompt("Enter a number to add to an array : (To stop Enter ( 0 ) )"));
    if(num===0){
        break;
    }
   arr.push(num);
 }
 console.log("Array : "+arr.join(" , "));
}

 //filter for number divisible by 10 from an given array;

   function q3(){
    let arr=[12,45,60,23,78,90,150,37,200];
    let filteredArr = arr.filter(function(num){
        return num % 10 ===0;
    });
    console.log("Numbers divisible by 10: "+ filteredArr);
    
   }

   //create an array of square of given numbers.
    function q4(){
      let arr=[];
        let count=parseInt(prompt("Enter size of array : "));
        for(let i=0 ;i<count;i++){
            let num=parseInt(prompt("Enter number " +(i+1)+ " of array : "));
            arr.push(num);
        }
        let squareArr=arr.map(function(num){
            return num * num;
        });
        console.log("Original Array: "+ arr);
        console.log("square :"+squareArr);
    }

    //use reduce to calculate factorial of given numbers from an array of first n natural numbers (n bring tha number whose factorial needs to be calculated)
    function q5(){
        let n=parseInt(prompt("Enter a number to calcualte it's factorial :"));
        let arr=[];
        for(let i=1;i<=n;i++){
            arr.push(i);

        }
        let factorial=arr.reduce(function(acc,currentValue){
            return acc*currentValue;

        });
        console.log("factorial of "+n+ "is :"+factorial);



    }