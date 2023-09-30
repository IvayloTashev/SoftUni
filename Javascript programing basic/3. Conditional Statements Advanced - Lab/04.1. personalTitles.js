function personalTitles(input){

    let age = Number(input[0]);
    let gender = input[1];

    if (age >= 16 && gender === "m"){
        console.log("Mr.");
    }
    
    if (age < 16 && gender === "m"){
        console.log("Master");
    }

    if (age >= 16 && gender === "f"){
        console.log("Ms.");
    }
    
    if (age < 16 && gender === "f"){
        console.log("Miss");
    }

}
personalTitles(["20",
"f"])

