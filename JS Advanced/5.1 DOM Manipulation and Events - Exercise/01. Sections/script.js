function create(words) {

   let contentRef = document.getElementById(`content`);

   for (let word of words) {
      let divElement = document.createElement(`div`);
      divElement.addEventListener(`click`, onClickHandler)

      let pElement = document.createElement(`p`);
      pElement.textContent = word;
      pElement.style.display = `none`;

      divElement.appendChild(pElement);
      contentRef.appendChild(divElement);
   }

   function onClickHandler(event) {
      let target = event.currentTarget;
      target.children[0].style.display == `none` ? target.children[0].style.display = `block` : target.children[0].style.display = `none`;
   }

}