const button = document.getElementById("button1");

const snake = "url(https://www.animatedimages.org/data/media/290/animated-snake-image-0124.gif)"

const score = document.getElementById("score");
const highScore = document.getElementById("highscore");
const snakeSound = document.getElementById("snakesound");
const winSound = document.getElementById("winsound");
const levelUpSound = document.getElementById("levelUp");

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");

let b = [b1, b2, b3, b4, b5, b6, b7, b8, b9]
let s = 0;
let bl = 0;
let c = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// FUNCTION RANDOM NUMBER

const randomSquare = () => {
    return Math.floor(Math.random() * 9);

}
let number = randomSquare();

console.log(number);


// SOUNDS FUNCTION
const playSound = sound => {
    sound.play();
}
highScore.innerHTML = localStorage.getItem("highScore");
// CLICKS FUNCTION COLOR & SNAKE
b.forEach((e, i) => {
    b[i].addEventListener("click", function () {
        if (i === number) {
            b[number].style.backgroundImage = snake;
            playSound(snakeSound);
            b[number].style.backgroundColor = "orangered"
            setTimeout(() => {

                alert("You Lost!!")
            }, 400);
            setTimeout(() => {

                location.reload()
            }, 1000);
            highScore.innerHTML = localStorage.getItem("highScore")

        } else if (c[i] < 1) {
            b[i].style.backgroundColor = "lime";
            playSound(winSound);
            bl++;

            c[i]++
            s += 10;
            score.innerHTML = s;
            if (localStorage.getItem("highScore") > s) {
                localStorage.getItem("highScore") = s;
            }
            localStorage.setItem("highScore", s)
        }
        if (bl === 8) {
            b[i].style.backgroundColor = "lime";
            playSound(levelUpSound);
            setTimeout(() => {

                alert("You Won!!")
            }, 400);

            setTimeout(() => {

                location.reload()
            }, 1000);
            highScore.innerHTML = localStorage.getItem("highScore");


        }

        highScore.innerHTML = localStorage.getItem("highScore");


    })
});
// $('#table').load(document.URL + ' #table')
