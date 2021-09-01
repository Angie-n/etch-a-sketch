let gridLength = 16;
let numGrids = Math.pow(gridLength, 2);
let gridContainer = document.querySelector("#grid-container");

function createGrid() {
    for (let i = numGrids; i > 0; i--) {
        let newGridTile = document.createElement('div');
        gridContainer.appendChild(newGridTile);
    }
    gridContainer.style.grid = `repeat(${gridLength}, 1fr) / repeat(${gridLength}, 1fr)`;
}

function addShadeFeature() {
    gridChildren.forEach(node => {
        node.setAttribute("data-shade", "256");
        node.addEventListener("mouseover", shadeDarker);
    });
}

function shadeDarker() {
    if (this.dataset.shade > 0) {
        this.setAttribute("data-shade", `${this.dataset.shade - 25.6}`);
        this.style.backgroundColor = `rgb(${this.dataset.shade},${this.dataset.shade},${this.dataset.shade})`;
    }
}

function resetGrid() {
    gridLength = parseInt(window.prompt("Enter desired length of grid (1-100)"));
    if (gridLength < 1 || gridLength > 100 || isNaN(gridLength)) {
        window.alert("Grid not reset; enter a valid input to change the canvas.");
    }
    else {
        numGrids = Math.pow(gridLength, 2);
        deleteCurrentGrid();
        createGrid();
        gridChildren = document.querySelectorAll("#grid-container > div");
        addShadeFeature();
    }
}

function deleteCurrentGrid() {
    gridChildren.forEach(node => {
        node.remove();
    })
}

createGrid();
let gridChildren = document.querySelectorAll("#grid-container > div");
addShadeFeature();
let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetGrid);