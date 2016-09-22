var inpt = document.getElementById("inpt");
var btn = document.getElementById("btn");
var lbl = document.getElementById("lbl");
var display = document.getElementById("display");
//btn.innerText = "1";
//inpt.value = "2";
//lbl.innerText = "3";

var tmr;
var count = 0;

var f;
var c;

function roundDigits(number, decimals) {
    var decimals = Math.pow(10,decimals);
    return Math.round(number * decimals) / decimals;
}

function setup() {
    inpt.value = "";
}

function inputChange() {
    btn.style.display="block";
}

function buttonClick() {
    f = parseFloat(inpt.value);
    c = (f-32)*5/9;
    c = roundDigits(c,1);
    lbl.innerText = " -> " + c.toString() + " C";
    count = 0;
    clearTimeout(tmr); // so new button clicks override current display timed function
    tmr = setInterval(timedFunction, 1000);
}

function timedFunction() {
    count++;
    if (count==1) {
        display.innerText = f;
    } else if (count==2) {
        display.innerText = f + " / 2";
    } else if (count==3) {
        display.innerText = f/2;
    } else if (count==4) {
        display.innerText = f/2 + " + " + f/2;
    } else if (count==5) {
        display.innerText = f/2 + " + " + f/2 + " / 10";
    } else if (count==6) {
        display.innerText = f/2 + " + " + f/20;
    } else if (count==7) {
        display.innerText = f/2+f/20;
    } else if (count==8) {
        display.innerText = f/2+f/20 + " -> round";
    } else if (count==9) {
        display.innerText = Math.round(f/2+f/20);
    } else if (count==10) {
        display.innerText = Math.round(f/2+f/20) + " - 20";
    } else if (count==11) {
        display.innerText = Math.round(f/2+f/20) - 20;
    } else if (count==12) {
        display.innerText = Math.round(f/2+f/20)-20 + " + 2";
    } else if (count==13) {
        display.innerText = Math.round(f/2+f/20)-20 + 2 + " C";
    } else {
        clearTimeout(tmr);
    }
}
