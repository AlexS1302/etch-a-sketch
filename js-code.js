
// Get grid size from the user

function getGridSize() {
    let gridSize;

    do {
        gridSize = prompt("Please enter a grid size (max 100): ");
        if (gridSize === null) {
            alert("Grid generation cancelled!");
            return null;
        }
        gridSize = parseInt(gridSize);
        if (isNaN(gridSize) || gridSize < 1) {
            alert("Invalid input! Please enter a number between 1 and 100.");
        } else if (gridSize > 100) {
            alert("The grid size cannot exceed 100. Please try again!");
        }
    } while (isNaN(gridSize) || gridSize < 1 || gridSize > 100);

    return gridSize;

}

// Create squares

function createSquares(container, gridSize) {
    const squareSize = container.clientWidth / gridSize;

    for (let i = 0; i < gridSize; i++) {
        for (let j= 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            container.appendChild(square); 
        }
        
    }    
}

// Add hover effect
function addHoverEffect() {
    document.querySelectorAll(".square").forEach(square => {
        square.onmouseover = () => {
            square.style.backgroundColor = "black";
        };
    });
}

// Generate Grid
function generateGrid() {
    const container = document.querySelector("#container");
    const gridSize = getGridSize();

    if (gridSize === null) return;

    container.innerHTML = '';

    createSquares(container, gridSize);
    addHoverEffect();
}



    

    