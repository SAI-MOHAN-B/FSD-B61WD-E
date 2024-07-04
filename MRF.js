var arr = [12,13,14,15];
// var res = [24,26,28,30];
// without disturbing the original array

// Step 01:apply for loop
// Step 02: take each element and multiply by 2
// Step 03: take the temp array and store the result
// Step 04: print the temp array

// map:
// map is a inbuilt function applicable only to arrays
// map takes function as a parameter, apply on each and every element
// of the array
// returns a new array

function foo(ele){
return ele*2;
}


var res = arr.map(foo)
console.log(res);


var result = "12 13 14".split(" ").map(Number);
console.log(result);



var arr = [12,13,14,15];
// var res = [12,14];
// without disturbing the original array

// Step 01:apply for loop
// Step 02: take each element and check whether the element is even or not
// if the element is not a even number then skip that element
// Step 03: take the temp array and store the  even result in temp array
// Step 04: print the temp array


// filter
// It is applicable to the array
// filter takes function as a parameter

// inside the function we have the condition
// that condition is applied to each and every element of the array
// if the condition is passed then it will be pushed to the 
// resultant array
// if not the element is skipped
// returns the new array
var res = arr.filter((ele)=>ele%2 == 0);
console.log(res);



var arr = [12,13,14,15];
// var res = 54;
// without disturbing the original array

// Step 01:apply for loop
// Step 02: sum = 0; 
// Step 03:apply for loop and take the sum = sum+arr[i]
// Step 04: print the sum lastly

// reduce:
// it is applicable only to arrays
// reduce takes function as a paramater
// inside the function we have two paramater
// Syntax: arr.reduce((acc,cv)=>acc+cv,0)
// here acc: is a initial value
// print the result
var res = arr.reduce((acc,cv)=>acc+cv,0);
console.log(res);
