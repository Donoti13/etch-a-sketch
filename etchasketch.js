
const container = document.getElementById("container");

function makeRows(rows, cols) {

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

        for (c = 0; c < (rows * cols); c++) {

            let cell = document.createElement("div");
            cell.innerText = (c +1);
            container.appendChild(cell).className = "grid-item";
        };
};

makeRows(16, 16);


  











/*
//SETS IMPORANT CONSTANTS AND VARIABLES
const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");



//CREATES DEFAULT GRID SIZES 16x16

function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}



//TAKES (rows, columns) INPUT AND MAKES A GRID and CREATE ROWS WITH LOOP

function makeRows(rowNum) {
    for (r =0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    }
}


//CREATE COLUMNS

function makeColumns(cellNum) {

    for (i = 0; i < rows.length; i++) {

        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        }
    }
}

*/





