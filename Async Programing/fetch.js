var res = fetch("https://restcountries.com/v3.1/all");
res.then((data) => {
    return data.json();
}).then((data1) => foo(data1))
    .catch((error) => console.log(error))

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";

function foo(data1) {
    for (var i = 0; i < data1.length; i++) {
        var col = document.createElement("div");
        col.className = "col-lg-4";
        col.innerHTML = `<div class="card border-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">${data1[i].name.common}</div>
  <div class="card-body text-primary">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>`
        row.append(col);
        container.append(row);
        document.body.append(container);
    }


}
Fetch:
How Fetch Works
GET and POST
task based on Fetch



Fetch is an Alternative to XHR
Fetch takes API url as the parameter
and it returns the Promise

Fetch is built on the Top Of Promises
Syntax: fetch("API URL")

It returns Promise
Inside the Promise Object we have the data which is in readable stream
readable stream is a packets of data

Since the data coming from the fetch is of readable stream we need to convert the data into the Object

we apply .json() method

After applying , we receive the data in terms of Promise Object

to handle the promise Object we need one more .then()

var res = fetch("https://restcountries.com/v3.1/all");
res.then((data) => {
    return data.json();
}).then((data1) => console.log(data1))
    .catch((error) => console.log(error))


Syntax:2
fetch("URL",options)
here options represents the Optional Parameters

Optional Parameter Consist of:
Methods:
GET,PUT,POST DELETE
Body: data that has to be sent as the request
Mode:
Crdenetials

when we send the data from client to server

POST:


const url = "https://66a08c177053166bcabbc6cc.mockapi.io/comments";
// using POST:
var data = {
    name:"microsoft",
    country:"usa"
}
var res = fetch(url,{
    method:'POST',
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify(data)
}).then((data)=>{
   return data.json()
}).then((data1)=>console.log(data1))
