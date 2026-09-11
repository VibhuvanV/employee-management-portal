function addEmployee() {
    let name = document.getElementById("employeeName").value;

    let li = document.createElement("li");
    li.innerText = name;

    document.getElementById("employeeList").appendChild(li);
}