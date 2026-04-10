let records = JSON.parse(localStorage.getItem("records")) || [];

displayRecords();

document.getElementById("form").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let attendance = document.getElementById("attendance").value;
let marks = document.getElementById("marks").value;

let result = "";

if (attendance > 75 && marks > 50){
result = "Good";
}
else if (attendance > 50){
result = "Average";
}
else{
result = "Poor";
}

let record = {
name:name,
attendance:attendance,
marks:marks,
result:result
};

records.push(record);

localStorage.setItem("records", JSON.stringify(records));

displayRecords();

});

function displayRecords(){

let table = document.getElementById("table");

table.innerHTML = `
<tr>
<th>Name</th>
<th>Attendance</th>
<th>Marks</th>
<th>Performance</th>
<th>Action</th>
</tr>
`;

records.forEach(function(r,index){

let row = table.insertRow();

row.insertCell(0).innerText = r.name;
row.insertCell(1).innerText = r.attendance;
row.insertCell(2).innerText = r.marks;
row.insertCell(3).innerText = r.result;

let btn = document.createElement("button");
btn.innerText = "Delete";

btn.onclick = function(){
deleteRecord(index)
}

row.insertCell(4).appendChild(btn);

});

loadChart();   // Graph update

}

function deleteRecord(index){

records.splice(index,1);

localStorage.setItem("records", JSON.stringify(records));

displayRecords();

}

function logout(){

alert("Logged out successfully");

window.location.href = "login.html";

}

function loadChart(){

let names = records.map(r => r.name);
let marks = records.map(r => r.marks);

let ctx = document.getElementById("chart");

new Chart(ctx,{
type:"bar",
data:{
labels:names,
datasets:[{
label:"Student Marks",
data:marks
}]
}
});

}
