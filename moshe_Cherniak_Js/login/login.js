function login() {
    let userName = document.getElementById("userName").value;
    let pass = document.getElementById("password").value;

    let players = JSON.parse(localStorage.getItem("players"));

    for (let index = 0; index < players.length; index++) {
        let player = players[index];
        if (player.userName == userName && player.password == pass) {
            let game = localStorage.getItem('numOfGame');
            console.log()
            switch (game) {
                case '1':
                window.location= "../‏‏‏‏projectJS2/myGame/myGame.html";     
                    break;
                case '2':
                    window.location = "../driveCar/index.html";   
                    break;  
                case '3':
                    window.location = "../snake/snake.html";   
                    break; 
            }
           
            localStorage.setItem("thisPlayer", JSON.stringify(player));
            return
        }
    }
    alert("try again")
}

window.addEventListener("keydown", (e) => {
    switch(e.keyCode) {
        case 13: 
           login() 
    }
})