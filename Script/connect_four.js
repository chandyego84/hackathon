var c = document.getElementById("c4_canvas");
var ctx = c.getContext("2d");

var piecesCount = 0;
var color = "red";
var board = new Array(6);

var player1Color = "red";
var player2Color = "black";

var player1Score = 0;
var player2Score = 0;

function drawBoard()
{
    // make white above yellow
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 800, 100);
    ctx.closePath();

    // display scores
    ctx.beginPath();
    ctx.font = "60px monospace";
    ctx.fillStyle = player1Color;
    ctx.fillText(player1Score, 25, 65);
    ctx.fillStyle = player2Color;
    ctx.fillText(player2Score, 750, 65);
    ctx.closePath();

    // make the yellow background
    ctx.beginPath();
    ctx.fillStyle = "#ecf542";
    ctx.fillRect(0, 100, 800, 500);
    ctx.closePath();

    // make the holes 6 x 7
    var x = 100;
    var y = 150;
    var radius = 20;
    for(var i = 0; i < 6; ++i)
    {
        for(var j = 0; j < 7; ++j)
        {
            ctx.beginPath();
            ctx.arc(x, y, 35, 360, 0, Math.PI * 2);
            ctx.strokeStyle = "orange";
            ctx.lineWidth = 4;
            ctx.stroke();
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.closePath();
            x += 100;
        }
        y += 80;
        x = 100;
    }
}

function initBoard()
{
    piecesCount = 0;
    for(var i = 0; i < 6; i++)
    {
        board[i] = new Array(7);
        for(var j = 0; j < 7; j++)
        {
            board[i][j] = "empty";
        }
    }
}

function checkWin(row, col)
{
    var count = 0;

    // horizontal
    for(var j = 0; j < 7; j++)
    {
        if(board[row][j] === color)
        {
            count++;
        }
        else
        {
            count = 0;
        }
        if(count >= 4)
        {
            if(color === player1Color)
            {
                player1Score++;
            }
            else
            {
                player2Score++;
            }
            initBoard();
        }
    }
    count = 0;
    // vertical
    for(var i = 0; i < 6; i++)
    {
        if(board[i][col] === color)
        {
            count++;
        }
        else
        {
            count = 0;
        }
        if(count >= 4)
        {
            if(color === player1Color)
            {
                player1Score++;
            }
            else
            {
                player2Score++;
            }
            initBoard();
        }
    }
    count = 0;
    // diagonal one
    var tempRow = row;
    var tempCol = col;

    while(tempRow != 0 && tempCol != 0)
    {
        tempRow--;
        tempCol--;
    }
    while(tempRow != 6 && tempCol != 7)
    {
        if(board[tempRow][tempCol] === color)
        {
            count++;
        }
        else
        {
            count = 0;
        }
        if(count >= 4)
        {
            if(color === player1Color)
            {
                player1Score++;
            }
            else
            {
                player2Score++;
            }
            initBoard();
        }
        tempRow++;
        tempCol++;
    }
    count = 0;
    // Diagonal two
    tempRow = row;
    tempCol = col;
    while(tempRow != 0 && tempCol != 6)
    {
        tempRow--;
        tempCol++;
    }
    while(tempRow != 6 && tempCol != -1)
    {
        if(board[tempRow][tempCol] === color)
        {
            count++;
        }
        else{
            count = 0;
        }
        if(count >= 4)
        {
            if(color === player1Color)
            {
                player1Score++;
            }
            else
            {
                player2Score++;
            }
            initBoard();
        }
        tempRow++;
        tempCol--;
    }
    // all pieces placed and no win
    if(piecesCount === 42)
    {
        initBoard();
    }
}

// mouseX and mouseY are known at all times
function hover()
{
    var col = -1;
    var x = 100;
    var y = 60;

    if(mouseX >= 65 && mouseX <= 135) col = 0;
    if(mouseX >= 165 && mouseX <= 235) col = 1;
    if(mouseX >= 265 && mouseX <= 335) col = 2;
    if(mouseX >= 365 && mouseX <= 435) col = 3;
    if(mouseX >= 465 && mouseX <= 535) col = 4;
    if(mouseX >= 565 && mouseX <= 635) col = 5;
    if(mouseX >= 665 && mouseX <= 735) col = 6;

    if(col >= 0 && board[0][col] == "empty" && color == "red")
    {
        x += (100 * col);
        ctx.beginPath();
        ctx.arc(x, y, 35, 360, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    }
    else if(col >= 0 && board[0][col] === "empty" && color === "black")
    {
        x += (100 * col);
        ctx.beginPath();
        ctx.arc(x, y, 35, 360, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
    }
}

// potential to change color to color :/
function fillTokens()
{
    var x = 100;
    var y = 150;
    for(var i = 0; i < 6; i++)
    {
        for(var j = 0; j < 7; j++)
        {
            x = 100;
            y = 150;
            if(board[i][j] === "red")
            {
                x += 100 * j;
                y += 80 * i;
                ctx.beginPath();
                ctx.arc(x, y, 35, 360, 0, Math.PI * 2);
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.closePath();
            }
            else if(board[i][j] === "black")
            {
                x += 100 * j;
                y += 80 * i;
                ctx.beginPath();
                ctx.arc(x, y, 35, 360, 0, Math.PI * 2);
                ctx.fillStyle = "black";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

var mouseX, mouseY;
document.addEventListener("mousemove", function(e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
});

document.addEventListener("mousedown", function placeToken(){
    var col = -1;

    if(mouseX >= 65 && mouseX <= 135) col = 0;
    if(mouseX >= 165 && mouseX <= 235) col = 1;
    if(mouseX >= 265 && mouseX <= 335) col = 2;
    if(mouseX >= 365 && mouseX <= 435) col = 3;
    if(mouseX >= 465 && mouseX <= 535) col = 4;
    if(mouseX >= 565 && mouseX <= 635) col = 5;
    if(mouseX >= 665 && mouseX <= 735) col = 6;

    if(col >= 0 && board[0][col] == "empty" && color == "red")
    {
        var i = 5;
        for(; board[i][col] === "red" ||
            board[i][col] === "black"; i--) {}
        board[i][col] = "red";
        piecesCount++;
        checkWin(i, col);
        color = "black";
    }
    else if(col >= 0 && board[0][col] === "empty" && color === "black")
    {
        var i = 5;
        for(; board[i][col] === "red" ||
            board[i][col] === "black"; i--) {}
        board[i][col] = "black";
        piecesCount++;
        checkWin(i, col);
        color = "red";
    }
})
function run()
{
    drawBoard();
    fillTokens();
    hover();
}

initBoard();
setInterval(run, 100);