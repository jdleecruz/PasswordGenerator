const passLen = document.getElementById("lengthTextBox");
const upper = document.getElementById("upperCheckBox");
const lower = document.getElementById("lowerCheckBox");
const number = document.getElementById("numberCheckBox");
const symbol = document.getElementById("symbolCheckBox");
const generate = document.getElementById("generateBtn");

generate.addEventListener("click", function() {
    let result = document.getElementById("resultTextBox");
    let randomStr = "";
    let randomAscii

    for (let i = 0; i < passLen.value; i++) {
        randomAscii = Math.floor((Math.random() * 57) + 65);
        randomStr += String.fromCharCode(randomAscii);
    }

    result.value = randomStr;
})


