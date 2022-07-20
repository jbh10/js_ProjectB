
const activeUser = JSON.parse(localStorage.getItem("activeUser"));
let scoreCounter = activeUser.score;
let scoreInner = document.getElementById("score").innerHTML= `hello ${activeUser.firstName}👋🏼 Your score is ${scoreCounter}`;
let levelCaunter =Math.floor (scoreCounter/100);
let levels = document.getElementById("level").innerHTML= `level ${levelCaunter}`;


const emojis = ['🍌', '🥭', '🍍', '🍌', '🍒', ' 🕷️ ', '🦑', '🦀', '🦞', '🐍'];
const animationDetails = [
    {
        name: "banana",
        url: emojis[0],
        isGood: true,
        isRanung: true,
        points:8
    },
    {
        name: "strobery",
        url: emojis[1],
        isGood: true,
        isRanung: true,
        points:10
    },
    {
        name: "pineapple",
        url: emojis[2],
        isGood: true,
        isRanung: true,
        points:11
    },
    {
        name: "poteto",
        url: emojis[3],
        isGood: true,
        isRanung: true,
        points:8
    },
    {
        name: "chry",
        url: emojis[4],
        isGood: true,
        isRanung: true,
        points:13
    },
    {
        name: "spider",
        url: emojis[5],
        isGood: false,
        isRanung: true,
        points:-10
    },
    {
        name: "banana",
        url: emojis[6],
        isGood: false,
        isRanung: true,
        points:-15
    },
    {
        name: "banana",
        url: emojis[7],
        isGood: false,
        isRanung: true,
        points:-18
    },
    {
        name: "banana",
        url: emojis[8],
        isGood: false,
        isRanung: true,
        points:-19
    },
    {
        name: "banana",
        url: emojis[9],
        isGood: false,
        isRanung: true,
        points:-20
    },

];
const timer = Math.random() * 25 -levelCaunter ; 
let isRuning1 = true;
function stopGame() {
   if(isRuning1){ 
   isRuning1 = false;
   }else{isRuning1 = true
}
       
   }




function startGame() {
    
    const container = document.getElementById("container");
    let gameTimer = 0;
    
    const gameInterval = setInterval(() => {
        if (scoreCounter <= 0) {
                   
            alert("🥺 Failed Try again");
           scoreCounter =15;
          return
       }
        
        gameTimer++;
        if (isRuning1) {
            const element = document.createElement("div");
            element.setAttribute("isRuning", "true");
            element.classList.add("animate");
            let rand2 = Math.floor(Math.random() * animationDetails.length)
            const elementAnimationStyle = animationDetails[rand2];
            element.classList.add(elementAnimationStyle.isGood ? "good" : "bad");
            element.style.fontSize = 30 + "px";
            let rand1 = Math.floor(Math.random() * 350)
            element.style.left = rand1 + 'px';
            container.appendChild(element);
            element.innerHTML = elementAnimationStyle.url;
            let position = 0;
            const timer = Math.random() * 30 -levelCaunter ; 
                 
            const animateInterval = setInterval(frame, timer);
             
            function frame() {
                scoreInner = document.getElementById("score").innerHTML= `hello  ${activeUser.firstName}Your score is ${scoreCounter}`;
                levelCaunter =Math.floor (scoreCounter/200);
                levels = document.getElementById("level").innerHTML= `level ${levelCaunter}`;
                if (position == 550) {
                    element.remove()
                    clearInterval(animateInterval)
                } else if (element.getAttribute("isruning") == "true" && isRuning1) {
                    position++;
                    element.style.top = position + "px";
                }
                if (rand1 > (myCar - 50) && rand1 < (myCar + 50) && position >= 550) {
                    scoreCounter += elementAnimationStyle.points;
                    document.getElementById("score").innerHTML = scoreCounter;
                    elementAnimationStyle.isGood ? new Audio("IMAGES/Monkey voice.wav").play() : new Audio("IMAGES/lost1.wav").play()
                    
                }
                
                           
            }
            if (gameTimer === 2000) {
                alert("כל הכבוד ניצחת");
                clearInterval(gameInterval);
                scoreCounter = 15;    

            }
           
        }
    },200* timer);
}


let myCar = 170;

function left() {
    if (myCar <= 350 && myCar > 0) {
        let playerLeft = document.getElementById("player");
        myCar = myCar - 10;
        playerLeft.style.left = myCar + "px";
    }

}

function right() {
    if (myCar < 350 && myCar >= 0) {
        let playerLeft = document.getElementById("player");
        myCar = myCar + 10;
        playerLeft.style.left = myCar + "px";
    }
}


window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowRight":
            right()
            break;
        case "ArrowLeft":
            left()
            break;
    }

});

window.addEventListener('beforeunload', event => { 
   const users = JSON.parse(localStorage.getItem("users"));
   const apdatedUsers = users.map((user) => {
        if (user.firstName === activeUser.firstName && user.lastName === activeUser.lastName) {
            return {
                ...user,
                score: scoreCounter
            };
        }

        return user;
    });

    localStorage.setItem("users", JSON.stringify(apdatedUsers));
});
