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
    deleteCurrentGrid();
    createGrid();
    gridChildren = document.querySelectorAll("#grid-container > div");
    addShadeFeature();
}

function deleteCurrentGrid() {
    gridChildren.forEach(node => {
        node.remove();
    })
}
//Creates default grid
createGrid();
let gridChildren = document.querySelectorAll("#grid-container > div");
addShadeFeature();
//Allows for other dimensions to be implemented
let dimensionSlider = document.getElementById("dimension");
let dimensionDisplay = document.querySelector("#dimension-display");
dimensionSlider.oninput = () => {
    gridLength = dimensionSlider.value;
    dimensionDisplay.textContent = `${gridLength} x ${gridLength}`;
    numGrids = Math.pow(gridLength, 2);
    resetGrid();
};
//Resets the current grid
let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetGrid);