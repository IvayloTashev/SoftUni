function filterEmployees(data, criteria) {

  let inputData = JSON.parse(data);
  let [criteriaKey, criteriaValue] = formatingCriteria(criteria);

  let counter = 0;
  
  for (let person of inputData) {

    if (person[criteriaKey] == criteriaValue) {
      console.log(`${counter}. ${person.first_name} ${person.last_name} - ${person.email}`);
      counter++;
    }

  }

  function formatingCriteria(str) {
    let result = [];
    let [key, value] = str.split(`-`);
    result.push(key, value);
    return result;
  }

}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female')