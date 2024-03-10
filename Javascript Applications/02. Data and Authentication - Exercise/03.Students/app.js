document.addEventListener('DOMContentLoaded', () => {
    attachEvents();
    loadStudents();
});

function attachEvents() {
    document.getElementById('submit').addEventListener('click', async (event) => {
        event.preventDefault(); 
        await createStudent();
        await loadStudents(); 
    });
}

const tableBodyRef = document.querySelector(`#results tbody`);
let URL = `http://localhost:3030/jsonstore/collections/students`;

async function loadStudents() {
    tableBodyRef.innerHTML = "";

    let response = await fetch(URL);
    let data = await response.json();

    for (let student of Object.values(data)) {
        let firstName = student.firstName;
        let lastName = student.lastName;
        let number = student.facultyNumber;
        let grade = student.grade;

        let tr = document.createElement(`tr`);

        let tdFirstName = createTdElement(firstName)
        let tdLastName = createTdElement(lastName)
        let tdNumber = createTdElement(number)
        let tdGrade = createTdElement(grade)

        tr.appendChild(tdFirstName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdNumber);
        tr.appendChild(tdGrade);

        tableBodyRef.appendChild(tr);
    }

    function createTdElement(studentInfo) {
        let td = document.createElement(`td`);
        td.textContent = studentInfo;
        return td;
    }
}

async function createStudent() {
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const facultyNumber  = document.querySelector('input[name="facultyNumber"]').value;
    const grade = document.querySelector('input[name="grade"]').value;

    if (!firstName || !lastName || !facultyNumber || !grade) {
        return;
    }

    let student = {
        firstName,
        lastName,
        facultyNumber,
        grade: grade
    };

    await fetch(URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(student)
    });

    firstName.value = "";
    lastName.value = "";
    facultyNumber.value = "";
    grade.value = "";
}
