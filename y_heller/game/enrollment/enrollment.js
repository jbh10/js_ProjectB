function saveUser() {
    let fullName = document.getElementById("name").value;
    let cod = document.getElementById("password").value;
    let chek =  document.getElementById("chekPassword").value;
    // let userExists =  users.some((checkUser)=>{return checkUser.name == user.name})
    // if (userExists){
    //     alert("שם משתמש תפוס")
    // }
    if (cod == chek && cod != "" && fullName != "")  {
        let user = {
            name: fullName,
            password: cod, 
            score: 0
        }
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        document.getElementById("link").style.display = "block";
        // alert ("נרשמת בהצלחה");
        
    }
    else {
        alert("chek your password")
    }
}

function logIn() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.name == name && user.password == password) {
            let currentUser = name;
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
           window.location = ("../The game/game.html");
            return;
        }

    }
    alert("שם משתמש או סיסמא אינם נכונים");
    
}






