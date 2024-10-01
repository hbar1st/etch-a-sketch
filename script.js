const mainEl = document.querySelector("main");

mainEl.addEventListener("mouseover", draw);

for (let i = 0; i < 16; i++) {
    const outerDivEl = document.createElement("div");
    mainEl.appendChild(outerDivEl);
    for (let j = 0; j < 16; j++ ) {
        const innerDivEl = document.createElement("div");
        innerDivEl.setAttribute("class", "square");
        outerDivEl.appendChild(innerDivEl);
    }
}

function draw (e) {
    if ( e.target.classList.contains("square") ) {
        console.log("This is a square");
        e.target.style.backgroundColor = "black";
    }
}