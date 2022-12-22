var canvas = document.querySelector('canvas#canvas');
var lineNumber = document.querySelector('input#lineNumber');
var lineColor = document.querySelector('input#lineColor');
var lineTransparency = document.querySelector('input#lineTransparency');
var lineWidth = document.querySelector('input#lineWidth');
var backgroundColor = document.querySelector('input#backgroundColor');
var ctx = canvas.getContext('2d');

canvas.width = document.querySelector('main').clientWidth;
canvas.height = document.querySelector('main').clientHeight;

function run(lineNumber = 20, lineColor = 'rgb(0, 0, 255, 0.1)', lineWidth = 3,  backgroundColor = '#ffffff') {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < lineNumber; i++) {
        drawLine(lineColor, lineWidth);
    }
}

window.onload = function () {
    run(lineNumber.value, lineColor.value, lineWidth.value, backgroundColor.value);
}

document.querySelector('input#run').onclick = function () {
    run(lineNumber.value, lineColor.value, lineWidth.value, backgroundColor.value);
}

function drawLine(color = 'rgba(0, 0, 255, 0.1)', lineWidth = 3) {
    ctx.strokeStyle = color;
    ctx.lineJoin = 'round';
    ctx.lineWidth = lineWidth;
    let x = canvas.width / 2;
    let y = 0;
    for (let i = 1; i <= 50; i++) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        y = i * 10;
        x += (Math.floor(Math.random() * 2) * 20) - 10;
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}