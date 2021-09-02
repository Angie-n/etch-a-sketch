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
        node.addEventListener("mouseover", shadeDarker);
    });
}

let redValues = [255, 255, 255, 0, 0, 128];
let greenValues = [0, 140, 230, 128, 0, 0];
let blueValues = [0, 0, 0, 0, 255, 128];

function shadeDarker() {
    if(rainbowButton.classList.contains("isSelected")) {
        let randomIndex = Math.floor(Math.random() * 6);
        if(this.classList.contains("rainbowTouched")) {
            if(shadingButton.classList.contains("isSelected")) {
                this.setAttribute("data-redval", `${this.dataset.redval - this.dataset.initialred/10}`);
                this.setAttribute("data-greenval", `${this.dataset.greenval - this.dataset.initialgreen/10}`);
                this.setAttribute("data-blueval", `${this.dataset.blueval - this.dataset.initialblue/10}`);
            }
            else {
                this.setAttribute("data-redval", `${redValues[randomIndex]}`);
                this.setAttribute("data-greenval", `${greenValues[randomIndex]}`);
                this.setAttribute("data-blueval", `${blueValues[randomIndex]}`);
            }
        }
        else {
            this.classList.add("rainbowTouched");
            this.classList.remove("blackTouched");
            this.setAttribute("data-initialred", `${redValues[randomIndex]}`);
            this.setAttribute("data-redval", `${this.dataset.initialred}`);
            this.setAttribute("data-initialgreen", `${greenValues[randomIndex]}`);
            this.setAttribute("data-greenval", `${this.dataset.initialgreen}`);
            this.setAttribute("data-initialblue", `${blueValues[randomIndex]}`);
            this.setAttribute("data-blueval", `${this.dataset.initialblue}`);
        }
    }
    if(blackButton.classList.contains("isSelected")) {
        this.classList.remove("rainbowTouched");
        if(solidButton.classList.contains("isSelected")) {
            this.classList.add("blackTouched");
            this.setAttribute("data-redVal", "0");
            this.setAttribute("data-blueVal", "0");
            this.setAttribute("data-greenVal", "0");
        }
        else {
            if(!this.classList.contains("blackTouched")) {
                this.classList.add("blackTouched");
                this.setAttribute("data-redVal", "255");
                this.setAttribute("data-blueVal", "255");
                this.setAttribute("data-greenVal", "255");
            }
            this.setAttribute("data-redVal", `${this.dataset.redval - 25.6}`);
            this.setAttribute("data-blueVal", `${this.dataset.redval}`);
            this.setAttribute("data-greenVal", `${this.dataset.redval}`);
        }
    }
    this.dataset.redval = Math.max(0, this.dataset.redval);
    this.dataset.greenval = Math.max(0, this.dataset.greenval);
    this.dataset.blueval = Math.max(0, this.dataset.blueval);
    this.style.backgroundColor = `rgb(${this.dataset.redval},${this.dataset.greenval},${this.dataset.blueval})`;
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

function selectShading() {
    if(!shadingButton.classList.contains("isSelected")) {
        shadingButton.classList.add("isSelected");
        solidButton.classList.remove("isSelected");
    }
}

function selectSolid() {
    if(!solidButton.classList.contains("isSelected")) {
        solidButton.classList.add("isSelected");
        shadingButton.classList.remove("isSelected");
    }
}

function selectBlack() {
    if(!blackButton.classList.contains("isSelected")) {
        blackButton.classList.add("isSelected");
        rainbowButton.classList.remove("isSelected");
    }
}

function selectRainbow() {
    if(!rainbowButton.classList.contains("isSelected")) {
        rainbowButton.classList.add("isSelected");
        blackButton.classList.remove("isSelected");
    }
}
//Creates default grid
createGrid();
let gridChildren = document.querySelectorAll("#grid-container > div");
addShadeFeature();
//Allows for other dimensions to be implemented
let dimensionSlider = document.getElementById("dimension-input");
let dimensionDisplay = document.getElementById("dimension-display");
dimensionSlider.oninput = () => {
    gridLength = dimensionSlider.value;
    dimensionDisplay.textContent = `${gridLength} x ${gridLength}`;
    numGrids = Math.pow(gridLength, 2);
    resetGrid();
};
//Toggles shading and solid features 
let shadingButton = document.querySelector("#shading-button");
let solidButton = document.querySelector("#solid-button");
shadingButton.addEventListener("click", selectShading);
solidButton.addEventListener("click", selectSolid);
//Toggles black and rainbow features
let blackButton = document.querySelector("#black-button");
let rainbowButton = document.querySelector("#rainbow-button");
blackButton.addEventListener("click", selectBlack);
rainbowButton.addEventListener("click", selectRainbow);
//Resets the current grid
let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetGrid);