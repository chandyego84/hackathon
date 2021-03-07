var canvas = document.getElementById("ttt_canvas");
var ctx = canvas.getContext("2d");

var color_team1 = '#207926';
var color_team2 = '#6D2079';

var win_team1 = 0;
var win_team2 = 0;

var currentTeam = 1;
var lastTeam = 1;



//Board Initialization
var tictactoe = new Array(3)
function initializeBoard() 
{
    //switches who goes first
    currentTeam = lastTeam;
    if (lastTeam == 0)
        lastTeam = 1;
    else
        lastTeam =0;

    //empties the board
    for (var i = 0; i < 3; i++)
    {
        tictactoe[i] = new Array(3);
        for (var j = 0; j < 3; j++)
        {
            tictactoe[i][j] = "empty"
        }
    }
}

initializeBoard();

//check for win
function checkWinCondition()
{
    //Manual check cause I'm a scrub!!
    if (tictactoe[0][0] != "empty" && tictactoe[0][0] == tictactoe[0][1] && tictactoe[0][1] == tictactoe[0][2])
    {
        if (tictactoe[0][0] == 1)
            win_team1++;
        if (tictactoe[0][0] == 0)
            win_team2++;

        initializeBoard();
    }

    if (tictactoe[1][0] != "empty" && tictactoe[1][0] == tictactoe[1][1] && tictactoe[1][1] == tictactoe[1][2])
    {
        if (tictactoe[1][0] == 1)
            win_team1++;
        if (tictactoe[1][0] == 0)
            win_team2++;

        initializeBoard();
    }

    if (tictactoe[2][0] != "empty" && tictactoe[2][0] == tictactoe[2][1] && tictactoe[2][1] == tictactoe[2][2])
    {
        if (tictactoe[2][0] == 1)
            win_team1++;
        if (tictactoe[2][0] == 0)
            win_team2++;

        initializeBoard();
    }

    if (tictactoe[0][0] != "empty" && tictactoe[0][0] == tictactoe[1][0] && tictactoe[1][0] == tictactoe[2][0])
    {
        if (tictactoe[0][0] == 1)
            win_team1++;
        if (tictactoe[0][0] == 0)
            win_team2++;

        initializeBoard();
    }

    if (tictactoe[0][1] != "empty" && tictactoe[0][1] == tictactoe[1][1] && tictactoe[1][1] == tictactoe[2][1])
    {
        if (tictactoe[0][1] == 1)
            win_team1++;
        if (tictactoe[0][1] == 0)
            win_team2++;

        initializeBoard();
    }

    if (tictactoe[0][2] != "empty" && tictactoe[0][2] == tictactoe[1][2] && tictactoe[1][2] == tictactoe[2][2])
    {
        if (tictactoe[0][2] == 1)
            win_team1++;
        if (tictactoe[0][2] == 0)
            win_team2++;

        initializeBoard();
    }

    if (tictactoe[0][0] != "empty" && tictactoe[0][0] == tictactoe[1][1] && tictactoe[1][1] == tictactoe[2][2])
    {
        if (tictactoe[0][0] == 1)
            win_team1++;
        if (tictactoe[0][0] == 0)
            win_team2++;

        initializeBoard();
    }

    if (tictactoe[2][0] != "empty" && tictactoe[2][0] == tictactoe[1][1] && tictactoe[1][1] == tictactoe[0][2])
    {
        if (tictactoe[2][0] == 1)
            win_team1++;
        if (tictactoe[2][0] == 0)
            win_team2++;

        initializeBoard();
    }

    if(tictactoe[0][0] != "empty" && tictactoe[1][0] != "empty" && tictactoe[2][0] != "empty" && tictactoe[0][1] != "empty" && tictactoe[1][1] != "empty" && tictactoe[2][1] != "empty" && tictactoe[0][2] != "empty" && tictactoe[1][2] != "empty" && tictactoe[2][2] != "empty") 
        initializeBoard();
}

