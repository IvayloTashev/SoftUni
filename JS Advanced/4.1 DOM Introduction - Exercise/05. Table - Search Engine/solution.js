function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchBox = document.getElementById("searchField");
      let tableData = Array.from(document.querySelectorAll("tbody tr"));

      for (let row of tableData) {

         if (row.textContent.includes(searchBox.value)) {
            row.classList.add("select")

         } else {
            row.classList.remove("select")
         }

      }

      searchBox.value = "";

   }

}