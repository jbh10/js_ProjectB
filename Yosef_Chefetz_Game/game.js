let td = document.getElementsByTagName('td')
let img = document.getElementsByTagName('img')

let randomNum = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffleArray(randomNum)

for (let i = 0; i <= 19; i++) {
    const image = document.getElementsByTagName('img')
    image[i].src = "pic/" + randomNum[i] + ".webp";
}

let arryImg = []
let fliptImg = []
let score = 0

function game() {
    let num = 0
    for (let i = 0; i < td.length; i++) {
        const element = td[i];
        element.addEventListener('click', () => {
            if (num == 2) {
                return
            }
            if (arryImg[0] && arryImg[0].id == img[i].id) {
                return
            }
            for (x of fliptImg) {
                if (x.id == img[i].id) {
                    return
                }
            }

            img[i].style.display = 'block';
            num += 1
            arryImg.push(img[i])

            if (arryImg[0] && arryImg[1] && arryImg[0].src == arryImg[1].src) {
                score += 1
                console.log(score);
                fliptImg.push(arryImg[0])
                fliptImg.push(arryImg[1])
                num = 0
                arryImg = []
                document.getElementById("finel").innerText = score

                if (fliptImg.length == 20) {
                    for (x of allUsers) {
                        if (x.userName == player) {
                            x.score += 100
                            localStorage.setItem("users", JSON.stringify(allUsers));
                            allScore.innerText = x.score
                        }
                    }
                    document.getElementById('status').innerText = "WINNER!!! \n You got 100 points";
                    score = 0
                    document.getElementById("finel").innerText = score
                    for (let i = 0; i < fliptImg.length; i++) {
                        fliptImg[i].style.display = 'none';

                    }
                    arryImg = []
                    fliptImg = []
                    shuffleArray(randomNum)
                    for (let i = 0; i <= 19; i++) {
                        const image = document.getElementsByTagName('img')
                        image[i].src = "pic/" + randomNum[i] + ".webp";
                    }
                    document.getElementById('minute').innerText = "02";
                    document.getElementById('second').innerText = "00";
                    minute = 1;
                    second = 59;
                }
            }
            if (arryImg[0] && arryImg[1] && arryImg[0].src !== arryImg[1].src) {
                function refres() {
                    arryImg[0].style.display = 'none';
                    arryImg[1].style.display = 'none';
                    num = 0
                    arryImg = []
                }
                let time = setTimeout(refres, 1000)
            }
        })
    }
}

userName = document.getElementById("userName")
userName.innerText = JSON.parse(localStorage.getItem("loged in user"))
allScore = document.getElementById("pScore")

player = JSON.parse(localStorage.getItem("loged in user")) || []
allUsers = JSON.parse(localStorage.getItem("users")) || []
for (x of allUsers) {
    if (x.userName == player) {
        localStorage.setItem("users", JSON.stringify(allUsers));
        allScore.innerText = x.score
    }
}

let minute = 1;
let second = 59;
let cron;
document.form_main.start.onclick = () => start();

function start() {
    game()
    cron = setInterval(() => { timer(); }, 1000);
}
function timer() {
    second--;
    if (second == 0) {
        second = 60;
        minute--;
    }
    document.getElementById('minute').innerText = minute;
    document.getElementById('second').innerText = returnData(second);

    if (second == 60 && minute == -1) {
        minute = 1;
        second = 59;
        score = 0
        document.getElementById("finel").innerText = score

        arryImg = []
        fliptImg = []
        for (let i = 0; i < img.length; i++) {
            img[i].style.display = 'none';

        }

        minute = 1;
        second = 59;
        document.getElementById('status').innerText = "Try again";
        shuffleArray(randomNum)
        for (let i = 0; i <= 19; i++) {
            const image = document.getElementsByTagName('img')
            image[i].src = "pic/" + randomNum[i] + ".webp";
        }
        start()
        document.getElementById('minute').innerText = "02";
        document.getElementById('second').innerText = "00";
        clearInterval(cron);
    }
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`
}