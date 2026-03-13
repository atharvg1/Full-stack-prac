const randomDelay=()=>{
    return new Promise((resolve,reject)=>{
        let timeout=1+4*Math.random();
        setTimeout(()=>{
            resolve();
        },timeout*1000);
    });
}

const addItem=async(text,shouldBlink)=>{
 let div=document.createElement("div");
 div.innerHTML=text;
 document.body.append(div);

 let dots=1;
 let intervalID;
 if(shouldBlink){
     intervalID=setInterval(()=>{
         if(dots>3){
             dots=1;
            }
            div.innerHTML=`>>> ${text} ${" .".repeat(dots)}`;
            dots++;
        },400);
        
    }
     await randomDelay();
     if(shouldBlink){
        clearInterval(intervalID);
        div.innerHTML=text;
     }
}
    

async function main(){

    let data=["Initializing hacking",
        "Reading your files",
        "Password files detected",
        "Sending data to server",
        "Cleaning files"];
        for(const items of data){
           await addItem(items,true);
        }

        await addItem("Done",false);
    }
    main();
        