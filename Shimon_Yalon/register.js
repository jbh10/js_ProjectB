kneset.onclick = function () {
    let ended = false;
    kneset.addEventListener("transitionend", function () {
        if (!ended) {
            ended = true;
            alert("Done");
        }
    });
    kneset.classList.add('growing');
}


function submit() {
    let userName = document.querySelector("#Name").value;
    let userPasword = document.querySelector("#psw").value;
    let userPassRe = document.querySelector("#psw-repeat").value;
    if (userPasword == userPassRe) {

        let userAcount = {
            userName: userName,
            userPasword: userPasword,
            userPassRe: userPassRe
        }
       
    } else {
        alert("the pasword is not match to the first")
        return;
    }

   window.open('capitalGame.html', '_self')
     //   window.location.pathname = ("capitalGame.html");
    }


    

    
    


