function generateReport() {

    let checkboxes = Array.from(document.querySelectorAll('input[type=checkbox]'));
    let rows = Array.from(document.querySelectorAll('tbody tr'));

    function createReportObject(row, checkedCheckboxes) {
        let data = {};
        checkedCheckboxes.forEach((checkbox, index) => {
            if (checkbox.checkboxes) {
               data[checkbox.name] = row.children[index].textContent;
            }
        });
        
        return data;
    }

    function processRows(rows, checkedCheckboxes) {
        return rows.map(row => createReportObject(row, checkedCheckboxes));
    }

    let result = processRows(rows, checkboxes);
    document.getElementById('output').value = JSON.stringify(result);
}