// function login() {
//     let name = document.getElementById('userName').value;
//     localStorage.setItem('userName', name);Register/Register.html
//     let pwd = document.getElementById('pwd').value;
//     localStorage.setItem('password', pwd);
//     let phonNumber = document.getElementById('phonNumber').value;
//     localStorage.setItem('phonNumber', phonNumber);
//     let Address = document.getElementById('ad').value;
//     localStorage.setItem('Address', Address)

//     alert('Login succeed');
// }


let idCount=0;
function login() {
    let check1 = document.forms['form']['Name'].value;
    let check2 = document.forms['form']['Pwd'].value;

    if (check1 == null || check1 == 0, check2 == null || check2 == 0){
        alert("Enter required values");
    } else {
    // const userDetails = {
    //     name: document.getElementById('userName').value,
    //     pwd : document.getElementById('pwd').value,
    //     phonNumber : document.getElementById('phonNumber').value,
    //     Address : document.getElementById('ad').value,

    // }
    // idCount++;
    // localStorage.setItem('userName', JSON.stringify(userDetails));
       let name = document.getElementById("userName").value;
       let password = document.getElementById("pwd").value;
       let Address = document.getElementById("ad").value;
       let phonNum = document.getElementById("phonNumber").value;

       let user = {
        userName : name,
        password : password,
        phonNum : phonNum,
        Address : Address
       }

       let users = JSON.parse(localStorage.getItem("users")) || [];
       users.push(user);
       localStorage.setItem("users", JSON.stringify(users));
       localStorage.setItem('player',name);
    alert('Login succeed');
    window.open('../Game/Game.html')
}
}

