function weatherForecast2(input) {

    let temperature = Number(input[0]);

    if (temperature < 5) {
        console.log("unknown");
    } else if (temperature < 12.00) {
        console.log("Cold");
    } else if (temperature < 15.00) {
        console.log("Cool");
    } else if (temperature < 20.10) {
        console.log("Mild");
    } else if (temperature < 26.00) {
        console.log("Warm");
    } else if (temperature <= 35.00) {
        console.log("Hot");
    } else {
        console.log("unknown");
    }
}

weatherForecast2(["37"])