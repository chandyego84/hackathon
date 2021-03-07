var c = document.getElementById("pong_canvas");
var ctx = c.getContext("2d");

var player1Score = 0;
var player2Score = 0;

var upPressed = false;
var downPressed = false;
var wPressed = false;
var sPressed = false;

var leftPaddleTop = 200;
var leftPaddleX = 20;
var rightPaddleTop = 200;
var rightPaddleX = 760;

var ballX = 400;
var ballY = 300;
var ballVelocityX = -3;
var ballVelocityY = 2;
function initGame()
{
    
}

function drawGame()
{
    // backgroung
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, 800, 600);

    // score
    ctx.beginPath();
    ctx.font = "60px monospace";
    ctx.fillStyle = "white";
    ctx.fillText(player1Score, 190, 50);
    ctx.fillStyle = "white";
    ctx.fillText(player2Score, 590, 50);
    ctx.closePath();
}

function movePaddles()
{
    if(wPressed && !sPressed) // move left paddle up
    {
        if(leftPaddleTop - 10 > 0)
        {
            leftPaddleTop -= 10;
        }
        else{
            leftPaddleTop = 0;
        }
    }
    else if(sPressed && !wPressed) // move left paddle down
    {
        if(leftPaddleTop + 160 < 600)
        {
            leftPaddleTop += 10;
        }
        else{
            leftPaddleTop = 450;
        }
    }

    if(upPressed && !downPressed) // move right paddle up
    {
        if(rightPaddleTop - 10 > 0)
        {
            rightPaddleTop -= 10;
        }
        else{
            rightPaddleTop = 0;
        }
    }
    else if(downPressed && !upPressed) // move right paddle down
    {
        if(rightPaddleTop + 160 < 600)
        {
            rightPaddleTop += 10;
        }
        else{
            rightPaddleTop = 450;
        }
    }

    ctx.fillStyle = "white";
    ctx.fillRect(leftPaddleX, leftPaddleTop, 20, 150);
    ctx.fillRect(rightPaddleX, rightPaddleTop, 20, 150);
}

function moveBall()
{
    if(ballY - 30 < 0 || ballY + 30 > 600)
    {
        ballVelocityY *= -1;
    }
    else if(ballX > 740 && ballY >= rightPaddleTop
        && ballY <= rightPaddleTop + 150)
    { // ball gets by right paddle
        ballVelocityX *=-1.04;
        ballX = 730;
    }
    else if(ballX < 60 && ballY >= leftPaddleTop &&
        ballY <= leftPaddleTop + 150){ // ball gets by left paddle
        ballVelocityX *=-1.04;
        ballX = 70;
    }
    else if(ballX - 20 < 0)
    {
        player2Score++;
        ballVelocityX = -3;
        ballX = 400;
        ballY = 300;
    }
    else if(ballX + 20 > 800)
    {
        player1Score++;
        ballVelocityX = 3;
        ballX = 400;
        ballY = 300;
    }

    ctx.beginPath();
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.arc(ballX += ballVelocityX, ballY += ballVelocityY, 20, 360, 0, Math.PI * 2);
    ctx.fill();
    ctx.endPath();
}

document.addEventListener("keydown", function(e){
    var x = e.which || e.keyCode;

    if(x === 87) // 'w'
    {
        wPressed = true;
    }
    else if(x === 83) // 's'
    {
        sPressed = true;
    }
    else if(x === 38) // 'ArrowUp'
    {
        upPressed = true;
    }
    else if(x === 40) // 'ArrowDown'
    {
        downPressed = true;
    }
});

document.addEventListener("keyup", function(e){
    var x = e.which || e.keyCode;

    if(x === 87) // 'w'
    {
        wPressed = false;
    }
    else if(x === 83) // 's'
    {
        sPressed = false;
    }
    else if(x === 38) // 'ArrowUp'
    {
        upPressed = false;
    }
    else if(x === 40) // 'ArrowDown'
    {
        downPressed = false;
    }
});

function run()
{
    drawGame();
    if(player1Score === 15)
    {
        ctx.beginPath()
        ctx.font = "60 monospace";
        ctx.fillType = "white";
        ctx.fillText("Player 1 wins!", 175, 250);
        ctx.endPath();
        player1Score = player2Score = 0;
    }
    else if(player2Score === 15)
    {
        ctx.beginPath()
        ctx.font = "60 monospace";
        ctx.fillType = "white";
        ctx.fillText("Player 2 wins!", 175, 250);
        ctx.endPath();
        player1Score = player2Score = 0;
    }
    movePaddles();
    moveBall();
}
setInterval(run, 10);