// Alert
document.getElementById("alertMe").addEventListener("click", function () {
    alert("Hey there! Thanks for checking out my page!");
});

// Hover
const hoverBtn = document.getElementById("hoverButton");
hoverBtn.onmouseover = function () {
    hoverBtn.style.backgroundColor = "#ffcccb"; // light pink
};
hoverBtn.onmouseleave = function () {
    hoverBtn.style.backgroundColor = "#cce5ff"; // light blue
};

// Counter
let count = 0;
document.getElementById("buttonCounter").addEventListener("click", function () {
    count += 1;
    const counterPara = document.getElementById("counter");
    counterPara.innerHTML = "You clicked " + count + " times.";

    if (count % 2 === 0) {
        counterPara.style.color = "pink"; // even
    } else {
        counterPara.style.color = "tan"; // odd
    }
});
