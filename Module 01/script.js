//XML-HTTP Request
// They are used to interact with the server via api


// Step 01: Create a XHR Object
var request = new XMLHttpRequest();
// I am  going to perform the interaction with you thrrough XHR

// Step 02: Request Through the URL / Open a request
request.open("GET","https://restcountries.com/v3.1/all")

// Step 03: Initiate a request
request.send();

//Step 04: Once the data is there in the server
// if the request is successfull,
// then server responds with a status code 200

// An even is a specific task

request.onload = function(){
var result = JSON.parse(request.response);
console.log(result);

// Using the above logic,print all the 250 country names in console
for(var i=0;i<result.length;i++){
console.log(result[i].name.common)
}
// Using the above logic,print all the countries capital,region in console
for(var i=0;i<result.length;i++){
    console.log(result[i].region,result[i].capital);
    }

}