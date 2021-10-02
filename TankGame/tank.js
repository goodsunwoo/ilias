var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = 20
var y = canvas.height-30;
var vx = 4;
var vy = -10;
var ay = 0.098;
var ballRadius = 10;


function drawBall() {
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0 ,Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawBall();

    x  += vx;
    vy += ay;
    y  += vy;
}
setInterval(draw,10);