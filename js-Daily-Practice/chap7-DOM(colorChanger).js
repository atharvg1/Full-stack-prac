//Q.Given 5 boxes , assign a random color and a random background to each box using DOM  


//querySelectorAll returns a NodeList AND querySelector returns the first matching element 
// SO querySelector() NOT WORKS WITH  .forEach LOOP

function getRandomColor() {
  let r = Math.floor(0 + Math.random() * 256);//used simple formula a+r(b-a) and use 256 because if use 255 it will give 244.999 not 255
  let g = Math.floor(0 + Math.random() * 256);
  let b = Math.floor(0 + Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

let boxes1 = document.querySelectorAll(".box1");
Array.from(boxes1).forEach((e) => {
  e.style.color = getRandomColor();
});

let boxes2 = document.querySelectorAll(".box2");
Array.from(boxes2).forEach((e) => {
  e.style.backgroundColor = getRandomColor();
});