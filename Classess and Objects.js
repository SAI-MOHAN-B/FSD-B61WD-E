// Engine,4 tyres, color,steering
// class is a keyword needed to create the class
class Car{
// Constructor is a special way of assigning values to 
// Objects
constructor(color,brand){
this.color = color;
this.brand = brand;
}
print_color(){
return "the color of the car is"+this.color;
}
set_color(br){
this.brand = br;
return "the updated brand value is"+this.brand;
}

}

// Object:
var c1 = new Car("white","Audi");
// new is a inbuilt word
// it will create a object
var c2 =  new Car("black","RollceRoyce");
// if we  write a function within the class 
// then we call it as method
// there is no keyword called function

// Syntax: referencevariable.methodname()
console.log(c1.print_color());
// setters:
// Updating the values
// Syntax: referencevariable.methodname(value)
console.log(c1.set_color("porsche"));


// Ectra Note
var obj = {
  name:"guvi",
  age:23
}
var res = Object.keys(obj);
for(var i = 0;i<res.length;i++){
console.log(obj[res[i]]);
}


var arr = [12,13,14,15];
for(var i of arr){
console.log(i);
}
// This loop doesn't work on indexes
// They work on the array elements
// This is uni direction



// For-in loop
// Only for Objects
//  Undirection
var obj1 = {
  name:"guvi geek",
  age:25
}
for(var key in obj1){
console.log(obj1[key]);
}
