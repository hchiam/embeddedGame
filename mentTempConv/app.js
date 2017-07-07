var fullPageURL = 'https://codepen.io/hchiam/full/NjmOdW/';

function setFillertextByUrlDetection() { // for codepen
    let thisUrl = document.URL;
    if (thisUrl.indexOf('full') === -1) {
        document.getElementById('fillertext').innerHTML = 'Go Full Page: ';
        let aTag = document.createElement('a');
        aTag.setAttribute('href',fullPageURL);
        aTag.setAttribute('target','_blank'); // open in new window
        aTag.innerHTML = fullPageURL;
        document.getElementById('fillertext').appendChild(aTag);
    }
}

setFillertextByUrlDetection();

/////////////////////

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
var temp; // temporary

function roundDigits(number, decimals) {
    var decimals = Math.pow(10,decimals);
    return Math.round(number * decimals) / decimals;
}

function setup() {
    inpt.value = "";
}

function inputChange() {
    btn.style.display="block";
    checkInputNonEmpty();
}

function checkInputNonEmpty() {
    if (inpt.value == "") {
        btn.style.display="none";
    } else {
        btn.style.display="block";
    }
}

function typeIn(number) {
    inpt.value += number;
    clearTimeout(tmr); // so new button clicks override current display timed function
    display.innerText = "";
    inputChange();
}

function backspace() {
    inpt.value = inpt.value.slice(0,-1);
    checkInputNonEmpty();
}

function clr() {
    inpt.value = "";
    btn.style.display="none";
}

function calculate() {
    if (inpt.value != "") {
        f = parseFloat(inpt.value);
        c = (f-32)*5/9;
        c = roundDigits(c,1);
        lbl.innerText = " = " + c.toString() + " C";
        count = 0;
        clearTimeout(tmr); // so new button clicks override current display timed function
        btn.style.display="none";
        tmr = setInterval(timedFunction, 1000);
    }
}

function timedFunction() {
    count++;
    switch(count) {
      case 1:
          temp = f;
          display.innerText = temp + " F";
          document.getElementById('lbl').style.color = 'whitesmoke';
          break;
      case 2:
          display.innerText = temp + " \u00f7 2";
          break;
      case 3:
          temp /= 2;
          display.innerText = temp + " -> round";
          break;
      case 4:
          temp = Math.round(temp);
          display.innerText = temp;
          break;
      case 5:
          display.innerText = temp + " + " + temp;
          break;
      case 6:
          display.innerText = temp + " + " + temp + " \u00f7 10";
          break;
      case 7:
          display.innerText = temp + " + " + temp/10;
          break;
      case 8:
          temp = temp+temp/10;
          display.innerText = temp;
          break;
      case 9:
          display.innerText = temp + " -> round";
          break;
      case 10:
          temp = Math.round(temp);
          display.innerText = temp;
          break;
      case 11:
          display.innerText = temp + " - 20";
          break;
      case 12:
          temp -= 20;
          display.innerText = temp;
          break;
      case 13:
          display.innerText = temp + " + 2";
          break;
      case 14:
          temp += 2;
          display.innerText = "\u2248 " + (temp).toString() + " C"; // ≈ approximate C value
          document.getElementById('lbl').style.color = 'maroon';
          break;
      default:
          clearTimeout(tmr);
          document.getElementById('lbl').style.color = 'whitesmoke';
    }
}
