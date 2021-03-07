var canvas = document.getElementById("c4_canvas");
var ctx = canvas.getContext("2d")

var player = "red"; // red starts first

var board = new array(6);

// initialize variables
function initBoard()
{
  // red starts first
  player = "red";

  // creating empty board
  for(int i = 0; i < 6; ++i)
  {
    board[i] = new array(7);
    for(int j = 0; j < 7; ++j)
    {
      board[i][j] = "empty";
    }
  }
};

ctx.beginPath();
ctx.rect(0,0,800,600);
ctx.fillStyle = "#FFE691";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.rect(50,50,700,500);
ctx.fillStyle = "#FFF5D4";
ctx.fill();
ctx.closePath();
//setInterval(drawBoard, 1000);
//drawBoard();