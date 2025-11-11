 //Q.Given 5 boxes , assign a random color and a random background to each box using DOM  
let boxes1=document.getElementsByClassName("box1");
for(let i=0;i<boxes1.length;i++){
    let randomText="#"+Math.floor(Math.random()*16777215).toString(16);
    boxes1[i].style.color=randomText;
  }
    
let boxes2=document.getElementsByClassName("box2")  ;
for(let i=0;i<boxes2.length;i++){
    let randomBg="#"+Math.floor(Math.random()*16777215).toString(16);
    boxes2[i].style.backgroundColor=randomBg;
}


        

    
    
