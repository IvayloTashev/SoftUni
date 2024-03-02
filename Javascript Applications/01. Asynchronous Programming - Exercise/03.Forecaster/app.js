function attachEvents() {

    const getButtonRef = document.getElementById(`submit`);
    getButtonRef.addEventListener(`click`, onSubmit);

    const locationRef = document.getElementById(`location`);
    const forecastDivRef = document.getElementById(`forecast`);
    const currentDivRef = document.getElementById(`current`);
    const upcomingDivRef = document.getElementById(`upcoming`);


    let URL = {
        locations: `http://localhost:3030/jsonstore/forecaster/locations`,
        today: `http://localhost:3030/jsonstore/forecaster/today/`,
        upcoming: `http://localhost:3030/jsonstore/forecaster/upcoming/`
    }

    let symbols = {
        "Sunny": `&#x2600`,
        "Partly sunny": ` &#x26C5`,
        "Overcast": `&#x2601`,
        "Rain": `&#x2614`,
        "Degrees": `&#176`
    }

    async function onSubmit(event) {
        forecastDivRef.style.display = "block"
        let userInput = locationRef.value;

        try {
            let locationResponse = await fetch(URL.locations);
            let locationData = await locationResponse.json();
            let location = locationData.find(x => x.name == userInput);
            let locationCode = location.code;

            let todayResponse = await fetch(URL.today + locationCode);
            let todayData = await todayResponse.json();
    
            let todayLocation = todayData.name;
            let todayLowTemp = todayData.forecast.low;
            let todayHighTemp = todayData.forecast.high;
            let todayCondition = todayData.forecast.condition;
    
            let currentDiv = document.createElement(`div`);
            currentDiv.classList.add(`forecasts`);
            currentDivRef.appendChild(currentDiv);
    
            let symbolSpan = document.createElement(`span`);
            symbolSpan.classList.add(`condition`);
            symbolSpan.classList.add(`symbol`);
            symbolSpan.innerHTML = symbols[todayCondition];
            currentDiv.appendChild(symbolSpan);
            
            let todayConditionSpan = document.createElement(`span`);
            todayConditionSpan.classList.add(`condition`);
            todayConditionSpan.innerHTML += `<span class="forecast-data">${todayLocation}</span>`
            todayConditionSpan.innerHTML += `<span class="forecast-data">${todayLowTemp}${symbols.Degrees}/${todayHighTemp}${symbols.Degrees}</span>`
            todayConditionSpan.innerHTML += `<span class="forecast-data">${todayCondition}</span>`
            currentDiv.appendChild(todayConditionSpan);
    
            let upcomingResponse = await fetch(URL.upcoming + locationCode);
            let upcomingData = await upcomingResponse.json();
           
            let upcomingDiv = document.createElement(`div`);
            upcomingDiv.classList.add(`forecast-info`);
            upcomingDivRef.appendChild(upcomingDiv);
    
            for (let day of upcomingData.forecast) {
                let upcomingConditionSpan = document.createElement(`span`);
                upcomingConditionSpan.classList.add(`upcoming`);
    
                let spanSymbol = document.createElement(`span`);
                spanSymbol.classList.add(`symbol`);
                spanSymbol.innerHTML = `${symbols[day.condition]}`;
                upcomingConditionSpan.appendChild(spanSymbol);
    
                let spanTemp = document.createElement(`span`);
                spanTemp.classList.add(`forecast-data`);
                spanTemp.innerHTML = `${day.low}${symbols.Degrees}/${day.high}${symbols.Degrees}`;
                upcomingConditionSpan.appendChild(spanTemp);
    
                let spanCondition = document.createElement(`span`);
                spanCondition.classList.add(`forecast-data`);
                spanCondition.textContent = day.condition;
                upcomingConditionSpan.appendChild(spanCondition);
    
                upcomingDiv.appendChild(upcomingConditionSpan);
            }
        } catch (error) {
            forecastDivRef.textContent = `Error`;
        }
    }
}

attachEvents();