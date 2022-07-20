function checkName() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
function login() {
    if (document.getElementById('name1').value && document.getElementById('password1').value) { // בדוק אם הכניס ערכים
        const users = JSON.parse(localStorage.getItem("users"))
        for (let i = 0; i < users.length; i++) {
            user = users[i]
            if (document.getElementById('name1').value == user.firstName && document.getElementById('password1').value == user.password) {
                window.open("./game/game2.html", "_self");
            }
        }
    }
    else {
        alert("Error")
    }
}
// let userExists = users.some((u) => { return u.firstName == user.firstName })
// if (userExists) {
//     alert("שם משתמש תפוס")
//     window.open("storage.html", "_self")
// }

// else {
//     users.push(user);
//     localStorage.setItem("users", JSON.stringify(users));
//     window.location.assign("login.html")
// }           
