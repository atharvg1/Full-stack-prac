function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log("fetched data :",data);

    }).catch((error)=>{
        console.log("error occured :",error);
    });
}

setInterval(fetchData,5000);
