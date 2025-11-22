
let input=document.getElementById("bookmarkInput");
let nameInput=document.getElementById("nameInput");
let addBtn=document.getElementById("addBtn");
let list=document.getElementById("bookmarkList");

addBtn.disabled=true;
input.addEventListener("input",function(){
    addBtn.disabled=input.value.trim()==="";
});

function fixURL(url){
 url=url.trim();

 if((url.startsWith("http://"))||url.startsWith("https://")){
  return url;
 }

 if(url.includes(".")){
    return "https://"+url;
   
 }

    return url;
 
}

function addBookmarkElement(url,customName){
    if(!url || typeof url !== "string")return;
    
    let div=document.createElement("div");
    div.className="bookmark-card";
    
    div.addEventListener("click", function (e) {
        if (e.target.classList.contains("deleteBtn")) return;
        window.open(url, "_blank"); 
    });

    let domain = url.replace("https://","").replace("http://","")
    .split("/")[0];

    let iconURL = "https://www.google.com/s2/favicons?sz=64&domain=" + domain;

    let icon=document.createElement("img");
    icon.src=iconURL;
    icon.className="icon";
    
    let text=document.createElement("span");

    if(customName && customName !== ""){
        text.textContent=customName;
    }else{
         let name=domain.split(".")[0];
         name=name.charAt(0).toUpperCase()+name.slice(1);
         text.textContent=name;
    }

    
    

    let delBtn=document.createElement("button");
    delBtn.textContent="x";
    delBtn.className="deleteBtn";

    delBtn.addEventListener("click",function(e){
        e.stopPropagation();
        deleteBookmark(url);
        div.remove();
    });

   
    div.appendChild(icon);
    div.appendChild(text);
    div.appendChild(delBtn);
    list.appendChild(div);
    
}

addBtn.addEventListener("click",function(){
    let url=input.value.trim();
    let customName=nameInput.value.trim();

    if(url===""){
     alert("Please Enter website url");
     return;
    }
    
    url=fixURL(url);

     if (!saveBookmark(url, customName)) {
        return;
    }
     addBookmarkElement(url,customName);
    
    input.value="";
    nameInput.value="";
    addBtn.disabled=true;
    
});

input.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        addBtn.click();
    }
});
    

function saveBookmark(url,customName){
 let bookmarks=JSON.parse(localStorage.getItem("bookmarks"))||[];

if(bookmarks.length>=15){
 alert("You can save only 15 bookmarks!");
 return false;
}

 bookmarks.push({
   url:url,
   customName:customName
 });
 localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
  
 return true;
}

function loadBookmarks(){
    let bookmarks=JSON.parse(localStorage.getItem("bookmarks"))||[];

    bookmarks.forEach(function(item){
       addBookmarkElement(item.url,item.customName);
    });
}

function deleteBookmark(url){
 let bookmarks=JSON.parse(localStorage.getItem("bookmarks"))||[];

 let update=bookmarks.filter(function(item){
    return item.url!==url;
 });
 localStorage.setItem("bookmarks",JSON.stringify(update));
}



loadBookmarks();

    

