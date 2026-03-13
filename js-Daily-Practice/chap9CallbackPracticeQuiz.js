console.log("This is promise")

let prom1 = new Promise((resolve, reject) => {
   ;
   let a = Math.random();

   if (a > 0.5) {
      reject("No random number has generated ");

   } else {
      setTimeout(() => {
         console.log("Ye it's done")
         resolve("Atharv")
      }, 1000);
   }
});

prom1.then((value) => {
   console.log(value);
}).catch((err) => {
   console.log(err);
})


let prom2 = new Promise((resolve, reject) => {
   let b = Math.random();
   if (b < 0.5) {
      reject("no random number was there 2");
   } else {
      setTimeout(() => {
         console.log("Yes it's done 2");
         resolve("Atharv 2");
      }, 2000);
   }
}
);

prom2.then((value) => {
   console.log(value);
}).catch((err) => {
   console.log(err);
})

/*let prom3=new Promise((resolve,reject)=>{
   let c=Math.random();
   if(c<0.5){
       reject("no random number was there 3");
 }else{
    setTimeout(()=>{
       console.log("Yes it's done 3");
       resolve("Atharv3");
    },1000);
 }
}) ;

prom3.then((value)=>{
   console.log(value);
}).catch((err)=>{
   console.log(err);
})
*/

let p3 = Promise.allSettled([prom1, prom2,]);

p3.then((value) => {
   console.log(value);
}).catch((err) => {
   console.log(err);
}).finally(() => {
   console.log("All promises are settled");
})

async function getData() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve("data received", 455);
      }, 1000);
   });
}

async function main() {
   console.log("fetch data started");
   console.log(await getData());
   console.log("data fetch ended");

   console.log("Task 2");
}
main();