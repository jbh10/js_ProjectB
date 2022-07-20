function logIn() {
    let name = document.getElementById("name").value;
    let currentUser;
    let password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.name == name && user.password == password) {
            // alert("שם משתמש וסיסמא נכונים");
            currentUser = {
                currentName: name,
            }
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            window.open("../insructions/instruction.html")
        }
    }
    alert("שם משתמש או סיסמא אינם נכונים");
}
