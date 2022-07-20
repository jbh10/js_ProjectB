let deck = [];
let card = 0;
let radios;
localStorage["points"] = 0;
var timer = 0;
var timeout;
timeFunc();//function initializes the clock
//The function initializes the clock
function timeFunc() {
    timer = 0;
    clearInterval(timeout);
    timeout = setInterval(function () {
        timer++;
        var timeDisplayId = document.getElementById("time");
        str = "זמן: " + timer;
        timeDisplayId.innerHTML = str;
    }, 1000);
}


class MK {
    constructor(name, src, party) {
        this.name = name;
        this.src = src;
        this.party = party;
    }
}

// shuffle the cards
function shuffle() {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log("shuffle")
}

async function readSRC() {
    fetch('text.txt')
        .then(response => response.text())
        .then(data => {
            // Do something with your data
            console.log(data);
            createCards(data);
            console.log(deck);
            shuffle();
            displayCard(card);

        });

}

function createCards(text) {
    let lines = text.split("\n");
    console.log(lines);
    for (let line = 0; line < lines.length; line++) {
        console.log(lines[line]);
        deck.push(new MK(lines[line++].trim(), lines[line++].trim(), lines[line++].trim()))
    }

}

document.addEventListener('DOMContentLoaded', function () {
    readSRC();
    radios = document.querySelectorAll('input[type=radio][name="answer"]');
    Array.prototype.forEach.call(radios, function (radio) {
        radio.addEventListener('click', changeHandler);
    });

});

function displayCard(card) {
    document.getElementById("MK").setAttribute("src", deck[card].src);
    document.getElementById("MK").setAttribute("alt", deck[card].name);
}

function changeHandler(event) {
    let answersFalse = [" 😛לא נכון", "התבלבלת 🙄", " 😱טעית "]
    if (card === deck.length) {
        alert(` יופי! הצלחת לנחש ${localStorage["points"]}מתוך 15 שאלות👏 ` + ' תוך' + timer + '  שניות')
        clearInterval(timeout);
        Animation
        location.reload();
    }
    if (this.value != deck[card].party) {
        alert(answersFalse[Math.floor(Math.random() * answersFalse.length)]);

    } else {
        alert("צודק 👌")
        localStorage["points"]++
    }
    card++;
    displayCard(card)
    var answerDisplayId = document.getElementById("answers-counter");
    var questionsDisplayId = document.getElementById("questions-counter");
    this.checked = false;
    var str = "שאלה " + card + " " + "מתוך 15";
    questionsDisplayId.innerHTML = str;
    str = "תשובות נכונות: " + localStorage["points"];
    answerDisplayId.innerHTML = str;

}
