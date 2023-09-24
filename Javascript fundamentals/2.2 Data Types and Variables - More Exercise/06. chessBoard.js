function chessBoard(num) {
    let print = ``;
    print = `<div class="chessboard">\n`;

    for (let j = 1; j <= num; j++) {

        let row = "";
        row += `  <div>\n`;

        for (let i = 1; i <= num; i++) {
            let color = (i + j) % 2 ? `white` : `black`;

            row += `    <span class="${color}"></span>\n`;
        }
        row += `  </div>\n`;
        print += row;
    }

    print += `</div>`;

    console.log(print);

}

chessBoard(3)

