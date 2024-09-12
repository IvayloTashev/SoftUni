class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {

        for (let person of candidates) {
            let [name, education, yearsExperience] = person.split(`-`);
            yearsExperience = Number(yearsExperience);

            let data = this.jobCandidates.find(x => x.name == name);

            if (!data) {
                let obj = {
                    name,
                    education,
                    yearsExperience
                }
                this.jobCandidates.push(obj);

            } else {
                if (yearsExperience > data.yearsExperience) {
                    data.yearsExperience = yearsExperience;
                }
            }
        }

        let result = []

        for (let person of this.jobCandidates) {
            result.push(person.name);
        }

        return `You successfully added candidates: ${result.join(`, `)}.`
    }

    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split(`-`);
        let data = this.jobCandidates.find(x => x.name == name);

        if (!data) {
            throw new Error(`${name} is not in the candidates list!`);
        } else {
            if (minimalExperience > data.yearsExperience) {
                throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
            } else {
                data.yearsExperience = "hired";
                return `Welcome aboard, our newest employee is ${name}.`
            }
        }
    }

    salaryBonus(name) {
        let data = this.jobCandidates.find(x => x.name == name);

        if (!data) {
            throw new Error(`${name} is not in the candidates list!`);
        } else {
            if (data.education == "Bachelor") {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
            } else if (data.education == "Master") {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
            } else {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
            }
        }
    }

    candidatesDatabase() {
        let result = [];

        if (this.jobCandidates.length == 0) {
            throw new Error(`Candidate Database is empty!`)
        }

        this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));

        result.push(`Candidates list:`)

        for (let person of this.jobCandidates) {
            result.push(`${person.name}-${person.yearsExperience}`);
        }

        return result.join(`\n`);

    }

}

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());


/*
You successfully added candidates: John Doe, Peter Parker, Jordan Cole, Daniel Jones.
Welcome aboard, our newest employee is John Doe.
Welcome aboard, our newest employee is Peter Parker.
Welcome aboard, our newest employee is Jordan Cole.
Jordan Cole will sign a contract for Google, as Strategy Analyst with a salary of $40,000 per year!
John Doe will sign a contract for Google, as Strategy Analyst with a salary of $50,000 per year!
Candidates list:
Daniel Jones-18
John Doe-hired
Jordan Cole-hired
Peter Parker-hired
*/
