let boolet = document.getElementById("boolet")
let booletPos = 0;
let intervalLeft;
let intervalright;
let x = 200;
let trap = document.getElementById("trap1");
let trapPos = 355;
let moove;
let booletTopPos;
let booletLeftPos;
let trapTopPos;
let trapLeftPos;
let shoot;
let opacity = 1;
let player = localStorage.getItem("userName")
let trapSpeed = 100;
let man = document.getElementById("man");
let allUsersFromStorage = JSON.parse(localStorage.getItem("users"))
let score = getScore() || 0;
let shootVoice = new Audio('shoot.mp3');
let boomVoice = new Audio('boom.mp3');
let imgInc;
let imgW = 50;
let imgH = 50;
let time = 21;
let timer;
timeR()

document.getElementById("score").innerHTML = score

document.body.addEventListener("click", shooter)
document.getElementById("left").addEventListener("mouseenter", moveLeft)
document.getElementById("left").addEventListener("mouseleave", stopLeft)
document.getElementById("right").addEventListener("mouseenter", moveRight)
document.getElementById("right").addEventListener("mouseleave", stopRight)

trapMoover()


function moveRight() {
    intervalright = setInterval(() => {
        if (x > 748) {
            clearInterval(intervalright);
            console.log("26");
            return
        };
        x++
        man.style.left = x + "px";
        boolet.style.left = x + 10 + "px";
    }, 1);
}
function stopRight() {
    clearInterval(intervalright)
}






function moveLeft() {
    intervalLeft = setInterval(() => {
        if (x < 1) {
            clearInterval(intervalLeft);
            return
        };
        x--
        man.style.left = x + "px";
        boolet.style.left = x + 10 + "px";
    }, 1);

}
function
    stopLeft() {
    clearInterval(intervalLeft)
}








function shooter() {

    clearInterval(shoot)
    sound(shootVoice)
    shoot = setInterval(() => {
        if (booletPos > 650) {
            clearInterval(shoot)
            booletPos = 0;
            boolet.style.bottom = booletPos + "px";

            return
        }
        else {
            booletPos++
            boolet.style.bottom = booletPos + "px"
        }
    }, 1)

}


function trapMoover() {

    moove = setInterval(() => {
        if (trapPos > 750) {
            trapPos = 0;
            trap.style.left = trapPos + "px";
        }
        findTopBooletPos()
        findLeftTrapPos()
        findLeftBooletPos()
        if (booletTopPos < 50 && (booletLeftPos > trapLeftPos && booletLeftPos < trapLeftPos + 50 || booletLeftPos + 30 > trapLeftPos && booletLeftPos + 30 < trapLeftPos + 50)) {

            boomEfect()
            sound(boomVoice)
            booletPos = 0;
            boolet.style.bottom = booletPos + "px";
            score += 1;
            document.getElementById("score").innerHTML = score
            saveGameData()
            clearInterval(shoot)
        }

        trapPos++
        trap.style.left = trapPos + "px";

    }, trapSpeed)
}




function findTopBooletPos() {
    let rect = boolet.getBoundingClientRect()
    booletTopPos = rect.top
    // console.log(booletTopPos);
    return booletTopPos
}


function findLeftBooletPos() {
    let rect = boolet.getBoundingClientRect()
    booletLeftPos = rect.left
    // console.log(booletLeftPos);
    return booletLeftPos
}

function findLeftTrapPos() {
    let rect = trap.getBoundingClientRect()
    trapLeftPos = rect.left
    // console.log(trapLeftPos);
    return trapLeftPos
}

function findLeftTrapPos() {
    let rect = trap.getBoundingClientRect()
    trapLeftPos = rect.left
    // console.log(trapLeftPos);
    return trapLeftPos
}


//local storage
function saveGameData() {
    // let user = localStorage.getItem("userName")
    // localStorage.setItem("scoreUser", JSON.stringify(score))
    for (let i = 0; i < allUsersFromStorage.length; i++) {
        if (allUsersFromStorage[i].user == player) {
            allUsersFromStorage[i].score = score;
            localStorage.setItem("users", JSON.stringify(allUsersFromStorage))
            //     allUsersFromStorage[i].stage = stage;
            //   localStorage.setItem("users",JSON.stringify(allUsersFromStorage))  
        }

    }

};

function getScore() {
    for (let i = 0; i < allUsersFromStorage.length; i++) {
        if (allUsersFromStorage[i].user == player) {
            return allUsersFromStorage[i].score

        }

    }
}
function sound(audio) {
    audio.play()
}


function boomEfect() {
 
    document.getElementById("trap1").style.width = 60 + "px";
    
    setTimeout(function () {
        
        document.getElementById("trap1").style.width = 50 + "px";
       
    }, 100);
}

function timeR(){
timer =  setInterval(() => {
if(time<1&&score<3){
    time = 21;
    score = 0;
    alert("u loose")
    document.getElementById("score").innerHTML = score
    saveGameData()
}
else if(time<1 &&score>=3){
    time = 21;
    score = 0;
    document.getElementById("score").innerHTML = score
    saveGameData()
    alert("well done");
    
}
if(time<1){time = 21}
    time--
    document.getElementById("timer").innerHTML = time
}, 1000);
}

















