//get the player detales
let player = JSON.parse(localStorage.getItem("thisPlayer"))
document.getElementById("thePlayer").innerHTML =
    (`${player.firstName} <br> ${player.lastName}`)
document.getElementById("points").innerText = player["game1Points"]


const colors = ["red", "blue", "green", "yellow", "grey", "pink"];
let numOfLine = 1;
const mainColors = [];
const allGame = player["game1LastGame"];
let gameStarted = false;
let color = 0;

//start new game
function startNewGame() {
    gameStarted = true
    player["game1LastGame"] = [];
    localStorage.setItem("thisPlayer", JSON.stringify(player))
    document.getElementById("buttonStart").style.pointerEvents = "none";
    document.getElementById("mainA").style.display = "block";
    document.getElementById("mainColor").style.display = "none";
    setMainColors();
    newDiv();
}

//set the main colors
function setMainColors() {
    for (let index = 0; index < 4; index++) {
        let num = Math.floor(Math.random() * colors.length);
        mainColors.push(colors[num]);
        document.getElementById(`main${index}`).style.backgroundColor = colors[num]
    }
    console.log(mainColors);
    player["game1LastGame"].push(mainColors);
}

//create a new line
function newDiv() {
    let div1 = document.createElement('div');
    div1.setAttribute("class", "main");
    div1.setAttribute("id", (`thisLine`));
    document.getElementById("main").appendChild(div1);
    //create the divs for user colors
    for (let index = 0; index < 4; index++) {
        let div2 = document.createElement('div');
        div2.setAttribute("class", "squares");
        div2.setAttribute("id", (`color${index}`));
        div2.addEventListener("click", function () {
            setColors(this); 
        })
        div1.appendChild(div2);
    }
    //create a div for resolt
    let div3 = document.createElement('div');
    div3.setAttribute("class", "squares")
    div3.setAttribute("id", (`color4`));
    div1.appendChild(div3);

    for (let i = 0; i < 4; i++) {
        let div31 = document.createElement('div');
        div31.setAttribute("id", (`cheak${i}`));
        div31.setAttribute("class", "resolt");
        div3.appendChild(div31);
    }
    //create button for cheak
    let cheak = document.createElement("div");
    cheak.setAttribute("class", "squares")
    cheak.setAttribute("id", (`color5`));
    cheak.style.backgroundImage = "url('../pictures/send.png')"
    cheak.style.backgroundSize = "cover"
    cheak.addEventListener("click", function () {
        cheakUserColors(this)
    })
    div1.appendChild(cheak);
}

//set the user colors
function setColors(div) {
    if (color == 5) {
        color = 0
    }
    else {
        color++
    }
    div.style.background = colors[color];
}

//get and cheak the user colors
function cheakUserColors(div) { 
    let div1 = div.parentElement
    const userColors = [];
    const userColors1 = [];
    const userResolt = [];
    const mainColors1 = []

    for (let index = 0; index < 4; index++) {
        let color1 = div1.childNodes[index].style.backgroundColor;
        userColors.push(color1);
        userColors1.push(color1);  
    }
    if (userColors.indexOf('') > 0) {
        alert('you need to fixed the line');
        return
    }

    div.pointerEvents = "none";
    player["game1LastGame"].push(userColors1)
    for (let index = 0; index < mainColors.length; index++) {
        mainColors1.push(mainColors[index]);
    }
    //cheak position of user colors
    let rightColor = 0;
    let rightPosition = 0;
    for (let i = 0; i < userColors.length; i++) {
        if (mainColors1[i] == userColors1[i]) {
            rightPosition++
            delete mainColors1[i];
            delete userColors[i];
        }
    }
    for (let i = 0; i < userColors.length; i++) {
        if (mainColors1.indexOf(userColors[i]) >= 0) {
            rightColor++
            delete mainColors1[mainColors1.indexOf(userColors[i])];
        }
    }
    //enter the resolt
    for (let i = 0; i < rightPosition; i++) {
        let div2 = div1.childNodes[4].childNodes[i];
        div2.style.backgroundColor = "black"
        userResolt.push("black");
    }
    
    for (let i = 0; i < rightColor; i++) {
        let div3 = div1.childNodes[4].childNodes[i + rightPosition];
        div3.style.backgroundColor = "burlywood";
        userResolt.push("burlywood");
    }
    player["game1LastGame"][player["game1LastGame"].length - 1].push(userResolt)
    

    if (rightPosition == 4) {
        if (numOfLine <= 5) {
            player["game1Points"] += 6
        }
        else if (numOfLine > 5 && numOfLine < 10) {
            player["game1Points"] += 3
        }
        //save the points
        player["game1LastGame"].length = 0;
        localStorage.setItem("thisPlayer", JSON.stringify(player))
        window.location.href = "../success/success.html"
        let save = JSON.parse(localStorage.getItem("players"));
        for (const iterator of save) {
            if (iterator.userName == player.userName) {
                iterator["game1Points"] = player["game1Points"];
                iterator["game1LastGame"].length = 0;
            }
        }
        localStorage.setItem("players", JSON.stringify(save));
        
        }
    else {
        numOfLine++
        let save = JSON.parse(localStorage.getItem("players"));
        for (const iterator of save) {
            if (iterator.userName == player.userName) {
                iterator.game1LastGame = player.game1LastGame;
            }
        }
        localStorage.setItem("players", JSON.stringify(save));
        localStorage.setItem("thisPlayer", JSON.stringify(player))
        newDiv();
    }

}