//board display
function drawBoard()
{
    //background
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

    //board
    ctx.beginPath();
    ctx.fillStyle = '#50451E';
    ctx.rect(350,200,3,300);
    ctx.rect(450,200,3,300);
    ctx.rect(250,300,300,3);
    ctx.rect(250,400,300,3);

    //title
    ctx.font = '60px monospace';
    ctx.fillText('Tic Tac Toe', 220, 130);
    ctx.fill();
    ctx.closePath();

    //scoreboard
    ctx.beginPath();
    ctx.fillStyle = color_team1;
    ctx.fillText(win_team1,120, 130);
    ctx.fillStyle = color_team2;
    ctx.fillText(win_team2,650, 130);
}

//Show the filled values
function showFilled()
{
    //team one
    ctx.beginPath();
    ctx.fillStyle = color_team1;
    ctx.font = '100px monospace';
    
    if (tictactoe[0][0] == 1)
        ctx.fillText('O', 275, 280);
    if (tictactoe[0][1] == 1)
        ctx.fillText('O', 275, 380);            
    if (tictactoe[0][2] == 1)
        ctx.fillText('O', 275, 480);  
    if (tictactoe[1][0] == 1)
        ctx.fillText('O', 375, 280);  
    if (tictactoe[1][1] == 1)
        ctx.fillText('O', 375, 380);  
    if (tictactoe[1][2] == 1)
        ctx.fillText('O', 375, 480);  
    if (tictactoe[2][0] == 1)
        ctx.fillText('O', 475, 280);  
    if (tictactoe[2][1] == 1)
        ctx.fillText('O', 475, 380);  
    if (tictactoe[2][2] == 1)
        ctx.fillText('O', 475, 480);  
    ctx.closePath();

    //team 2
    ctx.beginPath();
    ctx.fillStyle = color_team2;
    ctx.font = '100px monospace';
    
    if (tictactoe[0][0] == 0)
        ctx.fillText('X', 275, 280);
    if (tictactoe[0][1] == 0)
        ctx.fillText('X', 275, 380);            
    if (tictactoe[0][2] == 0)
        ctx.fillText('X', 275, 480);  
    if (tictactoe[1][0] == 0)
        ctx.fillText('X', 375, 280);  
    if (tictactoe[1][1] == 0)
        ctx.fillText('X', 375, 380);  
    if (tictactoe[1][2] == 0)
        ctx.fillText('X', 375, 480);  
    if (tictactoe[2][0] == 0)
        ctx.fillText('X', 475, 280);  
    if (tictactoe[2][1] == 0)
        ctx.fillText('X', 475, 380);  
    if (tictactoe[2][2] == 0)
        ctx.fillText('X', 475, 480);  
    ctx.closePath();


}

//Show Hover Values
function showHover(team)
{
    if (team == 1)
    {
        ctx.fillStyle = color_team1;
        var letter = 'O';
    }
    else
    {
        ctx.fillStyle = color_team2;
        var letter = 'X';
    }
        


    //Bottom Left
    if (tictactoe[0][2] == "empty" && mouseX > 250 && mouseX < 350 && mouseY > 400  && mouseY < 500)
    {
        ctx.beginPath();
        ctx.font = '100px monospace';
        ctx.fillText(letter, 275, 480);
        ctx.fill();
        ctx.closePath();
    }

    //Bottom Middle
    if (tictactoe[1][2] == "empty" && mouseX > 350 && mouseX < 450 && mouseY > 400  && mouseY < 500)
    {
        ctx.beginPath();
        ctx.font = '100px monospace';
        ctx.fillText(letter, 375, 480);
        ctx.fill();
        ctx.closePath();
    }

    //Bottom Right
    if (tictactoe[2][2] == "empty" && mouseX > 450 && mouseX < 550 && mouseY > 400  && mouseY < 500)
    {
        ctx.beginPath();
        ctx.font = '100px monospace';
        ctx.fillText(letter, 475, 480);
        ctx.fill();
        ctx.closePath();
    }
    //Middle Left
    if (tictactoe[0][1] == "empty" && mouseX > 250 && mouseX < 350 && mouseY > 300  && mouseY < 400)
    {
        ctx.beginPath();
        ctx.font = '100px monospace';
        ctx.fillText(letter, 275, 380);
        ctx.fill();
        ctx.closePath();
    }

    //Middle Middle
    if (tictactoe[1][1] == "empty" && mouseX > 350 && mouseX < 450 && mouseY > 300  && mouseY < 400)
    {
        ctx.beginPath();
        ctx.font = '100px monospace';
        ctx.fillText(letter, 375, 380);
        ctx.fill();
        ctx.closePath();
    }

    //Middle Right
    if (tictactoe[2][1] == "empty" && mouseX > 450 && mouseX < 550 && mouseY > 300  && mouseY < 400)
    {
        ctx.beginPath();
        ctx.font = '100px monospace';
        ctx.fillText(letter, 475, 380);
        ctx.fill();
        ctx.closePath();
    }  

    //Top Left
    if (tictactoe[0][0] == "empty" && mouseX > 250 && mouseX < 350 && mouseY > 200  && mouseY < 300)
    {
        ctx.beginPath();
        ctx.font = '100px monospace';
        ctx.fillText(letter, 275, 280);
        ctx.fill();
        ctx.closePath();
    }

    //Top Middle
    if (tictactoe[1][0] == "empty" && mouseX > 350 && mouseX < 450 && mouseY > 200  && mouseY < 300)
    {
        ctx.beginPath();
        ctx.font = '100px monospace';
        ctx.fillText(letter, 375, 280);
        ctx.fill();
        ctx.closePath();
    }

    //Top Right
    if (tictactoe[2][0] == "empty" && mouseX > 450 && mouseX < 550 && mouseY > 200  && mouseY < 300)
    {
        ctx.beginPath();
        ctx.font = '100px monospace';
        ctx.fillText(letter, 475, 280);
        ctx.fill();
        ctx.closePath();
    }                
}

