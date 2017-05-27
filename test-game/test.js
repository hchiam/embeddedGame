var btn = document.getElementById("btn");
var elem = document.getElementById("myAnimation");
var cont = document.getElementById("myContainer");
var squi = document.getElementById("squidward");
var elemP = elem.getBoundingClientRect();
var contP = cont.getBoundingClientRect();
var squiP = squi.getBoundingClientRect();
var pos = 0;
var ver = 0;
function myMove() {
    var posSq = 0;
    btn.innerHTML = "wasd";
    
    elem.style.top = 25 + 'px';
    elem.style.left = 0 + 'px';
    var id = setInterval(frame, 10);
    function frame() {
        if (elem.offsetLeft > squi.offsetLeft) { //(posSq == contP.width - squiP.width) {
            clearInterval(id);
            resetPos();
        } else {
            if (posSq < contP.width*1.5 - squiP.width/2) posSq++;
            squi.style.top = 0 + 'px';
            squi.style.left = parseInt(squiP.left) + posSq + 'px';
            if (elem.offsetLeft > squi.offsetLeft) {
                resetPos();
            }
        }
    }
}
function resetPos() {
    pos = 0;
    ver = 0;
    posQs = 0;
    squi.style.left = "0px";
    elem.style.left = "0px";
    btn.innerHTML = "Play";
}
document.onkeydown = function(e) {
    var codeset = [87,65,83,68];
    var x = e.keyCode;
    if (x==65) {
        pos -= 15;
        elem.style.left = parseInt(elemP.left) + pos + 'px';
    }
    if (x==87) {
        ver -= 15;
        elem.style.top = parseInt(elemP.top) + ver + 'px';
    }
    if (x==68) {
        pos += 15;
        elem.style.left = parseInt(elemP.left) + pos + 'px';
    }
    if (x==83) {
        ver += 15;
        elem.style.top = parseInt(elemP.top) + ver + 'px';
    }
};

function createLineElement(x, y, length, angle) {
    var line = document.createElement("div");
    var styles = 'border: 1px solid black; '
    + 'width: ' + length + 'px; '
    + 'height: 0px; '
    + '-moz-transform: rotate(' + angle + 'rad); '
    + '-webkit-transform: rotate(' + angle + 'rad); '
    + '-o-transform: rotate(' + angle + 'rad); '
    + '-ms-transform: rotate(' + angle + 'rad); '
    + 'position: absolute; '
    + 'top: ' + y + 'px; '
    + 'left: ' + x + 'px; ';
    line.setAttribute('style', styles);
    return line;
}

function createLine(x1, y1, x2, y2) {
    var a = x1 - x2,
    b = y1 - y2,
    c = Math.sqrt(a * a + b * b);
    
    var sx = (x1 + x2) / 2,
    sy = (y1 + y2) / 2;
    
    var x = sx - c / 2,
    y = sy;
    
    var alpha = Math.PI - Math.atan2(-b, a);
    
    return createLineElement(x, y, c, alpha);
}

document.body.appendChild(createLine(100, 100, 200, 200));