function notify(message) {
  let notificationRef = document.getElementById(`notification`);
  notificationRef.textContent = message;
  notificationRef.style.display = "block";

  notificationRef.addEventListener("click", onClickHandler)

  function onClickHandler(event) {
    notificationRef.style.display = "none";
  }
}

