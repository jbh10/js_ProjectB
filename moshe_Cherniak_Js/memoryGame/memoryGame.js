
rand();

let clickedId1 = [];
let clickedId2 = [];
let y = 0;
let x = [];
let z = [];
let q = [];
let numToSucces = 0;
let forSucces = 0;
let sameLevel = 0;
let sameId = 0;



function clicked(num, valueOf) {
    y++
    if (y <= 2) {
        clickedId1[y] = (`item${num}img`);
        clickedId2[y] = (`item${num}`);
        
        console.log(valueOf)

        document.getElementById(clickedId1[y]).style.display = "block";

        x[y] = document.getElementById(clickedId1[y]).src;
        z[y] = document.getElementById(clickedId1[y]).id;
        q[y] = document.getElementById(clickedId2[y]).id;

        if (x[1] == x[2]) {
            run1(forSucces);
        }
        else if (x.length <= 2) {

        }
        else if (x.length > 2 && x[1] !== x[2]) {
            document.getElementById("message").innerHTML = ("try again");
            run2();
        }
    }
    else {
        document.getElementById(clickedId[y]).style.display = "non";
    }
    console.log(z)
}

function run2() {
    setTimeout(function () {
        document.getElementById(z[1]).style.display = "none";
        document.getElementById(z[2]).style.display = "none";
        y = 0;
        z.length = 0;
        x.length = 0;
        q.length = 0;
    }, 1000);
}

function run1(forSucces) {
    setTimeout(function () {
        document.getElementById("message").innerHTML = ("wery well");
        document.getElementById(z[1]).style.display = "none";
        document.getElementById(z[2]).style.display = "none";
        document.getElementById(q[1]).style.backgroundImage = "none";
        document.getElementById(q[2]).style.backgroundImage = "none";
        y = 0;
        z.length = 0;
        x.length = 0;
        q.length = 0;
        numToSucces++;
        if (numToSucces == forSucces) {
            document.getElementById("message").innerHTML = "";
            document.getElementById("allitems").style.display = "none";
            document.getElementById("success").style.display = "block";
            document.querySelector("button").style.backgroundColor = "rgb(75, 129, 21)";
            numToSucces = 0;
        }
    }, 1000);
}



//mix 
function rand(level) {
    let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 11, 12, 13, 14, 15];
    let lengthOfArr = level;
    for (let index = 0; index <  level; index++) {
        let numRand = Math.floor(Math.random() * lengthOfArr);
        let selectId = document.getElementById(`item${index}img`);
        selectId.src = (`pictures/${arr[numRand]}.jpg`);
        // console.log(arr[numRand]);
        arr.splice(numRand, 1);
        lengthOfArr--;

    }
}


function newGame(level, id) {
    forSucces = level / 2;
    sameLevel = level;
    sameId = id;
    document.getElementById("level").innerHTML = (`level ${id}`)

    let items = document.getElementsByClassName("items");
    for (let index = 0; index < 30; index++) {
        items[index].style.display = "none";   
    }
    for (let index = 0; index < level; index++) {
        items[index].style.display = "block";
        items[index].style.width = "150px";
        items[index].style.height = "150px";
        items[index].style.margin = "15px";
        items[index].style.backgroundImage = "url(pictures/bakground.jpg)";
        items[index].style.cursor = "pointer";   
    }
    document.getElementById("allitems").style.display = "flex";
    document.getElementById("allitems").style.border = " 5px solid red";
    document.getElementById("success").style.display = "none";
    

    rand(level);
}

