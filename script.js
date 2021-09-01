// Creates default grid
let gridLength = 16;
let numGrids = Math.pow(gridLength, 2);
let gridContainer = document.querySelector("#grid-container");
for (numGrids; numGrids > 0; numGrids--) {
    let newGridTile = document.createElement('div');
    gridContainer.appendChild(newGridTile);
}
gridContainer.style.grid = `repeat(${gridLength}, 1fr) / repeat(${gridLength}, 1fr)`;

//Causes grid tiles to get progressively darker the more times they are hovered over
function shadeDarker() {
    if (this.dataset.shade > 0) {
        this.setAttribute("data-shade", `${this.dataset.shade - 25.6}`);
        this.style.backgroundColor = `rgb(${this.dataset.shade},${this.dataset.shade},${this.dataset.shade})`;
    }
}

let gridChildren = document.querySelectorAll("#grid-container > div");
gridChildren.forEach(node => {
    node.setAttribute("data-shade", "256");
    node.addEventListener("mouseover", shadeDarker);
});
