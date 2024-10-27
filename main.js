//Task1
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

//Task2:Configure the JavaScript for Drawing Context
ctx.fillStyle = 'white';
ctx.fillRect(10, 10, 1000, 1000);
ctx.strokeRect(10,10,1000,1000);
//mouse listener
canvas.addEventListener('mousedown', () => {
canvas.classList.add('highlight');
});
canvas.addEventListener('mousemove', () => {
    canvas.classList.add('highlight');
    });

canvas.addEventListener('mouseup', () => {
canvas.classList.remove('highlight');
});
//Task3:Implement Shape Drawing Logic
const line = document.getElementById('line');
const rectangle = document.getElementById('rectangle');
const circle = document.getElementById('circle');
function drawRectangle(x,y){
    ctx.fillRect(10,10,x,y);
};
canvas.addEventListener("click",e => {
drawRectangle(e.offsetX, e.offsetY)
});
function drawLine(x,y){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x,y);
};
canvas.addEventListener("click",e => {
drawLine(e.offsetX, e.offsetY)
});
function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,10,0,Math.PI,false);
    ctx.fill();
};
canvas.addEventListener("click",e => {
drawCircle(e.offsetX, e.offsetY)
});