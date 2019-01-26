
var base = 0;
var percent = 0;
var total = document.getElementById("total");

function getBase(value) {
    base = Number(value);
    calculateTotal(base, percent);
}

function getTipPercent(value) {
    percent = Number(value);
    calculateTotal(base, percent);
}

function calculateTotal(base, percent) {
    total.innerText = (base * (100 + percent) / 100).toFixed(2);
}

var lvlInputs = document.getElementsByClassName("lvl-input");

for (let index = 0; index < lvlInputs.length; index++) {
    const element = lvlInputs[index];

    element.onclick = () => {
        let radio = element.getElementsByTagName("input")[0];

        radio.checked = true;

        if (radio["name"] == "tip") {
            getTipPercent(radio.value);
        } else {
            getBase(radio.value);
        }

    }
}
