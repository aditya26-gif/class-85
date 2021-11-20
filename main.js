canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
rover_x = 10;
rover_y = 10;
rover_width = 100;
rover_height = 90;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = "mars.gif";

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = "rover.png";
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
{
    up();
    console.log("up");
}
if(keyPressed == '40')
{
    down()
    console.log("down");
}
if(keyPressed == '37')
{
    left();
    console.log("left");
}
if(keyPressed == '39')
{
    right();
    console.log("right");
}
}
function up() {
    
if(rover_y > 0)
{
    rover_y = rover_y - 10;
    uploadBackground();
    uploadrover();
    console.log("Up key is pressed")
}
}

function down() {

    if(rover_y < 500)
    {
        rover_y = rover_y + 10;
        uploadBackground();
        uploadrover();
        console.log("Down key is pressed")
    }
}

function right() {
    if(rover_x > 800)
    {
        rover_x = rover_x + 10;
        uploadBackground();
        uploadrover();
        console.log("Right key is pressed")
    }
}

function left() {
    if(rover_x > 0)
    {
        rover_x = rover_x - 10;
        uploadBackground;
        uploadrover;
        console.log("Left key is pressed")
    }
}
