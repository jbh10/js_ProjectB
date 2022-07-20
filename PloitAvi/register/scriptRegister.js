
// signInFunc()
// document.getElementById('register').addEventListener('click', function registerDisplayNone() {
//     document.getElementById('logInForm').style.display = "none";
//     document.getElementById('registrationForm').style.display = "grid"
// })
// function signInFunc() {
//     document.getElementById('registrationForm').style.display = "none";
//     document.getElementById('logInForm').style.display = "grid"
// }
// document.getElementById('logIn').addEventListener('click',signInFunc)

// function saveUser() {
//     let first = document.getElementById("fName").value;
//     let last = document.getElementById('lName').value;
//     let pass = document.getElementById('password').value;
//     console.log(first);
// let user = {
//     firstName:first,
//     lastName:last,
//     password:pass
// }
// console.log(user);
// let users = JSON.parse(localStorage.getItem("users"))||[];
// users.push('user')
// localStorage.setItem("users",JSON.stringify("users"))

 
// // let usersNotNull =JSON.parse(localStorage.getItem("storageName")) || [];
// // if(! usersNotNull) {
// //     users = [];
// // }
// // users.push('storageName');
// // localStorage.setItem("storageName", JSON.stringify(json));

// // function checkPassword() {
// //     if (document.getElementById(password).value || document.getElementById(password2).value) {
// //         window.open('../game.game.html')
// //     }
// //     else {
// //         alert = "הסיסמא אינה תואמת";
// //     }

// }
let fullName;
function saveUser() {
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let password = document.getElementById("password").value;
    let check =  document.getElementById("checkPassword").value;
    console.log('1');
    if (password == check && password != "" && firstName != "" && lastName != "")  {
        console.log('2');
        let user = {
            name: firstName + " " + lastName,
            password: password
        }
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let userExists = users.some((checkUser)=>{return checkUser.name == user.name})
        if (userExists){
            alert("שם משתמש תפוס")
        }
        else{
               users.push(user);
        console.log(users);
        localStorage.setItem("users", JSON.stringify(users));
        window.open("../login/login.html")
        alert ("נרשמת בהצלחה");
        
        }
    }
    else {
        alert("Check your details")
    }
}
