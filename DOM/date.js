var div = document.createElement("div");
div.className = "main";
var input = document.createElement("input");
input.setAttribute("type","date");
input.id = "dob";
var button = document.createElement("button");
button.setAttribute("type","button");
button.className = "btn btn-primary";
button.innerHTML = "Display Data";
button.addEventListener("click",date_generator)
div.append(input,button)
document.body.append(div);
function date_generator(){
    var res = document.getElementById("dob").value;
    var inputdate = new Date(res);
    var currentdate =  new Date();
    console.log(inputdate,currentdate);
    // finding out the millisec difference
    var millisecdiff = parseInt(currentdate.getTime() - inputdate.getTime());
    console.log(millisecdiff);
    // find out the seconds diff
    var secdiff = Math.floor(millisecdiff/1000);
    console.log(secdiff);
    // find out the minute diff
    var mindiff = Math.floor(secdiff/60);
    console.log(mindiff);
    // find out the  hours difference
    var hrdiff = Math.floor(mindiff/60);
    console.log(hrdiff);
    // find out the day diff
    var daydiff = Math.floor(hrdiff/24)
   console.log(daydiff);
   // find out the year diff
   var yeardiff = currentdate.getFullYear() - inputdate.getFullYear();
   console.log(yeardiff);
   // find out the month diff 
   var monthdiff = (yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
   console.log(monthdiff);
}
