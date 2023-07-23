
// Creation of Promise
const ticket = new Promise(function(resolve,reject){
    const isBoarded = false;
     if(isBoarded){
        resolve("Your flight has arrived");
     }else{
        reject("you missed the flight");
     }
});

// Using the promise
ticket.then((dat)=>{
    console.log("oh yes!",dat);
})
.catch((data)=>{
    console.log("oh no!!",data);
})
.finally((data)=>{
    console.log("finally is always executed");
})
