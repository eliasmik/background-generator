var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector(".randomBtn");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";"; 
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", function(){
    const min = 100000;
    const max = 999999;
    var randomNumber1 = Math.floor(Math.random() * (max - min +1)) + min;
    var randomNumber2 = Math.floor(Math.random() * (max - min +1)) + min;
    var randomHex1 = "#" + randomNumber1;
    var randomHex2 = "#" + randomNumber2;
    body.style.background = "linear-gradient(to right, " + randomHex1 + ", " + randomHex2 + ")";
})

