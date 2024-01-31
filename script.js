const container = document.querySelector(".container");
const paintInBlack = document.getElementById("black");
const randomColors = document.getElementById("random");
const reset = document.getElementById("reset");
const btn = document.getElementById("resize")
const size = document.querySelector("input");
console.log(size);

btn.addEventListener("click", () => {
    cleanGrid()
    creatGrid(size.value)
})

function creatGrid(size) {
    for (let i = 0; i < size*size; i++) {
        let square = document.createElement("div");
        square.style.width = `calc(100% / ${size})`;
        square.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "black"
        });
        randomColors.addEventListener("click", () => {
            square.addEventListener("mouseover", () =>{
                event.target.style.backgroundColor = getRamdomColor()
    
            })
            
        });
        paintInBlack.addEventListener("click", square)
        square.classList.add('grid')
        container.appendChild(square);
        // onHover(square)
    }
}

creatGrid(16)

function getRamdomColor() {
    let hex = '0123456789ABCDEF';
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];

    }
    return color;
}

function cleanGrid() {
    container.innerHTML = '';
}

function changeSize() {
    if(size.value >= 1 && size.value <=100 ){
        creatGrid(size)
    }else {
        alert("Please, just number between 1-100")
    }
}

function resetPage() {
    reset.addEventListener("click", window.location.reload(true))
}

