function saveUser() {
    let name = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (name == "" || email == "" || password == "") {
        return
    }
    let user = {
        userName: name,
        email: email,
        password: password,
        score: 0,

    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    for (let x of users) {
        if (x.userName == name && x.email !== email) {
            alert('user name taken')
            return
        }
        if (x.userName == name && x.email == email) {
            alert('you alredy registered')
            window.open("login.html","_self")
            return
        }
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    window.open("login.html","_self")
}