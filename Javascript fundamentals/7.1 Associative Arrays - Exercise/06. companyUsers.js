function companyUsers(input) {

    let companyEmployees = {};

    for (let tokens of input) {

        let [company, employee] = tokens.split(` -> `);

        if (company in companyEmployees) {
            if (!companyEmployees[company].includes(employee)) {
                companyEmployees[company].push(employee);
                
            }
        } else {
            companyEmployees[company] = [employee];
        }
    }

    let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, employees] of entries) {
        console.log(company);
        employees.forEach((employee) => console.log(`-- ${employee}`));
    }

}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])