async function getInfo() {

    const StopIdRef = document.getElementById(`stopId`);
    const divStopNameRef = document.getElementById(`stopName`);
    const bussUlRef = document.getElementById(`buses`);

    const URL = `http://localhost:3030/jsonstore/bus/businfo/`;

    bussUlRef.innerHTML = "";
    divStopNameRef.textContent = "";

    try {
        let request = await fetch(URL + StopIdRef.value);
        let data = await request.json()
    
        divStopNameRef.textContent = data.name;

        for (let [busId, time] of Object.entries(data.buses)) {
            let li = document.createElement(`li`);
            li.textContent = `Bus ${busId} arrives in ${time} minutes`;
            bussUlRef.appendChild(li);
        }

    } catch (error) {
        divStopNameRef.textContent = `Error`;
    }

    StopIdRef.value = "";

}