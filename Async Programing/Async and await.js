// Using 2 API 
async function foo() {
    try {
        let res = await fetch("https://restcountries.com/v3.1/all");
        let res1 = await res.json();
        console.log(res1);
        for (var i = 0; i < res1.length; i++) {
            let latval = res1[i].latlng;
            data(...latval)
        }

    }
    catch (error) {
        console.log(error);
    }
}

// Open weather Map Data
async function data(lat, lon) {
    try {
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=`);
        let data1 = await data.json();
        console.log(`The temp is ${data1.main.temp}`);
    } catch (error) {
        console.log(error);
    }
}
foo();
Async and Await:
It is a Syntatic  Sugar Way of writing the promises easier
It makes easier to write the promises

It is applied to functions only
A normal function can be converted into async function 
by applying the keyword called async

An Async Function always returns the promises

fetch("API");

Same concept here also 

here .then() is replaced with the await keyword
await is used within the async function
await helps us to wait until the promises are getting resolved



async function  foo(){
   let res =  await fetch("https://restcountries.com/v3.1/all");
   let res1 = await res.json();
   console.log(res1);
}
foo();

How to handle the rejections:
we use the error handling statements
try-catch()
try{

}
catch(){

}


function bar(){
    return new Promise((resolve,reject)=>setTimeout(resolve("This is resolved"),3000));
}
function trt(){
    return new Promise((resolve,reject)=>setTimeout(reject("This is rejected"),3000));
}


async function  foo(){
try {
    let res =  await bar();
    console.log(res);
    let res2 = await trt();
    console.log(res2);
 }
 catch (error) {
  console.log(error);  
 }
}
foo();

API BASED HANDLUING

async function foo() {
    try {
        let res = await fetch("https://restcountries.com/v3.1/all");
        let res1 = await res.json();
        console.log(res1);

    }
    catch (error) {
        console.log(error);
    }
}
foo();

var p1 =  new Promise((resolve,reject)=>{
    if(5>4){
        setTimeout(()=>resolve("This is a p1 resolved"),3000)
    }
    else{
        setTimeout(()=>reject("This is p1 rejected"),4000)
    }
});

var p2 =  new Promise((resolve,reject)=>{
    if(5>4){
        setTimeout(()=>resolve("This is a p2 resolved"),4000)
    }
    else{
        setTimeout(()=>reject("This is p2 rejected"),5000)
    }
});


var p3 =  new Promise((resolve,reject)=>{
    if(5<4){
        setTimeout(()=>resolve("This is a p3 resolved"),5000)
    }
    else{
        setTimeout(()=>reject("This is p3 rejected"),2000)
    }
});

async function foo(){
   try {
    let res = await Promise.all([p1,p2,p3]);
    console.log(res);
   } catch (error) {
    console.log(error);
   }
}
foo();

Promise.all Not being executed when an error has been thrown
var p1 = Promise.resolve("This is always resolved");
var p2 = async ()=> {
 throw new Error("This is a reject state")
}
var p3 = Promise.resolve("This is a resolved promise  twice");

Promise.all([p1,p2(),p3]).then((data)=>console.log(data)).catch((error)=>console.log(error))
