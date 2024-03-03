
/*
let topDiv = document.createElement('div');

topDiv.textContent = "TOP DIV";

topDiv.backgroundColor = "red";

document.body.appendChild(topDiv).className = "top-div";
*/




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








const divBut = document.getElementById("buttonsdiv");

divBut.className= "div-but";



const resBut = document.getElementById("restart");

resBut.textContent = "RESTART BUTTON";

resBut.className = "restart-button";



resBut.addEventListener('click', () => {

prompt("enter number of squares for new grid:");


});



const cursorTag = document.querySelector("div.cursors");

const balls = cursorTag.querySelectorAll("div");

let aimX = 0;
let aimY = 0;

balls.forEach((ball, index) => {

    let currentX = 0;
    let currentY = 0;
    
    let speed = 0.3 - index * 0.015;


    const animate = function () {
        currentX += (aimX - currentX) * speed;
        currentY += (aimY - currentY) * speed;
        
        ball.style.left = currentX + "px";
        ball.style.top = currentY + "px";
    
    requestAnimationFrame(animate);
    
    }
    
    animate();
    
});






document.addEventListener("mousemove", function(event) {

 //   ball.style.left = event.pageX + "px";
 //   ball.style.top = event.pageY + "px";
 aimX = event.pageX;
 aimY = event.pageY;



});








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





