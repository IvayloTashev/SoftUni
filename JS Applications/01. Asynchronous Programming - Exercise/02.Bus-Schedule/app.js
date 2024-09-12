function solve() {

    const url = `http://localhost:3030/jsonstore/bus/schedule/`;
    const InfoSpanRef = document.querySelector(`#info span`);
    const departBtnRef = document.getElementById(`depart`);
    const arivetBtnRef = document.getElementById(`arrive`);

    let stops = {
        currentStop: "",
        nextStop: "depot"
    }

    async function depart() {

        try {
            let req = await fetch(url + stops.nextStop);
            let data = await req.json()
            stops.currentStop = data.name;
            stops.nextStop = data.next;
            InfoSpanRef.textContent = `Next stop ${data.name}`;
            departBtnRef.disabled = true;
            arivetBtnRef.disabled = false;

        } catch (error) {
            InfoSpanRef.textContent = `Error`;
            departBtnRef.disabled = true;
            arivetBtnRef.disabled = true;
        }

    }

    function arrive() {
        InfoSpanRef.textContent = `Arriving at ${stops.currentStop}`;
        departBtnRef.disabled = false;
        arivetBtnRef.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();