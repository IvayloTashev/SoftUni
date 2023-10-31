function city(cityInfo) {

    for (let key of Object.keys(cityInfo)) {

        console.log(key, "->", cityInfo[key]);

    }

}

city({ name: "Plovdiv", area: 389, population: 1162358, country: "Bulgaria", postCode: "4000" })