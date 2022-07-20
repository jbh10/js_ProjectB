let player = JSON.parse(localStorage.getItem("thisPlayer"))
        document.getElementById("thePlayer").innerHTML =
            (`${player.firstName} <br> ${player.lastName}`);
        document.getElementById("points").innerText = player["game2Record"][0];
        document.getElementById("level").innerText = player["game2Level"];
        document.getElementById("score").innerText = player["game2Score"];


        function newGame() {
            document.getElementById("newGame").style.display = "none"
            document.getElementById("score").style.display = "block"
            newGamwe = setInterval(newCar, 1700 - level * 130)
        }
        let level = player["game2Level"];
        let newGamwe;
        let score = player["game2Score"];

        function newCar() {
            score++
            document.getElementById("score").innerHTML = score;
            let car = document.createElement('div');
            car.classList.add('anotherCar');
            let rand = Math.floor(Math.random() * 3) * 180;
            car.style.left = rand + "px";
            document.getElementById('road').appendChild(car);
            let yPos = 0;
            let posCAr = setInterval(topPos, 10 - level);
            if (score / level == 20) {
                level++;
                player["game2Level"] = level;
                alert("level" + level)
                newPage();
            }
           
            function topPos() {
                if (yPos >= 800) {
                    yPos = 0;
                    car.remove();
                    clearInterval(posCAr);
                }
                if (left == rand && yPos >= 450) {
                    score = 0;
                    level = 1;
                    clearInterval(posCAr)
                    alert("game over");
                    if (score >  player["game2Record"][0]) {
                        alert('you have new record');
                    }
                    newPage(); 
                }
                yPos += 3;
                car.style.top = yPos + "px";
            }
        }


        function newPage(posCAr) {
                    player["game2Score"] = score;
                    player["game2Level"] = level;
                    player["game2Record"].push(score);
                    player["game2Record"].sort(function (a, b) { return b - a });
                    localStorage.setItem("thisPlayer", JSON.stringify(player));
                    let save = JSON.parse(localStorage.getItem("players"));
                    for (const iterator of save) {
                        if (iterator.userName == player.userName) {
                            iterator["game2Score"] = player["game2Score"] 
                            iterator["game2Level"] = level;
                            iterator["game2Record"].push(score);
                            iterator["game2Record"].sort(function (a, b) { return b - a });
                        }
                    }
                    localStorage.setItem("players", JSON.stringify(save));
                    clearInterval(posCAr);
                    clearInterval(newGamwe);
                    location.reload();
        }



        let left = 0
        window.addEventListener("keydown", function (e) {
            switch (e.keyCode) {
                case 39:
                    left += 180;
                    myCar.style.left = left + "px";
                    break;

                case 37:
                    left -= 180;
                    myCar.style.left = left + "px";
                    break;
                case 13:
                newGame(e);
                    break
            }
        })

        function level1() {
            level = 1;
            score = 0;
            newPage()
        }
        function navGames() {
            window.location.href = "../navGames.html";
        }


        function login() {
            localStorage.setItem('numOfGame', 2);
            window.location.href = "../login/login.html";
            
        }
        //register
        function register() {
            localStorage.setItem('numOfGame', 2);
            window.location.href = "../register/register.html"
        }