let objImage = null;
let divAnim = document.getElementById("divAnim")
let position = 50;
let interval;
let startGame = document.getElementById('start');
let word = document.getElementById('word').value;
let wordFild = document.getElementById("word");
let pause = document.getElementById('pauseButton');
let instructions = document.getElementById('instructions');
let standingMan = document.getElementById('man2');

let hint = document.getElementById("hint")
let userName = (JSON.parse(localStorage.getItem("currentUser"))).currentName;
console.log("userName: ",userName);
// let index = listLetters.indexOf(char)
let score =localStorage.getItem(userName) || 0;
document.getElementById('score').innerHTML=score
console.log("score: ",score);
let listWords = {
    A: 'Alpha',
    B: 'Bravo',
    C: 'Charlie',
    D: 'Delta',
    E: 'Echo',
    F: 'Foxtrot',
    G: 'Golf',
    H: 'Hotel',
    I: 'India',
    J: 'Juliet',
    K: 'Kilo',
    L: 'Lima',
    M: 'Mike',
    N: 'November',
    O: 'Oscar',
    P: 'Papa',
    Q: 'Quebec',
    R: 'Romeo',
    S: 'Sierra',
    T: 'Tango',
    U: 'Uniform',
    V: 'Victor',
    W: 'Whiskey',
    X: 'x-ray',
    Y: 'Yankee',
    Z: 'Zulu'
}
pause.innerHTML = 'pause';
function randomFunc() {
    return Math.floor(Math.random() * listLetters.length)
}
let listLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
function getWord() {

    let char = listLetters[randomFunc()]
    // console.log(char);
    let myWord = listWords[char]
    // console.log(myWord);
    let index = listLetters.indexOf(char)
    console.log(index);

    document.getElementById('text').innerHTML = char;
    document.getElementById("hint").innerHTML = myWord;
    listLetters.splice(index, 1);
    console.log(listLetters);
    if (index <= 0) {
        document.getElementById('victory').innerHTML.style.display = 'block'
    }
}

let keys = Object.keys(listWords)
let values = Object.values(listWords)
standing()
divAnim.style.top = '450px'
divAnim.style.left = '1650px'
startGame.addEventListener('click', onButtonClick)
// startGame.addEventListener('click', getWord)
startGame.addEventListener('click', displayFilds)
function displayFilds() {
    wordFild.style.display = "block"
    wordFild.style.cssFloat = "left";
    instructions.style.display = "block"
    document.getElementById('pauseButton').style.display = "block"
}
console.log(wordFild);
function onButtonClick() {
    getWord()
    animation()
    walking()
    startInvisibly()
}
function animation() {
    interval = setInterval(function () {
        position += 1;
        if (position > 1750) {
            randomFunc()
            moveDown()
            
            console.log(score);
            document.getElementById('word').value = ''
        }
        if (position >= 1520) {
            // hintInvisibly()score ++
            if (position > window.innerWidth) {
                position = 50
                getWord()
                clearInput()
                hintInvisibly()
                score ++;
                localStorage.setItem(userName,score)
                document.getElementById('score').innerHTML=score
            }
            else if (divAnim.style.top > '400px' && position < 1530) {
                standing()
                alert("oh!!! please try again");
                clearInterval(interval);
                position = 50;
                clearInput();
                standing();
                // hintInvisibly();
                moveDown();
                startVisibly()
            }
        }
        man.style.left = position + 'px';
    }, 5)
}
console.log(score);
function walking() {
    document.getElementById('man2').style.display = 'none'
    document.getElementById('man').style.display = 'block'
}
function standing() {
    document.getElementById('man').style.display = 'none'
    document.getElementById('man2').style.display = 'block'
}
function clearInput() {
    document.getElementById('word').value = ''
}
function hintInvisibly() {
    hint.style.display = "none"
    // document.getElementById("hintButton").innerHTML.style.display = "none"
}
function startInvisibly() {
    document.getElementById('start').style.display = 'none'
    hint.style.display = "none"
    wordFild.style.display = "inline-block"
}

function startVisibly() {
    document.getElementById('start').style.display = 'inline-block'
    wordFild.style.display = "none"
}
function stopAnimation() {
    clearInterval(interval)
}
pause.addEventListener('click', function () {
    if (pause.innerHTML == 'continue') {
        pause.innerHTML = 'pause';
        animation()
        walking()
       
    }
    else {
        pause.innerHTML = 'continue'
        stopAnimation()
         standing()
    }
})



// function showWord() {
//     let random = randomFunc()
// document.getElementById('text').innerHTML = keys[random]
//     let hint = document.getElementById("hint")
//     hint.innerHTML = values[random];
// }

hintButton.addEventListener('click', hintVisability)
function hintVisability() {
    hint.style.display = "block"
    // document.getElementById("hintButton").innerHTML.style.display = "block"
}

function checkFit() {
    if (document.getElementById('word').value.toLowerCase() == hint.innerHTML.toLowerCase()) {
        moveUp()
    }
    //     else {
    //         console.log(false);
    //     }
    // }
    // if (man.style.left + 'px' < 1000) {
    //     console.log(true);
    // }
    // else {
    //     console.log(false);
}

let divPos = 450;
function moveUp() {
    let idUp = null
    clearInterval(idUp);
    idUp = setInterval(frameUp, 10);
    function frameUp() {
        if (divPos == 200) {
            clearInterval(idUp);
        } else {
            divPos--;
            divAnim.style.top = divPos + 'px';
        }
    }
}
if (man.style.left === '100 px') {
    man.style.left = '0 + px'
}
function moveDown() {
    let idDown = null
    clearInterval(idDown);
    idDown = setInterval(frameDown, 10);
    function frameDown() {
        if (divPos == 450) {
            clearInterval(idDown);
        } else {
            divPos++;
            divAnim.style.top = divPos + 'px';
        }
    }
}
let currentUserObject = JSON.parse(localStorage.getItem('currentUser'));
document.getElementById('user').innerHTML = currentUserObject.currentName

