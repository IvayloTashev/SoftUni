function employees(arr) {

    let employee = {};

    for (let name of arr) {
        let employeeName = name
        let employeeNum = employeeName.length;

        employee = { name: employeeName, phone: employeeNum }

        console.log(`Name: ${employee.name} -- Personal Number: ${employee.phone}`);
    }

}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])