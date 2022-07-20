

let cardArray = [
    { name: "cow", img: "cow2.jpg", },
    { name: "cow", img: "cow2.jpg", },
    { name: "cat", img: "cat2.jpg", },
    { name: "cat", img: "cat2.jpg", },
    { name: "dog", img: "dog2.jpg", },
    { name: "dog", img: "dog2.jpg", },
    { name: "bird", img: "bird2.jpg", },
    { name: "bird", img: "bird2.jpg", },
    { name: "monky", img: "monky2.jpg", },
    { name: "monky", img: "monky2.jpg", },
    { name: "snake", img: "snake2.jpg", },
    { name: "snake", img: "snake2.jpg", },
];


let grid = document.querySelector(".grid");
let audio = document.querySelector("audio")
let source = document.querySelector("#source")
let scoreBoard = document.querySelector(".scoreBoard");
let popup = document.querySelector(".popup");
let playAgain = document.querySelector(".playAgain");
let clickBoard = document.querySelector(".clickBoard");
let imgs;
let cardsId = [];
let cardsSelected = [];
let cardsWon = 0;
let clicks = 0;
document.addEventListener("DOMContentLoaded", function () {
    

    createBoard(grid, cardArray);
    arrangeCard();
    playAgain.addEventListener("click", replay);

   

    imgs = document.querySelectorAll("img");
    Array.from(imgs).forEach(img =>
        img.addEventListener("click", flipCard)
    )
});


function createBoard(grid, array) {
    popup.style.display = "none";
    array.forEach((arr, index) => {
        let img = document.createElement("img");
        img.setAttribute("src", "1.png");
        img.setAttribute("data-id", index);
        grid.appendChild(img);
    })
}



function arrangeCard() {
    cardArray.sort(() => 0.5 - Math.random())
}

// flip Card function

function flipCard() {
    let selected = this.dataset.id;
    let clicked = cardArray[selected].name
    cardsSelected.push(clicked);

    source.src = `${clicked}.mp3`
    audio.load()
    audio.play()
    //this is the second method to play a sound

    //    let clicked =cardArray[selected].name
    // cardsSelected.push(clicked); 
    // let sound =new Audio(`./${clicked}.mp3`) 
    // function playSound(sound){
    // sound.play()
    // }
    // playSound(sound)


    cardsId.push(selected);
    this.classList.add("flip");
    this.setAttribute("src", cardArray[selected].img);
    if (cardsId.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}


function checkForMatch() {
    let imgs = document.querySelectorAll("img");
    let firstCard = cardsId[0];
    let secondCard = cardsId[1];
    if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) {
        alert("נמצאה התאמה!! המשך כך...");
        // source.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"
        //this below is used if you want to add sounds, you can comment it out if you dont want it

        cardsWon += 1;
        scoreBoard.innerHTML = cardsWon;
        setTimeout(checkWon, 500)
    } else {
        imgs[firstCard].setAttribute("src", "1.png");
        imgs[secondCard].setAttribute("src", "1.png"); alert("טעית! בבקשה לנסות שוב");
        source.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/error.mp3"
        audio.load()
        audio.play()
        imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip");
    }
    cardsSelected = [];
    cardsId = [];
    clicks += 1;
    clickBoard.innerHTML = clicks;
}

function checkWon() {
    if (cardsWon == cardArray.length / 2) {
        alert("סיימת הכל. כל הכבוד!!!")
        setTimeout(() => popup.style.display = "flex", 300);
    }
}

function replay() {
    arrangeCard();
    grid.innerHTML = "";
    createBoard(grid, cardArray);
    cardsWon = 0;
    clicks = 0;
    clickBoard.innerHTML = 0;
    scoreBoard.innerHTML = 0;
    popup.style.display = "none";
}



