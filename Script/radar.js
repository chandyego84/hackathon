var canvas = document.getElementById("radar_canvas");
var ctx = canvas.getContext("2d");

var color_team1 = '#207926';
var color_team2 = '#6D2079';

var win_team1 = 0;
var win_team2 = 0;

var currentTeam = 1;
var lastTeam = 1;

//Board Initialization
var radar = new Array(4)
function initializeBoard() 
{
    //switches who goes first
    currentTeam = lastTeam;
    if (lastTeam == 0)
        lastTeam = 1;
    else
        lastTeam =0;

    //empties the board
    for (var i = 0; i < 4; i++)
    {
        radar[i] = new Array(8);
        for (var j = 0; j < 8; j++)
        {
            radar[i][j] = "empty"
        }
    }
}
initializeBoard();

//Draws Board!
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
    ctx.strokeStyle = '#50451E';
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.arc(400,330,200,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(400,330,150,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(400,330,100,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(400,330,50,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(400,130,3,400)
    ctx.rect(200,330,400,3)
    ctx.rect(400,130,3,400)
    ctx.rect(400,130,3,400)
    ctx.fillStyle = '#50451E';
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(400-141.42,330-141.42);
    ctx.lineTo(400+141.42,330+141.42);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(400+141.3,330-141.3);
    ctx.lineTo(402-140,332+141.3);
    ctx.stroke();
    ctx.closePath();

    //board
    ctx.beginPath();
    

    //title
    ctx.font = '60px monospace';
    ctx.fillText('Radar', 320, 110);
    ctx.fill();
    ctx.closePath();

    //scoreboard
    ctx.beginPath();
    ctx.fillStyle = color_team1;
    ctx.fillText(win_team1,120, 130);
    ctx.fillStyle = color_team2;
    ctx.fillText(win_team2,650, 130);
}

//Checks for a winner!!
function checkWinCondition()
{
    //around the ring
    for (var i = 0; i < 4; i++)
    {
        if (radar[i][0] != "empty" && radar[i][0] == radar[i][1] && radar[i][1] == radar[i][2] && radar[i][2] == radar[i][3])
        {
            if (radar[i][0] == 1)
                win_team1++;
            if (radar[i][0] == 0)
                win_team2++;
            initializeBoard();
        }

        else if (radar[i][1] != "empty" && radar[i][1] == radar[i][2] && radar[i][2] == radar[i][3] && radar[i][3] == radar[i][4])
        {
            if (radar[i][1] == 1)
                win_team1++;
            if (radar[i][1] == 0)
                win_team2++;
            initializeBoard();
        }

        else if (radar[i][2] != "empty" && radar[i][2] == radar[i][3] && radar[i][3] == radar[i][4] && radar[i][4] == radar[i][5])
        {
            if (radar[i][2] == 1)
                win_team1++;
            if (radar[i][2] == 0)
                win_team2++;
            initializeBoard();
        }

        else if (radar[i][3] != "empty" && radar[i][3] == radar[i][4] && radar[i][4] == radar[i][5] && radar[i][5] == radar[i][6])
        {
            if (radar[i][3] == 1)
                win_team1++;
            if (radar[i][3] == 0)
                win_team2++;
            initializeBoard();
        }

        else if (radar[i][4] != "empty" && radar[i][4] == radar[i][5] && radar[i][5] == radar[i][6] && radar[i][6] == radar[i][7])
        {
            if (radar[i][4] == 1)
                win_team1++;
            if (radar[i][4] == 0)
                win_team2++;
            initializeBoard();
        }

        else if (radar[i][5] != "empty" && radar[i][5] == radar[i][6] && radar[i][6] == radar[i][7] && radar[i][7] == radar[i][0])
        {
            if (radar[i][5] == 1)
                win_team1++;
            if (radar[i][5] == 0)
                win_team2++;
            initializeBoard();
        }

        else if (radar[i][6] != "empty" && radar[i][6] == radar[i][7] && radar[i][7] == radar[i][0] && radar[i][0] == radar[i][1])
        {
            if (radar[i][6] == 1)
                win_team1++;
            if (radar[i][6] == 0)
                win_team2++;
            initializeBoard();
        }

        else if (radar[i][7] != "empty" && radar[i][7] == radar[i][0] && radar[i][0] == radar[i][1] && radar[i][1] == radar[i][2])
        {
            if (radar[i][7] == 1)
                win_team1++;
            if (radar[i][7] == 0)
                win_team2++;
            initializeBoard();
        }
    }

    //up a column
    for (var j = 0; j < 8; j++)
    {
        if (radar[0][j] != "empty" && radar[0][j] == radar[1][j] && radar[1][j] == radar[2][j] && radar[2][j] == radar[3][j])
        {
            if (radar[0][j] == 1)
                win_team1++;
            if (radar[0][j] == 0)
                win_team2++;
            initializeBoard();
        }
    }

    //diagonal
    for (var j = 0; j<5; j++)
    {
        if (radar[0][j] != "empty" && radar[0][j] == radar[1][j+1] && radar[1][j+1] == radar[2][j+2] && radar[2][j+2] == radar[3][j+3])
        {
            if (radar[0][j] == 1)
                win_team1++;
            if (radar[0][j] == 0)
                win_team2++;
            initializeBoard();
        }
    }

    //diagonal 2
    for (var j = 3; j<8; j++)
    {
        if (radar[0][j] != "empty" && radar[0][j] == radar[1][j-1] && radar[1][j-1] == radar[2][j-2] && radar[2][j-2] == radar[3][j-3])
        {
            if (radar[0][j] == 1)
                win_team1++;
            if (radar[0][j] == 0)
                win_team2++;
            initializeBoard();
        }
    }

    //diagonal edge cases
    if (radar[0][5] != "empty" && radar[0][5] == radar[1][6] && radar[1][6] == radar[2][7] && radar[2][7] == radar[3][0])
    {
        if (radar[0][5] == 1)
            win_team1++;
        if (radar[0][5] == 0)
            win_team2++;
        initializeBoard();
    }

    else if (radar[0][6] != "empty" && radar[0][6] == radar[1][7] && radar[1][7] == radar[2][0] && radar[2][0] == radar[3][1])
    {
        if (radar[0][6] == 1)
            win_team1++;
        if (radar[0][6] == 0)
            win_team2++;
        initializeBoard();
    }

    else if (radar[0][7] != "empty" && radar[0][7] == radar[1][0] && radar[1][0] == radar[2][1] && radar[2][1] == radar[3][2])
    {
        if (radar[0][7] == 1)
            win_team1++;
        if (radar[0][7] == 0)
            win_team2++;
        initializeBoard();
    }

    else if (radar[0][0] != "empty" && radar[0][0] == radar[1][7] && radar[1][7] == radar[2][6] && radar[2][6] == radar[3][5])
    {
        if (radar[0][0] == 1)
            win_team1++;
        if (radar[0][0] == 0)
            win_team2++;
        initializeBoard();
    }

    else if (radar[0][1] != "empty" && radar[0][1] == radar[1][0] && radar[1][0] == radar[2][7] && radar[2][7] == radar[3][6])
    {
        if (radar[0][1] == 1)
            win_team1++;
        if (radar[0][2] == 0)
            win_team2++;
        initializeBoard();
    }

    else if (radar[0][2] != "empty" && radar[0][2] == radar[1][1] && radar[1][1] == radar[2][0] && radar[2][0] == radar[3][7])
    {
        if (radar[0][2] == 1)
            win_team1++;
        if (radar[0][2] == 0)
            win_team2++;
        initializeBoard();
    }

    //no winner
    var isFull = true;

    for (var i = 0; i <4; i++)
    {
        for (var j = 0; j<8;j++)
        {
            if (radar[i][j] == "empty")
                isFull = false
        }
    }

    if (isFull)
        initializeBoard();
}

//Show Hover Values
function showHover(team)
{
    var ring = getRing();
    var column = getColumn();

    if (radar[ring][column] == "empty")
        mark(team,ring,column);
}

//show all of the marked tiles
function showFilled()
{
    for (var i = 0; i < 4; i++)
    {
        for(var j = 0; j < 8; j++)
        {
            if (radar[i][j] == 1)
            {
                mark(1,i,j);
            }
            else if (radar[i][j] == 0)
            {
                mark(0,i,j);
            }
        }
    }
}

//Board Refreshing
function draw()
{
    drawBoard();
    showFilled();
    showHover(currentTeam);
}

setInterval(draw,10);

document.addEventListener('mousedown', function placeToken()
{
    var ring = getRing();
    var column = getColumn();

    if (radar[ring][column] == "empty")
    {
        radar[ring][column] = currentTeam;
        switchTeam();

        checkWinCondition();
    }
});

//Mouse Pos
var mouseX, mouseY;
document.addEventListener('mousemove', function(e)
{
   mouseX = e.offsetX;
   mouseY = e.offsetY;
});

//switch Teams
function switchTeam()
{
    if (currentTeam == 0)
        currentTeam = 1;
    else
        currentTeam = 0;    
}

function getRing()
{
    if (Math.pow(mouseY-330,2) + Math.pow(mouseX-400,2) > 22000 && Math.pow(mouseY-330,2) + Math.pow(mouseX-400,2) < 40000)
        return 3;
    else if (Math.pow(mouseY-330,2) + Math.pow(mouseX-400,2) > 10000 && Math.pow(mouseY-330,2) + Math.pow(mouseX-400,2) < 22000)
        return 2;
    else if (Math.pow(mouseY-330,2) + Math.pow(mouseX-400,2) > 2500 && Math.pow(mouseY-330,2) + Math.pow(mouseX-400,2) < 10000)
        return 1;
    else if (Math.pow(mouseY-330,2) + Math.pow(mouseX-400,2) > 0 && Math.pow(mouseY-330,2) + Math.pow(mouseX-400,2) < 2500)
        return 0;
    else
        return -1;
}

function getColumn()
{
    if (mouseX-400 < 0 && mouseY -330 < 0 && Math.pow(mouseY-330,2)>Math.pow(mouseX-400,2))
        return 7;
    else if (mouseX-400 < 0 && mouseY -330 < 0 && Math.pow(mouseY-330,2)<Math.pow(mouseX-400,2))
        return 6;
    else if (mouseX-400 < 0 && mouseY -330 > 0 && Math.pow(mouseY-330,2)<Math.pow(mouseX-400,2))
        return 5;
    else if (mouseX-400 < 0 && mouseY -330 > 0 && Math.pow(mouseY-330,2)>Math.pow(mouseX-400,2))
        return 4;
    else if (mouseX-400 > 0 && mouseY -330 > 0 && Math.pow(mouseY-330,2)>Math.pow(mouseX-400,2))
        return 3;
    else if (mouseX-400 > 0 && mouseY -330 > 0 && Math.pow(mouseY-330,2)<Math.pow(mouseX-400,2))
        return 2;
    else if (mouseX-400 > 0 && mouseY -330 < 0 && Math.pow(mouseY-330,2)<Math.pow(mouseX-400,2))
        return 1;
    else if (mouseX-400 > 0 && mouseY -330 < 0 && Math.pow(mouseY-330,2)>Math.pow(mouseX-400,2))
        return 0;
    else
        return -1;
}

function mark(team, ring, column)
{
    ctx.beginPath();
    if (team == 1)
        ctx.fillStyle = color_team1;
    else
        ctx.fillStyle = color_team2;

    var xOffset = 8;
    var yOffset = -10;
    var distance = (ring+6/9)*33;

    if (ring == 0)
    {
        ctx.font = '40px monospace';
        xOffset = 9;
        yOffset = -11;
        distance+=1;
    }
    else if (ring == 1)
    {
        ctx.font = '50px monospace';
        xOffset = 11;
        yOffset = -12;
        distance-=2;
    }
    else if (ring == 2)
    {
        ctx.font = '60px monospace';
        xOffset = 15;
        yOffset = -15;
    }

    else if (ring == 3)
    {
        ctx.font = '70px monospace';
        xOffset = 20;
        yOffset = -18;
        distance+=3;
    }

    else
        ctx.font = '0px monospace';

    var directionX = .541196;
    var directionY = 1.30656;

    directionX = Math.sin(Math.PI*(column+1)/4-Math.PI/8)*1.41;
    directionY = Math.cos(Math.PI*(column+1)/4-Math.PI/8)*1.41;

    ctx.fillText('o', 400+(distance*directionX)-xOffset, 330-(distance*directionY)-yOffset);

    ctx.closePath();
}