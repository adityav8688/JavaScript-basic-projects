const colorVal = document.querySelector('#colorPicker');
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");
const clearCanvas = document.querySelector("#clearCanvas");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let isDrawing = false;
let color = "";
colorVal.addEventListener("input", (e) =>{
    color = e.target.value;
});

canvas.addEventListener("mousedown", (e)=>{
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX,e.offsetY);
});

canvas.addEventListener("mousemove", (e) =>{
    if(!isDrawing) return;

    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.lineCap = "round";
    ctx.stroke();
});

canvas.addEventListener("mouseup", ()=>{
    isDrawing = false;
});
canvas.addEventListener("mouseleave", ()=>{
    isDrawing = false;
})

clearCanvas.addEventListener("click", ()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
});