//Place Token
document.addEventListener('mousedown', function placeToken()
{
    //Place Token if slot is empty
    //Bottom Left
    if (tictactoe[0][2] == "empty" && mouseX > 250 && mouseX < 350 && mouseY > 400  && mouseY < 500)
    {
        tictactoe[0][2] = currentTeam;
        switchTeam();
    }

    //Bottom Middle
    if (tictactoe[1][2] == "empty" && mouseX > 350 && mouseX < 450 && mouseY > 400  && mouseY < 500)
    {
        tictactoe[1][2] = currentTeam;
        switchTeam();
    }

    //Bottom Right
    if (tictactoe[2][2] == "empty" && mouseX > 450 && mouseX < 550 && mouseY > 400  && mouseY < 500)
    {
        tictactoe[2][2] = currentTeam;
        switchTeam();
    }
    //Middle Left
    if (tictactoe[0][1] == "empty" && mouseX > 250 && mouseX < 350 && mouseY > 300  && mouseY < 400)
    {
        tictactoe[0][1] = currentTeam;
        switchTeam();
    }

    //Middle Middle
    if (tictactoe[1][1] == "empty" && mouseX > 350 && mouseX < 450 && mouseY > 300  && mouseY < 400)
    {
        tictactoe[1][1] = currentTeam;
        switchTeam();
    }

    //Middle Right
    if (tictactoe[2][1] == "empty" && mouseX > 450 && mouseX < 550 && mouseY > 300  && mouseY < 400)
    {
        tictactoe[2][1] = currentTeam;
        switchTeam();
    }  

    //Top Left
    if (tictactoe[0][0] == "empty" && mouseX > 250 && mouseX < 350 && mouseY > 200  && mouseY < 300)
    {
        tictactoe[0][0] = currentTeam;
        switchTeam();
    }

    //Top Middle
    if (tictactoe[1][0] == "empty" && mouseX > 350 && mouseX < 450 && mouseY > 200  && mouseY < 300)
    {
        tictactoe[1][0] = currentTeam;
        switchTeam();
    }

    //Top Right
    if (tictactoe[2][0] == "empty" && mouseX > 450 && mouseX < 550 && mouseY > 200  && mouseY < 300)
    {
        tictactoe[2][0] = currentTeam;
        switchTeam();
    }                

    //check for win!
    checkWinCondition();

});

//switch Teams
function switchTeam()
{
    if (currentTeam == 0)
        currentTeam = 1;
    else
        currentTeam = 0;    
}

//Board Refreshing
function draw()
{
    drawBoard();
    showFilled();
    showHover(currentTeam);
}

setInterval(draw,10);

//Mouse Pos
var mouseX, mouseY;
document.addEventListener('mousemove', function(e)
{
   mouseX = e.offsetX;
   mouseY = e.offsetY;
});