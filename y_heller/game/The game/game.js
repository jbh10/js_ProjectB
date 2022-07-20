
function Instructions() {
    document.getElementById("Instructions").style.display = "none";
   
}
obstacle.style.bottom = 50 + "px"
function start() {
    Sentence();
    document.getElementById("input").style.display = "block";
    document.getElementById("aManStop").style.display = "none";
    document.getElementById("aManWalks").style.display = "block";
    let id = null;
    let xPos = 0;
    id = setInterval(frame, 10);
    function frame() {
        xPos += 2;
        aManWalks.style.left = xPos + 'px';
        let a = parseInt(obstacle.style.bottom); 
        if (xPos >= window.innerWidth - 300) {
            if (a < 100) {
                xPos = 0;
                document.getElementById("aManStop").style.display = "block";
                document.getElementById("aManWalks").style.display = "none";
                scor = 0;
                document.getElementById("scor").innerHTML = `scor: ${scor}`;
                document.getElementById("Sentence").innerText = "game over"
                clearInterval(id);
            }
        }
        if (xPos >= window.innerWidth - 80) {
            xPos = 0;
            let r = Math.floor(Math.random() * Sentence.length);
            document.getElementById("Sentence").innerText = Sentence[r];
            obstacle.style.bottom = 50 + "px";
            obstacle.style.opacity = 100;
            Sentence();
        }
    }
}



function Sentence() {
    if (scor < 11) {
        let Sentence = ["<br>", "<p>", "<h1>", "</h1>", "</p>", "</br>", "<div>", "</div>"];
        let r = Math.floor(Math.random() * Sentence.length);
        document.getElementById("Sentence").innerText = Sentence[r];

        document.getElementById("input").addEventListener('input', () => {
            let find = document.getElementById("input").value
            if (find == Sentence[r]) {
                goUp();
                document.getElementById("Sentence").innerText = "הצלחת"
                document.getElementById("input").value = '';
                // return
            }
        })
    }
    else if (scor > 10 || scor < 21) {
        let Sentence2 = ["document", "function", "return", "console", "button", "script", ".style", "</div>"];
        let r = Math.floor(Math.random() * Sentence2.length);
        console.log(Sentence2[r]);
        document.getElementById("Sentence").innerText = Sentence2[r]

        document.getElementById("input").addEventListener('input', () => {
            let find = document.getElementById("input").value
            if (find == Sentence2[r]) {
                goUp();
                document.getElementById("Sentence").innerText = "הצלחת"
                document.getElementById("input").value = '';
                // return
            }
        })
    }
}





let yPos = 0;
let scor = 1;
function goUp() {
    let obstacle = document.getElementById("obstacle");
    let id = setInterval(function frame() {
        yPos += 3;
        obstacle.style.bottom = yPos + 'px';
        obstacle.style.opacity = 0
        if (yPos === 498) {
            yPos = 0;
            document.getElementById("scor").innerHTML = `scor: ${scor++}`;
            saveScore(scor);
            clearInterval(id);
        }
    }, 1);
}

function saveScore(scor) {
    let users = JSON.parse(localStorage.getItem("users"));
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));  
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.name == currentUser) {
           user.score = scor ;
           localStorage.setItem("users", JSON.stringify(users));
           document.getElementById("scor").innerHTML = `scor: ${scor++}`;   
        }
}}
