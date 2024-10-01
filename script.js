const mainEl = document.querySelector("main");
const selectSizeBtn = document.querySelector("button");
const sizeSpan = document.querySelector("span");

let width = 16; //initial width of grid

mainEl.addEventListener("mouseover", draw);

selectSizeBtn.addEventListener("click", () => {
    let w = 0;
    do {
        w = prompt("Choose grid width [1-100]:");
    } while (!w | isNaN(w) || w < 1 || w > 100);
    renderGrid(w);
})

/** 
 * renderGrid: the "main" function that runs first
 * created the grid divs and adds them to the DOM
 */
function renderGrid(width) {
    mainEl.innerHTML = ""; //clear the old grid first
    for (let i = 0; i < width; i++) {
        const outerDivEl = document.createElement("div");
        mainEl.appendChild(outerDivEl);
        for (let j = 0; j < width; j++) {
            const innerDivEl = document.createElement("div");
            innerDivEl.setAttribute("class", "square");
            outerDivEl.appendChild(innerDivEl);
        }
    }
    sizeSpan.innerText = `${width}x${width}`;
}

/**
 * colors the cells randomly or darkens the cell if revisited
 * @param {*} e 
 */
function draw(e) {
    if (e.target.classList.contains("square")) {
        let red = getRandomValue();
        let green = getRandomValue();
        let blue = getRandomValue();
        let bgColor = `rgb(${red}, ${green}, ${blue})`;
        let style = e.target.style.backgroundColor;
        const regex = /rgb\((\d+), (\d+), (\d+)\)/;
        let match = style.match(regex) ; 
        if (style && match[1]) {
            bgColor = darken(+match[1], +match[2], +match[3]);
        }
        
        e.target.style.backgroundColor = bgColor;
    }
}

/**
 * Returns an rgb string with 10% darker colors
 * 
 * @param {*} r 
 * @param {*} g 
 * @param {*} b 
 * @returns 
 */
function darken(r,g,b) {
    let red = r;
    let green = g;
    let blue = b;

    red = r < 25 ? 0 : r - 25;
    green = g < 25 ? 0 : g - 25;
    blue = b < 25 ? 0 : b - 25;

    return `rgb(${red}, ${green}, ${blue})`;
}

function getRandomValue() {
    return Math.floor(Math.random() * 255) + 1;
}

renderGrid(width);