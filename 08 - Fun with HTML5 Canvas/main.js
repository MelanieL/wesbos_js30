const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Set the colour:
ctx.strokeStyle = 'BADA55';
// lineJoin --> Shape to be used at the corners of paths when they are stroked
ctx.lineJoin = 'round';
// lineCap --> Shape used to draw the end points of lines
ctx.lineCap = 'round';
ctx.lineWidth = 100;


// Dummy variable to toggle whether button is being clicked to draw or not
let isDrawing = false;

// This will be "where we start the line from"
let lastX = 0;
let lastY = 0;

let hue = 0;

function draw(e) {
    if (!isDrawing) return; // stop the fn from running when they are not moused
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // Start with an X&Y and move to X&Y to get drawing
    // Start from:
    ctx.moveTo(lastX, lastY);
    // And go to:
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    // This will stop the lines from connecting when you let go and re-click the mouse
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false)


