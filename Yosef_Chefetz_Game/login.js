function login() {
    let name = document.getElementById('userName').value;
    let pwd = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    for (let obj of users) {
        if (obj.userName == name && obj.password == pwd) {
            //  obj.score += 1
            localStorage.setItem("loged in user", JSON.stringify(name))
            window.open("game.html","_self")
            return;
        }
        if (obj.userName !== name) {
            alert("user not in system")
            window.open("Registration.html","_self")
            return
        } if (obj.userName == name && obj.password !== pwd) {
            alert("your password is wrong")
            return
        }

    }
}