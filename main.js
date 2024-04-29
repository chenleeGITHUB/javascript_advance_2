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

        function clearData() {
            document.getElementById('firstName').value = '';
            document.getElementById('middleName').value = '';
            document.getElementById('lastName').value = '';
            document.getElementById('age').value = '';
        }

        function displayData() {
            const table = document.getElementById('userTable');
            const deleteAllBtn = document.getElementById('deleteAllBtn');
            const tableBody = document.getElementById('userTableBody');
            table.style.display = 'block'; // Display the table
            deleteAllBtn.style.display = 'block'; // Display the delete all button
            
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