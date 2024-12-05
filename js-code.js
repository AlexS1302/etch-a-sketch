// Generate Grid

function generateGrid() {
    const container = document.querySelector("#container");
    const gridSize = parseInt(document.getElementById("grid-size").value);
    container.innerHTML = '';

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




