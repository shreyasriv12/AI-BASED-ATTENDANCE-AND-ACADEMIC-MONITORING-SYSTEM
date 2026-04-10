let students = JSON.parse(localStorage.getItem("students")) || []

document.getElementById("registerForm").addEventListener("submit",function(e){

e.preventDefault()

let name=document.getElementById("name").value
let roll=document.getElementById("roll").value
let branch=document.getElementById("branch").value

let student={
name:name,
roll:roll,
branch:branch
}

students.push(student)

localStorage.setItem("students",JSON.stringify(students))

displayStudents()

})

function displayStudents(){

let table=document.getElementById("table")

table.innerHTML=`
<tr>
<th>Name</th>
<th>Roll</th>
<th>Branch</th>
<th>Action</th>
</tr>
`

students.forEach(function(s,index){

let row=table.insertRow()

row.insertCell(0).innerText=s.name
row.insertCell(1).innerText=s.roll
row.insertCell(2).innerText=s.branch

let btn=document.createElement("button")
btn.innerText="Delete"

btn.onclick=function(){
deleteStudent(index)
}

row.insertCell(3).appendChild(btn)

})

}

function deleteStudent(index){

students.splice(index,1)

localStorage.setItem("students",JSON.stringify(students))

displayStudents()

}

function searchStudent(){

let value=document.getElementById("search").value.toLowerCase()

let filtered=students.filter(function(s){

return s.name.toLowerCase().includes(value)

})

let table=document.getElementById("table")

table.innerHTML=`
<tr>
<th>Name</th>
<th>Roll</th>
<th>Branch</th>
<th>Action</th>
</tr>
`

filtered.forEach(function(s){

let row=table.insertRow()

row.insertCell(0).innerText=s.name
row.insertCell(1).innerText=s.roll
row.insertCell(2).innerText=s.branch

})

}

displayStudents()
