var row = 1;

function show() {
    debugger

    let uname = document.getElementById("uname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;
    let c_pwd = document.getElementById("c_pwd").value;


}

var container = document.getElementById("container");

var newrow = container.insertRow(row);

var cell1 = newRow.insertcell(0);
var cell2 = newRow.insertcell(1);
var cell3 = newRow.insertcell(2);
var cell4 = newRow.insertcell(3);
var cell5 = newRow.insertcell(4);

cell1.innerHTML = uname;
cell2.innerHTML = lname;
cell3.innerHTML = email;
cell4.innerHTML = pwd;
cell5.innerHTML = c_pwd;

row++;
}