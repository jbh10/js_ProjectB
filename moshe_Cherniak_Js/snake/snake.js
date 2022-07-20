const mySnake = [
    { x: 10, y: 5 },
    { x: 9, y: 5 },
    { x: 8, y: 5 },
    { x: 7, y: 5 },
    { x: 6, y: 5 },
    { x: 5, y: 5 }
];

let moveSide = { x: 1, y: 0 };
let dishPos = { x: 0, y: 0 };
let score = 0;
let level = 1;
let gameMove;
let xPos;
let yPos;
let dish;
let player = JSON.parse(localStorage.getItem('thisPlayer'));

setPlayer()

function startGame() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('score').style.display = 'block';
    gameMove = setInterval(all, 400 - level * 50);
}


function move() {
    for (let i = mySnake.length - 2; i >= 0; i--) {
        mySnake[i + 1].x = mySnake[i].x;
        mySnake[i + 1].y = mySnake[i].y;
    }
    mySnake[0].x += moveSide.x;
    mySnake[0].y += moveSide.y;
    console.log(mySnake.length);
}

function snake() {
    document.getElementById('snakeBoard').innerHTML = '';
    newDish()
    mySnake.forEach(item => {
        let snakeBody = document.createElement('div');
        snakeBody.style.gridRowStart = item.x;
        snakeBody.style.gridColumnStart = item.y;
        snakeBody.classList.add('snake');
        document.getElementById('snakeBoard').appendChild(snakeBody)
    });
}

function all() {
     
    //if the snake tuch the wall
    if (mySnake[0].x == 0 || mySnake[0].x == 21
        || mySnake[0].y == 0 || mySnake[0].y == 11) {
        savePlayer()
        alert('game over');
        clearInterval(gameMove);
        location.reload()
        return
    }
    //if the snake tuch himself
    for (let i = mySnake.length - 2; i > 0; i--) {
        if (mySnake[i].x == mySnake[0].x && mySnake[i].y == mySnake[0].y) {
            savePlayer()
            alert('game over');
            location.reload();
            clearInterval(gameMove);
            return
        }
    }
    //if the snake ate the food
    if (mySnake[0].x == xPos && mySnake[0].y == yPos) {
        score++
        document.getElementById('score').innerHTML = score;
        mySnake.push(dishPos);
        dish.remove()
        randPos();
        newDish();
    }
    //enter to next level
    if (score / level == 5) {
        level++
        document.getElementById('level').innerHTML = level;
    }

    setPlayer()
    snake();
    move();   
}

function setPlayer() {
    document.getElementById("thePlayer").innerHTML =
        (`${player.firstName} <br> ${player.lastName}`);
    document.getElementById("record").innerHTML = player["game3Record"][0];
    document.getElementById("level").innerHTML = player["game3Level"];
}

function savePlayer(posCAr) {
    player["game3Score"] = score;
    player["game3Level"] = level;
    player["game3Record"].push(score);
    player["game3Record"].sort(function (a, b) { return b - a });
    localStorage.setItem("thisPlayer", JSON.stringify(player));
    let save = JSON.parse(localStorage.getItem("players"));
    for (const iterator of save) {
        if (iterator.userName == player.userName) {
            iterator["game3Score"] = player["game2Score"]
            iterator["game3Level"] = level;
            iterator["game3Record"].push(score);
            iterator["game3Record"].sort(function (a, b) { return b - a });
        }
    }
    localStorage.setItem("players", JSON.stringify(save));
}

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowDown":
            moveSide.x = 1;
            moveSide.y = 0;
            break;

        case "ArrowUp":
            moveSide.x = -1;
            moveSide.y = 0;
            break;

        case "ArrowRight":
            moveSide.x = 0;
            moveSide.y = 1;
            break;

        case "ArrowLeft":
            moveSide.x = 0;
            moveSide.y = -1;
            break;
        case "Enter":
            startGame();
            break;
    }
})


randPos()
function newDish() {
    dish = document.createElement('div');
    dish.style.gridRowStart = xPos;
    dish.style.gridColumnStart = yPos;
    dish.classList.add('dish')
    document.getElementById('snakeBoard').appendChild(dish);
}

function randPos() {
    xPos = Math.floor(Math.random() * 20) + 1;
    yPos = Math.floor(Math.random() * 10) + 1;
    // console.log(xPos);
    // console.log(yPos);
    mySnake.forEach(item => {
        if (item.x == xPos || item.y == yPos) {
            randPos();
        }
    })
    dishPos = { x: xPos, y: yPos }
}

//to level 1
function level1() {
    level = 1;
    savePlayer();
    location.reload();
}
//to navegation
function navGames() {
    window.location.href = "../../navGames.html";
}
//login
function login() {
    localStorage.setItem('numOfGame', 3);
    window.location.href = "../../login/login.html";
}
//register
function register() {
    localStorage.setItem('numOfGame', 3);
    window.location.href = "../../register/register.html"
}