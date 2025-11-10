//Q1. for loop program to print numbers from 1 to 10
function q1(){
for(let i=1 ;i<=10;i++){
    console.log(i);
}
}
// Q2. use for in loop to print all the properties of an object.
function q2(){
const person={
    name:"Atharv",
    age:101,
    city:"pune"
};
for(let a in person){
    console.log(a + ":"+person[a]);
}
}

// Q3.use of for...of loop to print all the elements of an array.
function q3(){
    let colors=["red","green","blue","yellow"];
    for(let color of colors){
        console.log(color);
    }
}

//Q4 . use while loop to print numbers from 1 to 5.
function q4(){
    let a=1;
    while(a<=5){
        console.log(a);
        a++;
    }

}

//Q5. use do...while loop to print numbers from 1 to 5.
function q5(){
let i=1;
do{
    console.log(i);
    i++;
  }while(i<=5);
}

//Q6. use nested loops to print a pattern.
function q6(){
    let n=5;    
    for(let i=1;i<=n;i++){
        let row="";
        for(let j=1;j<=i;j++){
            row +="* ";
        }
        console.log(row);
    }
}

    

