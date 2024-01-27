function search() {

   let towns = Array.from(document.querySelectorAll('#towns li'));
   let searchText = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let matchCounter = 0;


   for (let town of towns) {

      if (town.textContent.includes(searchText)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matchCounter++;

      } else {
         town.style.fontWeight = '';
         town.style.textDecoration = '';
      }
   }

   result.textContent = `${matchCounter} matches found`

}