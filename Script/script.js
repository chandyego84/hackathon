function randomGame()
{
    var x = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    switch(x)
    {
        case 1: // Snake
            window.location.href = "../Html/snakes.html";
            break;
        case 2: // Pong
            window.location.href = "../Html/pong.html";
            break;
        case 3: // Tic-Tac-Toe
            window.location.href = "../Html/tic_tac_toe.html";
            break;
        case 4: // Connect Four
            window.location.href = "../Html/connect_four.html";
            break;
        case 5: // Radar
            window.location.href = "../Html/radar.html";
    }
}