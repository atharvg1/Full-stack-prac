function word(type,index){
    if(type=="adj"){
        if(index == 0) return "Agile";
        if(index == 1) return "Bold";
        if(index == 2) return "Cosmic";
        if(index == 3) return "Dynamic";
        if(index == 4) return "Eternal";
        if(index == 5) return "Infinite";
        if(index == 6) return "Innovative";
        if(index == 7) return "Luminous";
        if(index == 8) return "Prime";
         return "Strategic";
        
    }
    
    if(type=="shop"){
        if(index==0) return "Studio";
        if(index==1) return "Labs";
        if(index==2) return "Creations";
        if(index==3) return "Solutions";
        if(index==4) return "Ventures";
        if(index==5) return "Foundry";
        if(index==6) return "Desings";
        if(index==7) return "Hub";
        if(index==8) return "Collective";
         return "Hub";
    }

    if(type=="other"){
        if(index==0) return "Vibe";
        if(index==1) return "Echo";
        if(index==2) return "Forge";
        if(index==3) return "Peak";
        if(index==4) return "Axis";
        if(index==5) return "Flow";
        if(index==6) return "Arc";
        if(index==7) return "Bloom";
        if(index==8) return "Grove";
         return "Apex";
    
    }
}

function generateName(){
       
      let output="";
      let wordCount=prompt("How many words do you want in the name? (1 , 2 , 3)");
      let total;
      if(wordCount==1){
        total=5;
      }else{
        total=10;
      }
      for(let x=0;x<total;x++){
        let a=Math.floor(Math.random()*10);
        let s=Math.floor(Math.random()*10);
        let o=Math.floor(Math.random()*10);

         let name= "";
         if(wordCount==1)   {
            name=word("adj",a);
         }
         else if(wordCount==2){
            name=word("adj",a)+" "+word("shop",s);
         }else if(wordCount==3){
            name=word("adj",a)+" "+word("shop",s)+" "+word("other",a);
         }else{
            alert("Choose form 1 , 2 or 3 no longer names good for businees mostly!")
            return;
         }

         output=output+name+"<br>";
      }
      document.getElementById("output").innerHTML=output;
}