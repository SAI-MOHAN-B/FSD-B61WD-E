// Syntax:
// function funnction_name(){return}
// This is also called as generic / Normal functions
function mul(a,b){
return a*b;
}
// Array to functions
var temp = [];
function even(arr){
for(var i=0;i<arr.length;i++){
if(arr[i]%2 == 0){
temp.push(arr[i]);
}
}
return temp;
}
console.log(even([12,13,14,15]));
// Types of functions:
// Anonymous,Arrow 

// Anonymous Syntax
// var variablename = function(){return }
// console.log(variablename());
var res =  function(a,b){
return a+b;
}
console.log(res(12,13));

// Arrow Functions:
// ES6
// Syntax: var variablename =(parameters)=> expression

// When the function involves in the single statement
var res_up =(a,b)=>a+b;
// then there is no need of return keyword in the arrow function
console.log(res_up(23,24));


// when the function involves in the multiple statement
var res =  function(a,b){
var test = 32;
console.log(test);
return a+b;
}
// then there is a need of return keyword
var res_test = ()=>{
var test = 32;
console.log(test);
return a+b;
}

