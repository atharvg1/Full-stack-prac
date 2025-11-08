//Note Imp
function q1(){
    typeof(document);
    typeof(window);
      //both are objects
}




//Create a navbar and change the color of its first element to red
function q2() {
 let navItem=document.getElementsByClassName("nav-item");
 navItem[0].style.color="red";
}
q2();

function q3(){
// create  a tabel without tbody . now use "view page source" button to check whethere it has a tbody or not
    //Answer: yes it has tbody added automatically

    //code is in chap7.html file
}

function q4(){
    //Create an element with 3 childern , Now change the color of first and last element to green.
    let parent=document.getElementById("parent");
    parent.firstElementChild.style.color="green";
    parent.lastElementChild.style.color="green";
    // done below one because want to know how to change middle any child
    parent.children[1].style.color="red";
    
    
}
q4();

//Write a javaScript code to change all <li> tags to cyan.
function q5(){
let tag=document.getElementsByTagName("li");
for(let i=0;i<=tag.length-1;i++){
    tag[i].style.color="cyan";
}
;
}
q5();

function q6(){
//Which of the following is used to look for the farthest ancestor that matches a given css selector
  //option  --> a:matches b: closest c:contains d:none of these
    //check answer in chap7.html!
}
