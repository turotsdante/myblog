let checks = document.getElementsByClassName("dailies");
let ch1 = document.getElementById("self-worth-1");
let ch2 = document.getElementById("self-worth-2");
let ch3 = document.getElementById("self-worth-3");
let ch4 = document.getElementById("self-worth-4");
let ch5 = document.getElementById("self-worth-5");
let ch6 = document.getElementById("self-worth-6");
let ch7 = document.getElementById("self-worth-7");

let scoreText = document.getElementById("score-text");

const updateScore = (event) => {
    let score = 0;
    if (ch1.checked === true) { score += 5 };
    if (ch2.checked === true) { score += 5 };
    if (ch3.checked === true) { score += 5 };
    if (ch4.checked === true) { score += 8 };
    if (ch5.checked === true) { score += 3 };
    if (ch6.checked === true) { score += 3 };
    if (ch7.checked === true) { score += 2 };

    scoreText.innerHTML = `My score for today: ${score}`;
    console.log("Hello: ", score)
}

for (const chk of checks) {
    chk.addEventListener("change", updateScore);
}