//get hint
function hint() {
    if (!gameStarted) {
        alert("you need to start the game");
    }
    else if  (player["game1Points"] < 10 && gameStarted) {
        alert("you have no points");
    }
    else {
        let num = Math.floor(Math.random() * mainColors.length)
        let div = document.getElementById(`main`).lastElementChild;
        let hint = div.childNodes[num];
        hint.style.background = mainColors[num];
        hint.style.border = "2px dashed white";
        hint.style.pointerEvents = "none";
        player["game1Points"] -= 10;
        document.getElementById("points").innerText = player["game1Points"]
    }
    
}

document.getElementById("lastGame").addEventListener("click", () => {
    game1LastGame(player)
})
//get the last game
function game1LastGame(arr) {
    gameStarted = true;
    numOfLine = arr["game1LastGame"].length
    if (numOfLine == 0) {
        alert("there is no game")
    } 
    else {
    document.getElementById("mainA").style.display = "block";
    for (let index = 0; index < 4; index++) {
        document.getElementById(`main${index}`).style.backgroundColor =
             arr["game1LastGame"][0][index];
        mainColors.push(arr["game1LastGame"][0][index])
    }
    console.log(mainColors);
    for (let i = 1; i < arr["game1LastGame"].length; i++) {
        let div1 = document.createElement('div');
        div1.setAttribute("class", "main");
        div1.setAttribute("id", (`line${i}`));
        document.getElementById("main").appendChild(div1);
        for (let index = 0; index < 4; index++) {
            let div2 = document.createElement('div');
            div2.setAttribute("class", "squares");
            div2.setAttribute("id", (`color${i}${index}`));
            div2.style.backgroundColor = arr["game1LastGame"][i][index];
            div1.appendChild(div2);
        }
        let div3 = document.createElement('div');
        div3.setAttribute("class", "squares")
        div3.setAttribute("id", (`color${i}4`));
        div1.appendChild(div3);
        for (let index = 0; index < 4; index++) {
            let div31 = document.createElement('div');
            div31.setAttribute("id", (`cheak${i}${index}`));
            div31.setAttribute("class", "resolt");
            div31.style.backgroundColor = arr["game1LastGame"][i][4][index];
            div3.appendChild(div31);
        }
        let div4 = document.createElement('div');
        div4.setAttribute("id", (`cheak${i}5`));
        div4.setAttribute("class", "squares");
        div4.style.backgroundImage = "url('../pictures/send.png')";
        div4.style.backgroundSize = "cover";
        div1.appendChild(div4);
    }
    newDiv(numOfLine)
}
}

function navGames() {
    window.location.href = "../../navGames.html";
}
//login
function login() {
    localStorage.setItem('numOfGame', 1);
    window.location.href = "../../login/login.html";
}
//register
function register() {
    localStorage.setItem('numOfGame', 1);
    window.location.href = "../../register/register.html"
}


