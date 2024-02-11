class Company {
    constructor() {
        this.departments = {}
    }

    addEmployee(name, salary, position, department) {
        salary = Number(salary);

        if (!name || !position || !department || !salary) {
            throw new Error(`Invalid input!`);
        } else if (salary < 0) {
            throw new Error(`Invalid input!`);
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = {
                salarySum: 0,
                avrSalary: 0,
                bestSalary: 0,
                employees: []
            };
        }

        let curEmployee = { name: name, salary: salary, position: position };
        this.departments[department].employees.push(curEmployee);
        this.departments[department].salarySum += salary;

        if (this.departments[department].bestSalary < salary) {
            this.departments[department].bestSalary = salary;
        }

        this.departments[department].avrSalary = this.departments[department].salarySum / this.departments[department].employees.length;

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDep = Object.entries(this.departments).sort((a, b) => b[1].avrSalary - a[1].avrSalary)[0];
        let sortedEmployees = Object.entries(bestDep[1].employees).sort((a, b) => b[1].salary - a[1].salary || a[1].name.localeCompare(b[1].name));

        let result = `Best Department is: ${bestDep[0]}\n`;
        result += `Average salary: ${bestDep[1].avrSalary.toFixed(2)}\n`

        for (let employee of sortedEmployees) {
            result += `${employee[1].name} ${employee[1].salary} ${employee[1].position}\n`
        }

        return result.trim()
    }

}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
