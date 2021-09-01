let gridLength = 16;
let numGrids = Math.pow(gridLength, 2);
let gridContainer = document.querySelector("#grid-container");
for (numGrids; numGrids > 0; numGrids--) {
    let newGridTile = document.createElement('div');
    gridContainer.appendChild(newGridTile);
}
gridContainer.style.grid = `repeat(${gridLength}, 1fr) / repeat(${gridLength}, 1fr)`;
console.log(gridContainer);