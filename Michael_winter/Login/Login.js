
function userCheck(){
    const userName = document.getElementById("username").value;
    const password = document.getElementById("pwd").value;
    
    const users = JSON.parse(localStorage.getItem("users")) || [];

    localStorage.setItem('player',userName);

    for (let i = 0; i < users.length; i++) {
        
        if (userName == users[i]['userName'] && password == users[i]['password']){
            window.open('../Game/Game.html');  
        } else {
            document.getElementById('goLog').textContent = 'create an account at the link below!!';
    }

}}


