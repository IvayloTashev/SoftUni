import { html, render } from "./node_modules/lit-html/lit-html.js";

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchFieldRef = document.getElementById("searchField");
   const root = document.querySelector("table.container tbody");
   const url = `http://localhost:3030/jsonstore/advanced/table`;

   update()

   function tableInfoTemp(person, search) {

      if (search) {
         if (person.firstName.toLowerCase().includes(search.toLowerCase()) || 
             person.lastName.toLowerCase().includes(search.toLowerCase()) || 
             person.email.toLowerCase().includes(search.toLowerCase()) || 
             person.course.toLowerCase().includes(search.toLowerCase())) {
            return html`
            <tr class="select">
               <td>${person.firstName} ${person.lastName}</td>
               <td>${person.email}</td>
               <td>${person.course}</td>
            </tr>
            `
         }
      }

      return html`
      <tr>
         <td>${person.firstName} ${person.lastName}</td>
         <td>${person.email}</td>
         <td>${person.course}</td>
      </tr>`
   }

   async function update(search) {
      let response = await fetch(url);
      let data = await response.json()
      renderer(data, search)
   }

   function renderer(data, search) {
      let result = Object.values(data).map(person => tableInfoTemp(person, search))
      render(result, root);
   }

   function onClick() {
      let search = searchFieldRef.value;
      update(search);
      searchFieldRef.value = ""
   }
}

solve()