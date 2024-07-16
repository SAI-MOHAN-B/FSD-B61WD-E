//Table Creation
function create_th(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele;
}
function create_tr(){
var row = document.createElement("tr")
return row;
}
function create_td(tagname,content){
var ele = document.createElement(tagname);
ele.innerHTML = content;
return ele;
}
var table = document.createElement("table");
table.className = "table";
// for thead
var thead =  document.createElement("thead");
var thead_tr = create_tr();
var th1 = create_th("th","scope","col","#");
var th2 = create_th("th","scope","col","First");
var th3 = create_th("th","scope","col","Middle");
var th4 = create_th("th","scope","col","last");
thead_tr.append(th1,th2,th3,th4);
thead.append(thead_tr);


// for tbody
var tbody =  document.createElement("tbody");
var tbody_tr = create_tr();
var td1 = create_th("th","scope","row","1");
var td2 = create_td("td","Mark");
var td3 = create_td("td","Otto");
var td4 = create_td("td","@odo");

tbody_tr.append(td1,td2,td3,td4);
tbody.append(tbody_tr);

table.append(thead,tbody);
document.body.append(table);


// using Functional Based Approaches for rform elements
function label_create(tagname,attrname,attrvalue,content){
var ele = document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML = content;
return ele;
}

function br_create(){
    var break_ele = document.createElement("br");
    return break_ele;
}

function input_create(tagname,attrname,attrvalue,attrname1,attrvalue1){
var input_ele = document.createElement(tagname)
input_ele.setAttribute(attrname,attrvalue)
input_ele.setAttribute(attrname1,attrvalue1);
return input_ele;
}

var email = label_create("label","for","email","Email");
var line_break = br_create();
var email_input = input_create("input","type","email","id","email");

document.body.append(email,line_break,email_input);

// var container = label_create("div","class","container","");
// var row  = label_create("div","class","row","");
// var col = label_create("div","class","col","this is col-1");

// row.append(col);
// container.append(row);
// document.body.append(container);

