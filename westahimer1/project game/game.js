let x = 478;
let y = 0;
let z = 0;
let q = 0;
let t = 0;
let timer = 10;
let gameOver = 0;
let audioBall = document.getElementById("audioBall");
let audioBoom = document.getElementById("audioBoom");

let users = JSON.parse(localStorage.getItem("users"));
let thisUser = users[users.findIndex(findUser)].point || 0;
let sumPoint = thisUser;

let men = document.getElementById("men");
let ball = document.getElementById("ball");
let boom1 = document.getElementById("boom1");
let boom2 = document.getElementById("boom2");
let left = document.getElementById("left");
let right = document.getElementById("right");
let start = document.getElementById("start");

document.getElementById("p1").innerHTML = "   " + "הניקוד שלך הוא" + " " + thisUser + "  " + users[users.findIndex(findUser)].firstName;

ball.style.right = x + 17 + "px";


let id3 = setInterval(() => {
    z += 1
    if (z < 940) { boom1.style.right = z + "px"; }
    else { z = 0 }
}
    , 5)

let id4 = setInterval(() => {
    q -= 1
    if (q > 0) { boom2.style.right = q + "px"; }
    else { q = 940 }
}
    , 10)

document.body.addEventListener("click", function () {
    playAudio(audioBall)
    let id2 = setInterval(() => {
        document.getElementById("lose").innerHTML = " ";
        // document.getElementById("over").innerHTML =" ";
        if (y < 700) {
            y += 5;
            ball.style.bottom = y + "px";

            if ((y == 670 && ball.getBoundingClientRect().left + 2 > boom1.getBoundingClientRect().left && ball.getBoundingClientRect().left + 2 < boom1.getBoundingClientRect().right)
                || (y == 610 && ball.getBoundingClientRect().left + 2 > boom2.getBoundingClientRect().left && ball.getBoundingClientRect().left + 2 < boom2.getBoundingClientRect().right)) {

                if (y == 670 && ball.getBoundingClientRect().left + 2 > boom1.getBoundingClientRect().left && ball.getBoundingClientRect().left + 2 < boom1.getBoundingClientRect().right) { imgChenge(boom1) };

                if (y == 610 && ball.getBoundingClientRect().left + 2 > boom2.getBoundingClientRect().left && ball.getBoundingClientRect().left + 2 < boom2.getBoundingClientRect().right) { imgChenge(boom2) };


                playAudio(audioBoom);

                sumPoint++;

                t++;



                ball.style.visibility = "hidden";

                users = JSON.parse(localStorage.getItem("users")); // תביא את המערך של המשתמשים
                users[users.findIndex(findUser)].point = sumPoint; // מוצא במערך שהבאנו את היוזר ששמור בפוינטרס 
                localStorage.setItem("users", JSON.stringify(users));

                document.getElementById("p1").innerHTML = "   " + "הניקוד שלך הוא" + " " + sumPoint + "  " + users[users.findIndex(findUser)].firstName
            }
        }
        else { clearInterval(id2); y = 0; ball.style.bottom = y + "px"; ball.style.right = x + 17 + "px"; ball.style.visibility = "visible" }

    }, 1)



})


function funcLeft() {

    let id = setInterval(() => {
        if (x >= 955) { clearInterval(id); return }
        x++
        men.style.right = x + "px"
        if (y == 0) { ball.style.right = x + 17 + "px" }
    }, 2);

    left.addEventListener("mouseleave", () => clearInterval(id))
}

function funcRight() {
    let id = setInterval(() => {
        if (x <= 0) { clearInterval(id); return }
        x--
        men.style.right = x + "px"
        if (y == 0) { ball.style.right = x + 17 + "px" }
    }, 2);

    right.addEventListener("mouseleave", () => clearInterval(id));
    ;
}

function findUser(user) {
    return user.firstName == JSON.parse(localStorage.getItem("points")).firstName
}
function playAudio(beep) {
    beep.play();
}

function imgChenge(abc) {

    abc.style.width = 90 + "px"
    abc.style.height = 80 + "px"
    setTimeout(myAbc, 100)
    function myAbc() {
        abc.style.width = 70 + "px"
        abc.style.height = 60 + "px"
    }


}



let id5 = setInterval(() => {

    timer--;
    document.getElementById("pTimer").innerHTML = "timer:   " + timer;
    if (t < 4 && timer <= 0) { gameOver++; timer = 10; document.getElementById("lose").innerHTML = "הפסדת" }
    else if (timer <= 0) { timer = 10; t = 0 }
    if (gameOver == 2) {
        sumPoint = 0;
        users[users.findIndex(findUser)].point = sumPoint;
        localStorage.setItem("users", JSON.stringify(users));
        document.getElementById("p1").innerHTML = "   " + "הניקוד שלך הוא" + " " + sumPoint + "  " + users[users.findIndex(findUser)].firstName;
        document.getElementById("lose").innerHTML = "GAME OVER";
        clearInterval(id5);

        start.style.display = "inline "
        gameOver = 0;
    };
}, 1000);

function game3() {
    location.reload()
}

