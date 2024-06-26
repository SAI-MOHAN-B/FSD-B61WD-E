var obj = {
  name:"guvi",
  age:23,
  year:2018,
  attendance:["mon","tue"]
}
// How to access it?
// To access  the Objects we need the keyname

// 2 ways we can access the value inside the object

// Dot Method:
// .
// Syntax:objectname.keyname
// is the most common method across all the langauages
console.log(obj.age);
console.log(obj.year);
console.log(obj.attendance[0]);
// How to add the k:v pair
//Syntax:objectname.keyname = value
obj.gender = "male"
// nested Object
obj.place = {namedata:"sanfranscio"}
//Update:
//Syntax:objectname.keyname = value
obj.age = 24;
// Delete:
// Assuming need to remove the year
// Syntax: delete objectname.keyname
delete obj.year

//Box Method:
// Syntax:objectname["keyname"]
// this is used when you have for-in loop

// it is applicable to key-value pairs
// Syntax:for(var key in Objectname){}
// here key represents the Object keys
for(var i in obj){
 console.log(i,obj[i]); 
}
var test = obj.place;
for(var j in test){
  console.log(test[j]);
}

// Copy By Value
// They are applicable to primitive data types..
// They are not affecting the original values
var a = 32;
var b = 33;
var c = 34;
var c = b;
console.log(c);
console.log(a);
console.log(b);
// a -32
//b -33
// c-33
// Copy By Reference:
// They are applicable to arrays as well as objects
var arr = [23,24,25]
var res = arr;
res[0] = 34;
console.log(res);
5.Write a JavaScript program to find the most frequent item of an array.
Sample array: 
var arr1=[3, 'q', 'q', 'q', 2, 3, 'q', 3, 'q', 2, 4, 9, 3];
Sample Output: q ( 5 times )

var obj = {};
var count=0;
var maxele;
var arr =[3, 'q', 'q', 'q', 2, 3, 'q', 3, 'q', 2, 4, 9, 3];
for(var i=0;i<arr.length;i++){
var ele = arr[i];
if(obj[ele]){
obj[ele]+=1;
count++;
}
else{
obj[ele]=1
}
if(obj[ele]>count){
var freq = obj[ele]
maxele = ele;
}
}

console.log("element occured "+maxele);
