/*function formatViews(views) {
  if (views >= 1000000) {
    return (views / 1000000) + "M";
  }
  if (views >= 1000) {
    return (views / 1000) + "K";
  }
  return views;
}


function createCard(title, channel, views, monthsOld, duration, thumbnail) {

  let container = document.getElementById("container");

  let card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="thumbnail">
      <img src="${thumbnail}">
      <div class="duration">${duration}</div>
    </div>

    <div class="details">
      <div class="title">${title}</div>
      <div class="meta">
        ${channel} • ${formatViews(views)} views • ${monthsOld} months ago
      </div>
    </div>
  `;

  container.appendChild(card);
}

createCard(
  "Introduction to Backend | Sigma Web Dev",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/KtL-SQ20Q0s/maxresdefault.jpg"
); 

*/

/*
function formatViews(views){
  if(views>=1000000){
     return (views/1000000)+"m "+" views ";
  }
  else if(views>=1000){
    return (views/1000)+"k" +" views";
  }
  else {
    return views +" views";
  }
}

  





function createCard(title,cName,views,monthsOld,duration,thumbnail){
   let html=`
    <div class="container">
        <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">

                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${formatViews(views)} . ${monthsOld} months ago</p>
            </div>

        </div>
    </div>
   `
   document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html
}

createCard("Introduction to Backend | Sigma Web Dev #2","CodeWithHarry",70000000,18,"30:22","https://i.ytimg.com/vi/KtL-SQ20Q0s/maxresdefault.jpg"); 
createCard("Introduction to Backend | Sigma Web Dev","CodeWithHarry",70,18,"30:22","https://i.ytimg.com/vi/KtL-SQ20Q0s/maxresdefault.jpg"); 

*/


function formatViews(views) {
  if (views > 1000000) {
    return (views / 1000000).toFixed(1) + "m views";
  }
  else if (views > 1000) {
    return (views / 1000).toFixed(1) + "k views";
  }
  else {
    return views + " views";
  }
}


function formatMonthsOld(monthsOld) {
  if (monthsOld < 12) {
    if (monthsOld === 1) {
      return (monthsOld + " month ago");
    } else {
      return (monthsOld + " months ago");
    }
  }
  else {
    let years = Math.floor(monthsOld / 12);
    if (years === 1) {
      return (years + " year ago");
    } else {
      return (years + " years ago");
    }
  }
}

function createCard(title, cName, views, monthsOld, duration, thumbnail) {

  let html = `
  <div class="container">
        <div class="card">


            <div class="image">
                <img src="${thumbnail}"
                    alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${formatViews(views)} . ${formatMonthsOld(monthsOld)}</p>
            </div>
        </div>
    </div>
  `

  document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html
}

createCard("JavaScript Callback , promise and async/await |  - Tutorial #79", "codeWithAtharv", "727k", "12", "33:21", "callback.png");

createCard("JavaScript strings and Functions |  - Tutorial #80", "codeWithAtharv", "10100200", "9", "33:21", "string.png");










