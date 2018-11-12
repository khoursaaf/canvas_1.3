var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(50, 200, 300, 100);
ctx.closePath();
ctx.fillStyle = "blue";
ctx.fill();

ctx.beginPath();
ctx.rect(120, 125, 190, 75);
ctx.closePath();
ctx.fillStyle = "blue";
ctx.fill();

ctx.beginPath();
ctx.arc(100, 300, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.arc(300, 300, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();