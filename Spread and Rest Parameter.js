// Spread Operator
// ...

// expanding the arrays
function foo(a,b){
return a+b;
}
let arr = ["hello","guvi"]
console.log(arr);
console.log(...arr);
console.log(foo(...arr));

// Strings:
var str = "guvi geek"
var res = [...str]
console.log(res);


// Combining the arrays
var arr1  = ["abc","def"]
var arr2 = ["ghi","jkl"]
var arr3 = [...arr1,...arr2]
console.log(arr3);


// combining the objects
let obj1 = {name:"guvi",age:23}
let obj2 = {...obj1,sal:34000,year:2018}
console.log(obj2);
