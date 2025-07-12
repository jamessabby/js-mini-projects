const canvas = document.querySelector('#draw'); // grabs the canvas
const ctx = canvas.getContext('2d'); // in order to draw, grab the context in 2D

canvas.width = window.innerWidth;   // sets the width and height of the context equal to the window
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';  // set up the context stroke properties
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;  // initial state 
let lastX = 0;          // starting and end point of the line
let lastY = 0;
let hue = 0;
let direction = true;   // initial boolean value of direction

function draw(e) {
  if (!isDrawing) return; // if not drawing, it should stop the function
  console.log(e);

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`  // everytime you draw, you set the hue to this value, also the saturation and brightness

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);     // start from
  ctx.lineTo(lastX, lastY);     // go to
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];  // continuosly set the location of the stroke based on where the mouse is

  hue++;  // increments the hue everytime you draw
  
  if (hue >= 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 50) {  // if direction exceed its range limits, simply turn the direction backwards
    direction = !direction;                
  }

  if (direction) {  // if direction is true which is the initial state, increment line width
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;   // else decrement it back to 1
  }


}
canvas.addEventListener('mousedown', (e) =>  {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];  // continuously relocates the end point of the line
});
canvas.addEventListener('mousemove', draw); // runs the draw function while the mouse is down and moving
canvas.addEventListener('mouseup', () => isDrawing = false);  //sets it to false after you stop drawing
canvas.addEventListener('mouseout', () => isDrawing = false); // stops the draw function when you move your mouse out of the window


