const button1 = document.getElementById("submit")
button1.addEventListener("click", function check() {
    let name1 = document.getElementById('name1').value;
    let lastName1 = document.getElementById('lastName1').value;
    if (name1 == lastName1) {
        alert('Error');
        location.reload();
    }
})

function saveUser() {
    let first = document.getElementById('name1').value;
    let last = document.getElementById('lastName1').value;
    let password = document.getElementById('password1').value;
    if (!first || !last || !password) {
        alert('Error');
        return
    }

    let user = {
        firstName: first,
        lastName: last,
        password: password
    }


let users = JSON.parse(localStorage.getItem("users")) || [];
localStorage.setItem("users", JSON.stringify(users));
users.push(user);
alert('נרשמת בהצלחה');
window.open("login.html");

let userExists = user.some((checkUser) => { return checkUser.firstName == user.firstName ==user.lastName })
if (userExists) {
    alert("שם משתמש תפוס");
    location.reload();
}
}