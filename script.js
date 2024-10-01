const mainEl = document.querySelector("main");
const button = document.querySelector("button");
const span = document.querySelector("span");

let width = 16;

mainEl.addEventListener("mouseover", draw);
button.addEventListener("click", () => {
    let w = 0;
    do {
        w = prompt("Choose grid width [1-100]:");
    } while (!w | isNaN(w) || w < 1 || w > 100);
    renderGrid(w);
})

function renderGrid(width) {
    mainEl.innerHTML="";
    for (let i = 0; i < width; i++) {
        const outerDivEl = document.createElement("div");
        mainEl.appendChild(outerDivEl);
        for (let j = 0; j < width; j++) {
            const innerDivEl = document.createElement("div");
            innerDivEl.setAttribute("class", "square");
            outerDivEl.appendChild(innerDivEl);
        }
    }
    span.innerText = `${width}x${width}`;
}

function draw(e) {
    if (e.target.classList.contains("square")) {
        e.target.style.backgroundColor = "black";
    }
}

renderGrid(width);