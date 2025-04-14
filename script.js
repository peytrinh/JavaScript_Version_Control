// Hover "3D Models"
const highlightText = document.querySelector(".highlight");
highlightText.addEventListener("mouseover", function () {
    highlightText.style.backgroundColor = "#e6ce8c";
});
highlightText.addEventListener("mouseout", function () {
    highlightText.style.backgroundColor = "";
});

// <otivation <essages
const messages = [
    "Keep going, you're doing great!",
    "Design takes practice — and you're on your way!",
    "You're more creative than you think!",
    "Don't forget to drink water and vibe"
];

const messageButton = document.getElementById("motivateBtn");
const messageDisplay = document.getElementById("motivationDisplay");

messageButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageDisplay.textContent = messages[randomIndex];
});

// Favorite tools list loop
const tools = ["Illustrator", "Photoshop", "Figma"];
const toolList = document.getElementById("toolList");

for (let i = 0; i < tools.length; i++) {
    const item = document.createElement("li");
    item.textContent = tools[i];
    toolList.appendChild(item);
}

// Fun Fact button
document.addEventListener("DOMContentLoaded", function () {
    const funFactBtn = document.getElementById("funFactBtn");

    funFactBtn.addEventListener("click", function () {
        alert("Fun fact: I got the nickname 'Peach' from my family!");
    });
});
