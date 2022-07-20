




const cardArray = [
    {name:"blue", img:"./assets/blue.png"},
    {name:"blue", img:"./assets/blue.png"},
    {name:"flower", img:"./assets/flower.png"},
    {name:"flower", img:"./assets/flower.png"},
    {name:"neon", img:"./assets/neon.png"},
    {name:"neon", img:"./assets/neon.png"},
    {name:"plain", img:"./assets/plain.png"},
    {name:"plain", img:"./assets/plain.png"},
    {name:"sky", img:"./assets/sky.png"},
    {name:"sky", img:"./assets/sky.png"},
    {name:"water", img:"./assets/water.png"},
    {name:"water", img:"./assets/water.png"}
];

cardArray.sort(() => 0.5 - Math.random());



function creatBoard(){
    for(let i = 0; i < cardArray.length; i++){
        let card = document.createElement('img');
        card.setAttribute('src', './assets/screen.png');
        card.id = i;
        const grid = document.querySelector(".grid");
        grid.appendChild(card);
        card.addEventListener('click', () => {flipCard(i)});
        
    }
}

let player = localStorage.getItem('player');

let dataUsers = JSON.parse(localStorage.getItem('users'));
// let score  = 0 
let cardChosen = [];
creatBoard();

let cardWon = updatePlayer () || 0;

function flipCard(cardId){
  const element = document.getElementById(cardId);
  element.setAttribute('src', cardArray[cardId].img);
    cardChosen.push(element);
    if (cardChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch() {
    const [optionOne,optiontow]=cardChosen;
    if (optionOne.getAttribute('src') === optiontow.getAttribute('src')) {
        // alert('you found a match');
        cardWon++;
        
        updateUsers();
        const resultDisplay = document.querySelector("#results");

        resultDisplay.innerHTML = cardWon;
        if (cardWon === cardArray.length /2) {
        // alert('Congratulations! you found them all!');
}


    } else {
      cardChosen.forEach(el => {
        el.setAttribute('src', './assets/screen.png');
      })
        
    }
    cardChosen = [];
}




function updateUsers (){
for (let i = 0; i < dataUsers.length; i++) {
    if(dataUsers[i].userName == player){
        dataUsers[i].score = cardWon;
        localStorage.setItem('users',JSON.stringify(dataUsers));
    }
    
}}



function updatePlayer (){
    for (let i = 0; i < dataUsers.length; i++) {
        if(dataUsers[i].userName == player){
         
               return dataUsers[i].score
            
        }
        
    }}




