let game1 = document.getElementById("game1");
let game2 = document.getElementById("game2");
let games = ["driveCar/index.html",
             "‏‏‏‏projectJS2/myGame/myGame.html",
             "memoryGame/memoryGame.html",
             "snake/snake.html"]
function goToGame(num) {
    if (num == 2 || num == 3) {
       if( confirm('המשחק עדיין בבניה האם ברצונך להיכנס?') == true) {
            window.location = games[num];
            return
       }
       else{
           return
       }
    }
    window.location = games[num];
}