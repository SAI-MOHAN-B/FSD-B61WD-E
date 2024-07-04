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
