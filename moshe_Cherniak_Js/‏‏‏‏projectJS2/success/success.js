let player = JSON.parse(localStorage.getItem("thisPlayer"));
document.getElementById('player').innerHTML = 
    (`you have ${player["game1Points"]} points`)


function newGame() {
    window.location.href = "../myGame/myGame.html"
}