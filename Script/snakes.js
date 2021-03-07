var canvas = document.getElementById("snakes_canvas");
var ctx = canvas.getContext("2d");

var color_team1 = '#207926';
var color_team2 = '#6D2079';

var win_team1 = 0;
var win_team2 = 0;
var timer_text = "3";

startGame();

//starts game!
function startGame()
{
    snake1 = [];
    snake2 = [];
    fruit = [];

    setTimeout(function reset() 
    {
        direction_team1 = "north";
        direction_team2 = "south";
        
        turnable_team1 = true;
        turnable_team2 = true;
        
        snake1 = [[1,1],[1,1],[1,1],[1,1],[1,1]];
        snake2 = [[30,20],[30,20],[30,20],[30,20],[30,20]];
        fruit = [5,5];
        spawnFruit();
    },2000);
}




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
    ctx.beginPath();
    ctx.rect(100,125,600,400);
    ctx.fillStyle = "#271F07";
    ctx.fill();
    ctx.closePath();


    //board
    ctx.beginPath();
    

    //title
    ctx.font = '60px monospace';
    ctx.fillText('Snakes', 300, 110);
    ctx.fill();
    ctx.closePath();

    //scoreboard
    ctx.beginPath();
    ctx.fillStyle = color_team1;
    ctx.fillText(win_team1,120, 110);
    ctx.fillStyle = color_team2;
    ctx.fillText(win_team2,650, 110);
    ctx.closePath();
}

function moveSnakes()
{
    snake1.push(snake1[snake1.length-1].slice());
    snake1.shift();

    snake2.push(snake2[snake2.length-1].slice());
    snake2.shift();

    switch (direction_team1)
    {
        case "north":
            if ((snake1[snake1.length-1][1] += 1) > 20)
                snake1[snake1.length-1][1] = 1;
            break;

        case "south":
            if ((snake1[snake1.length-1][1] -= 1) < 1)
                snake1[snake1.length-1][1] = 20;
            break;

        case "east":

            if ((snake1[snake1.length-1][0] += 1) > 30)
                snake1[snake1.length-1][0] = 1;
            break;

        case "west":

            if ((snake1[snake1.length-1][0] -= 1) < 1)
                snake1[snake1.length-1][0] = 30;
            break;
    }

    switch (direction_team2)
    {
        case "north":
            if ((snake2[snake2.length-1][1] += 1) > 20)
                snake2[snake2.length-1][1] = 1;
            break;

        case "south":
            if ((snake2[snake2.length-1][1] -= 1) < 1)
                snake2[snake2.length-1][1] = 20;
            break;

        case "east":

            if ((snake2[snake2.length-1][0] += 1) > 30)
                snake2[snake2.length-1][0] = 1;
            break;

        case "west":

            if ((snake2[snake2.length-1][0] -= 1) < 1)
                snake2[snake2.length-1][0] = 30;
            break;
    }


}

//draws the cubes of the snake
function drawSnake(snake,color)
{
        //team 1
        ctx.beginPath();
        ctx.rect(snake[0]*20+80,-snake[1]*20+525,20,20);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
}

//fruit!
function spawnFruit()
{
    fruit[0] = Math.floor(Math.random() * 29)+1;
    fruit[1] = Math.floor(Math.random() * 19)+1;
}

//grows the snakes if they eat the fruit!
function checkFruit()
{
    if (snake1[snake1.length-1][0] == fruit[0] && snake1[snake1.length-1][1] == fruit[1])
    {
        snake1.unshift(snake1[0].slice());
        snake1.unshift(snake1[0].slice());
        snake1.unshift(snake1[0].slice());
        spawnFruit();
    }

    if (snake2[snake2.length-1][0] == fruit[0] && snake2[snake2.length-1][1] == fruit[1])
    {
        snake2.unshift(snake2[0].slice()); 
        snake2.unshift(snake2[0].slice()); 
        snake2.unshift(snake2[0].slice()); 
        spawnFruit();
    }
}

//basically how you win!
function checkCollision()
{
    var collision = false;
    //crash into other snakes
    for (var i = 0; i < snake2.length; i++)
    {
        if (snake1[snake1.length-1][1] == snake2[i][1] && snake1[snake1.length-1][0] == snake2[i][0])
        {
            win_team2++;
            collision = true;
        }
    }

    for (var i = 0; i < snake1.length; i++)
    {
        if (snake2[snake2.length-1][1] == snake1[i][1] && snake2[snake2.length-1][0] == snake1[i][0])
        {
            win_team1++;
            collision = true;
        }
    }   

    //crash into own snake
    for (var i = 0; i < snake1.length-1; i++)
    {
        if (snake1[snake1.length-1][1] == snake1[i][1] && snake1[snake1.length-1][0] == snake1[i][0])
        {
            win_team2++;
            collision = true;
        }
    }

    for (var i = 0; i < snake2.length-1; i++)
    {
        if (snake2[snake2.length-1][1] == snake2[i][1] && snake2[snake2.length-1][0] == snake2[i][0])
        {
            win_team1++;
            collision = true;
        }
    }
    if (collision)
        startGame();
}

//refresh
function refresh()
{

    turnable_team1 = true;
    turnable_team2 = true;

    drawBoard();
    for (var i = 0; i < snake1.length; i++)
        drawSnake(snake1[i],color_team1);
    for (var i = 0; i < snake2.length; i++)
        drawSnake(snake2[i],color_team2);


    drawSnake(fruit,"red");
    moveSnakes();
    checkFruit();

    checkCollision();

 

}

setInterval(refresh,100);

//Change directions!
document.addEventListener('keydown',function change_direction(e)
{
    var x = event.which || event.keyCode;

    if (x == 65 && direction_team1 != "east" && turnable_team1 == true)
    {
        direction_team1 = "west";
        turnable_team1 = false;
    }
    else if (x == 87 && direction_team1 != "south" && turnable_team1 == true)
    {
        direction_team1 = "north";
        turnable_team1 = false;
    }
    else if (x == 68 && direction_team1 != "west" && turnable_team1 == true)
    {
        direction_team1 = "east";
        turnable_team1 = false;
    }
    else if (x == 83 && direction_team1 != "north" && turnable_team1 == true)
    {
        direction_team1 = "south";
        turnable_team1 = false;
    }
    
    if (x == 37 && direction_team2 != "east")
        direction_team2 = "west";
    else if (x == 38&& direction_team2 != "south")
        direction_team2 = "north";
    else if (x == 39&& direction_team2 != "west")
        direction_team2 = "east";
    else if (x == 40&& direction_team2 != "north")
        direction_team2 = "south";
});