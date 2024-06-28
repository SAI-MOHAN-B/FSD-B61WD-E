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

write a  anonymous function which gives the unique number in the array
Input:var arr=[1,1,2,3,4,5,6,7,4,3,2,5,6];
Ouput:7 

// Input:var arr=[1,1,2,3,4,5,6,7,4,3,2,5,6];
// Ouput:7 
var arr=[1,1,2,3,4,5,6,7,4,3,2,5,6];
var temp = {};
var res=  function(arr){
for(var i=0;i<arr.length;i++){
var ele = arr[i];
if(temp[ele]){
temp[ele]+=1
}
else{
temp[ele] = 1;  
}
}
// Apply for in loop for tempp object
for(var key in temp){
if(temp[key] == 1){
return key;
break;
}
}
}
console.log(res(arr));



// IIFE:
// immediately Invoked function execution
// there is no return keyword here

// Syntax: (function(){})()
(function(x,y){
  console.log(x+y);
})(12,13);

// Exception:
var res = (function(x,y){
  return x*y;
  })(34,54);
console.log(res);
