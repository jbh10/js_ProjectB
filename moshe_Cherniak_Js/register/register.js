function register() {
    let fname = document.getElementById("firstName").value;
    let lname = document.getElementById("lastName").value;
    let userName = document.getElementById("userName").value;
    let pass = document.getElementById("password").value;

    if (!fname|| !lname || !userName || !pass) {
        alert("you need to fill in all the fields")
        return
    }

    let players = JSON.parse(localStorage.getItem("players")) || [];
    let cheackPlayer = true;

    for (const iterator of players) {
        if (iterator.userName == userName) {
            alert("the name already created");
            cheackPlayer = false
            return
        }
    }


    const newPlaer = {
        firstName: fname,
        lastName: lname,
        userName: userName,
        password: pass,
        game2Score: 0,
        game2Record: [0],
        game2Level: 1,
        game1Points: 0,
        game1LastGame: [],
        game3Level: 1,
        game3Record: [0]
    }


    players.push(newPlaer);
    localStorage.setItem("players", JSON.stringify(players))
    window.location = "../login/login.html"

}


window.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
        case 13:
            register()
    }
})
