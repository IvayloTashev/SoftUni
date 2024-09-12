
function getUserData() {
    return JSON.parse(localStorage.getItem("user"));
}

function setUserData(data) {
    localStorage.setItem("user", JSON.stringify(data));
}

function clearUserData() {
    localStorage.removeItem("user")
}

//TODO add custom validation
function createSubmitHandler(callback){
    return function(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = [...formData.entries()].map(([k, v]) => [k, v.trim()]);

        callback(Object.fromEntries(data), event.target);
    }
}

function updateNav() {
    const userData = getUserData();

    document.querySelector("nav .user").style.display = userData ? "block" : "none";
    document.querySelector("nav .guest").style.display = userData ? "none" : "block";
}

export {
    getUserData,
    setUserData,
    clearUserData,
    createSubmitHandler,
    updateNav,
}
