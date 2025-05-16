"use strict";
function summarizePerson(id, firstName, lastName, age, middleName, hobbies, workInfo) {
    const fullname = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;
    const personHobbies = hobbies ? hobbies.join(', ') : '-';
    const personWorkInfo = workInfo ? workInfo.join(' -> ') : '-';
    return [id, fullname, age, personHobbies, personWorkInfo];
}
console.log(summarizePerson(21, 'Kristine', 'Neva', 23, ''));
//# sourceMappingURL=05.%20summarizePerson.js.map