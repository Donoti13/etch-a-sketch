


const divBut = document.getElementById("buttonsdiv");

divBut.className= "div-but";



const resBut = document.getElementById("restart");

resBut.textContent = "SELECT BUTTON";

resBut.className = "restart-button";



const newBut = document.getElementById("restarting");

newBut.textContent = "RELOAD ORIGINAL GRID";

newBut.className = "restarting-button";





const container = document.getElementById("container");
 

//CREATE GRID

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
  function hex () {
            

            const randomColor = Math.floor(Math.random() * 1677215).toString(16);
            cell.style.backgroundColor = "#" + randomColor; 
            color.innerHTML = "#" + randomColor;
            cell = hex;
        }
        demo.addEventListener("mouseover", hex);
        hex();

        */


const subContainer = document.createElement("div");
subContainer.className = "subcontainer";
const bodyMain = document.querySelector("body");


//BUTTON, up to 100, REMOVE ALL GRID CREATE NEW ONE

resBut.addEventListener('click', () => {

    let userInput = prompt("enter number of squares for new grid less than 100:");

    if (userInput <= 100) {

        for (i = 0; i < userInput; i++)

    

    console.log(userInput);

    bodyMain.removeChild(container);
    bodyMain.appendChild(subContainer);
        

function newGrid(rows, cols) {

    
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
    
            for (b = 0; b < (rows * cols); b++) {
                
          //      rows = userInput;
          //      cols = userInput;
                
               let acell = document.createElement("div");
                acell.innerText = (b +1);
                subContainer.appendChild(acell).className = "gridy-item";
            };
    };
   
} else {
    alert("wrong choice");
    
}
newGrid(userInput, userInput);
}

);













//ANIMATION MOUSE HOVERING AND TRAILING 

const cursorTag = document.querySelector("div.cursors");

const balls = cursorTag.querySelectorAll("div");

let aimX = 0;
let aimY = 0;

balls.forEach((ball, index) => {

    let currentX = 0;
    let currentY = 0;
    
    let speed = 0.28 - index * 0.015;


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



 function pickColor() {

    var colors = ['#ff0000', '#00ff00', '#0000ff', '#ff3333', '#ffff00', '#ff6600'];

    var random_color = colors[(Math.floor(Math.random() * colors.length))];

    var x = container;
    x.style.color = random_color;
    x.style.backgroundColor = random_color;
}
pickColor()

});



//BUTTON TO RELOAD PAGE

newBut.addEventListener('click', () => {

    location.reload();
     
});


/*
let topDiv = document.createElement('div');

topDiv.textContent = "TOP DIV";

topDiv.backgroundColor = "red";

document.body.appendChild(topDiv).className = "top-div";
*/


/*
function changeSize() {

   // for (i = 0; i <= 100; i++)
   // i = prompt();

    if (prompt() > 100) {

        makeRows(16, 16);
        alert("wrong input");
    }
    else {

        cell = prompt();
     //   cols = prompt();

        container.appendChild(rows, cols);

    }
    changeSize();
   };
*/
 

//makeRows(prompt(), prompt());

//container.appendChild(makeRows());



    /*
    
        const newLayout = prompt.value;
    
        for (x = 0; x <= 5; x++) {
        
        x = newLayout;
    
       if (newLayout > 100) {

        alert("wrong choice");
       }     

       else if (newLayout <= 100) {

        rows, cols = newLayout; 
       }

        
        makeRows(rows, cols);
    
        container.appendChild(makeRows());
    }
    });

*/

    



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





