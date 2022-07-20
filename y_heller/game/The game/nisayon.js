

let obstacle = document.getElementById("obstacle");
function start() {
    document.getElementById("aManStop").style.display = "none";
    document.getElementById("aManWalks").style.display = "block";
    let id = null;
    let xPos = 0;
    id = setInterval(frame, 10);
    function frame() {
        if ( aManWalks.style.left > window.innerWidth -50 && document.getElementById("obstacle").style.bottom < 55) {
            clearInterval(id);
            document.getElementById("aManStop").style.display = "block";
            document.getElementById("aManWalks").style.display = "none";
            alert("game over");
        }
        else {
            xPos++;
            aManWalks.style.left = xPos + 'px';
            if (xPos === window.innerWidth - 80) {
                xPos = 0;
            }
        }
    }
}


let place = 0;
let scor = 1;
let Sentence = ["<br>", "<p>", "<h1>", "</h1>", "</p>", "</br>"];
function goUp() {
    document.getElementById("Sentence").innerText = Sentence[place];
    place++

    let obstacle = document.getElementById("obstacle");
    let yPos = 0;

    let id = setInterval(function frame() {

        yPos += 3;
        obstacle.style.bottom = yPos + 'px';
        // obstacle.style.opacity = 0
        if (yPos === 498) {
            yPos = 0;
            document.getElementById("scor").innerHTML = `scor: ${scor++}`;

            clearInterval(id);
            return
        }
        
    }, 1);

}



// let Sentence = [ "<br>", "<p>", "<h1>", "</h1>", "</p>", "</br>"];
for (let i = 0; i < Sentence.length; i++) {
    let r = Math.floor(Math.random() * Sentence.length)
    console.log(Sentence[r]);
    document.getElementById("Sentence").innerHTML = Sentence[r]
}





document.getElementById("input").addEventListener('input', () => {
    let find = Sentence.indexOf(document.getElementById("input").value);
    console.log(find);
    if (find >= 0) {
        document.getElementById("chek").style.pointerEvents = "auto"

    }
})
