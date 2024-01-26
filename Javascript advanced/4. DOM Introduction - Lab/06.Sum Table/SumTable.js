function sumTable() {

    let tableCells = Array.from(document.getElementsByTagName(`td`));
    let result = document.getElementById("sum");

    let totalSum = 0;

    for (let i = 1; i < tableCells.length -1; i += 2) {
        totalSum += Number(tableCells[i].textContent);
    }

    result.textContent = totalSum;

}