function summarizePerson(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    middleName?: string,
    hobbies?: string[],
    workInfo?: [string, number]
): [number, string, number, string, string] {

    const fullname = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;
    const personHobbies = hobbies ? hobbies.join(', ') : '-';
    const personWorkInfo = workInfo ? workInfo.join(' -> ') : '-';

    return [id, fullname, age, personHobbies, personWorkInfo]

}

console.log(summarizePerson(21, 'Kristine', 'Neva', 23, ''));
