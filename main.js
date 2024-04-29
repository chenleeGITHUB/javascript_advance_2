let userData = [];

function insertData() {
    const firstName = document.getElementById('firstName').value.trim();
    const middleName = document.getElementById('middleName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const age = document.getElementById('age').value.trim();

    if (firstName === '' || lastName === '' || isNaN(age) || age === '') {
        alert("Please enter valid details.");
        return;
    }

    userData.push({ firstName, middleName, lastName, age });
    displayData();
}

function checkTableRows() {
    var table = document.getElementById("userTable");
    var tbody = table.getElementsById("userTableBody")[0];
    var rows = tbody.getElementsByTagName("tr");
    
   
    if (rows.length > 0) {
        table.getElementsByTagName("thead")[0].style.display = "table-header-group";
    } else {
        table.getElementsByTagName("thead")[0].style.display = "none";
    }
}

checkTableRows();









function clearData() {
    document.getElementById('firstName').value = '';
    document.getElementById('middleName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('age').value = '';
}

function displayData() {
    const tableBody = document.getElementById('userTableBody');
    tableBody.innerHTML = '';
    userData.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.firstName}</td>
            <td>${user.middleName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td><button onclick="deleteRow(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteRow(index) {
    userData.splice(index, 1);
    displayData();
}

function deleteAll() {
    userData = [];
    displayData();
}