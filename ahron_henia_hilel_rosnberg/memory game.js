let cardArray = [
    { name: "card9", img: "9.pnj", },
    { name: "card9", img: "9.pnj", },
    { name: "card8", img: "8.pnj", },
    { name: "card8", img: "8.pnj", },
    { name: "card7", img: "7.pnj", },
    { name: "card7", img: "7.pnj", },
    { name: "card6", img: "6.pnj", },
    { name: "card6", img: "6.pnj", },
    { name: "card5", img: "5.pnj", },
    { name: "card5", img: "5.pnj", },
    { name: "card4", img: "4.pnj", },
    { name: "card4", img: "4.pnj", },
];


let thisUser = JSON.parse(localStorage.getItem("thisUser")) || []
let users = JSON.parse(localStorage.getItem("users")) || {}
let grid = document.querySelector(".grid");
let score = document.querySelector(".scoreBoard");
let finish = document.querySelector(".finish");
let playAgain = document.querySelector(".playAgain");
let clickBoard = document.querySelector(".clickBoard");
let gamen = document.querySelector(".gamen");
let imgs;
let cardsId = [];
let cardSelected = [];
let cardsum = thisUser.score || 0;
// let cardsum = 0;
let finishScore = 0;
let clicks = 0;
let gameNumber = 1;
let ops = [];
let i = []

// if (thisUser.ops.length !== 0 ) {
//     function start1() {
//         Builds(grid, thisUser.i);
//         imgs = document.querySelectorAll("img");
//             Array.from(imgs).forEach(img =>
//                 img.addEventListener("click", flipCard)
//             )

//     }
// }



document.addEventListener("DOMContentLoaded", start())

function start() {

    Builds(grid, cardArray);
    Mix();
    playAgain.addEventListener("click", replay);
    document.querySelector(".scoreBoard").innerHTML = cardsum;


    imgs = document.querySelectorAll("img");
    Array.from(imgs).forEach(img =>
        img.addEventListener("click", flipCard)
    )
};


function Builds(grid, array) {
    finish.style.display = "none";
    array.forEach((arr, index) => {
        let img = document.createElement("img");
        img.setAttribute("src", "card beac.pnj");
        img.setAttribute("data-id", index);
        grid.appendChild(img);
    })
}



function Mix() {
    i = cardArray.sort(() => 0.5 - Math.random())
    thisUser.i = i;
    localStorage.setItem("thisUser", JSON.stringify(thisUser));
    console.log(i);
}



function flipCard() {
    let selected = this.dataset.id;
    cardSelected.push(cardArray[selected].name);
    // console.log(cardSelected);
    cardsId.push(selected);
    this.classList.add("flip");
    this.setAttribute("src", cardArray[selected].img);
    if (cardsId.length === 2) {
        setTimeout(CheckingFit, 500);
    }
}


function CheckingFit() {
    let imgs = document.querySelectorAll("img");
    let firstCard = cardsId[0];
    let secondCard = cardsId[1];
    if (cardSelected[0] === cardSelected[1] && firstCard !== secondCard) {
        // alert(" יפה מאוד !");
        ops.push(cardSelected[0], cardSelected[1]);
        thisUser.ops = ops;
        console.log(thisUser);
        localStorage.setItem("thisUser", JSON.stringify(thisUser));
        console.log(ops);
        cardsum += 1;
        finishScore += 1;
        score.innerHTML = cardsum;
        setTimeout(checkFinish, 500)
    } else {
        imgs[firstCard].setAttribute("src", "card beac.pnj");
        imgs[secondCard].setAttribute("src", "card beac.pnj");
        // alert("מצטערים. תוכל לנסות שוב"); 
        imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip");
    }
    cardSelected = [];
    cardsId = [];
    clicks += 1;
    clickBoard.innerHTML = clicks;
}

function checkFinish() {
    if (finishScore == cardArray.length / 2) {
        alert("מצוין !  ניצחת את המשחק")
        setTimeout(() => finish.style.display = "flex", 300);
        thisUser.ops = [];
        localStorage.setItem("thisUser", JSON.stringify(thisUser));
        // for (let i = 0; i < users.length; i++) {
        //     if (thisUser.firstName == users[i].firstName) {
        //         users[i].score = cardsum;
        //         thisUser.score = cardsum;
        //         localStorage.setItem("thisUser", JSON.stringify(thisUser));
        //         localStorage.setItem("users", JSON.stringify(users));
        //     }
        // }
    }
}


function replay() {
    grid.innerHTML = "";
    start()
    // cardsum = 0;
    clicks = 0;
    finishScore = 0;
    clickBoard.innerHTML = 0;
    score.innerHTML = 0;
    finish.style.display = "none";
    gameNumber += 1;

    // console.log(); 
    gamen.innerHTML = gameNumber;

}
