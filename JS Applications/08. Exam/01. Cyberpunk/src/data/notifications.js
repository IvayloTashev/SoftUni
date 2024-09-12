const container = document.getElementById("notifications");
const div = document.getElementById("errorBox");
const span = document.querySelector("span.msg");

export function notification(message) {
    container.style.display = "block";
    div.style.display = "block";
    
    span.textContent = message;
}