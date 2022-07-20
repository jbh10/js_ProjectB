

    
function getScore(){
    let users = JSON.parse(localStorage.getItem('users'));
    let userNow = JSON.parse(localStorage.getItem('currentUser'));
    for(i = 0; i < users.length; i++){
        if(users[i].firstName == userNow.firstName && users[i].password == userNow.password){
            highScore = users[i].score
            document.getElementById('thisIsTheScore').innerHTML =  `score: ${highScore}`
            
            
        }
}}
function start(){
    let id1 = null;
    let id2 = null;
    let id3 = null;
    highScore = 0;
    start1()
    start2()
    
    moveElementImgs()
    
    function start1(){
    let pos = 0;
    let elem = document.getElementById('road1'); 
    id1 = setInterval(frame, 2);
    function frame(){    
        if(pos == 790){
            pos = 0 
        }
        else{
            pos +=2.5 ;
            elem.style.top = pos + 'px'; 
        }}}
        
function start2(){
    
    let pos = 0;
    let elem = document.getElementById('road2');
    id2 = setInterval(frame, 2);
    function frame(){
        if(pos == 390){
            pos = -400  
        }
        else{
            pos +=2.5;
            elem.style.top = pos + 'px';  
        }}}
        
        window.addEventListener("keydown", function (event){
            switch (event.key){
                case "ArrowRight":
                  right()
                  
                  break;
                case "ArrowLeft":
                  left()
                  break;
                
            }
        })
        let pleyerElem = document.getElementById('pleyer')
        pleyerPos = 0;
        function  right(){
            
            
            if(pleyerPos >= 248){
                pleyerPos = 0 
            }
            else{
            pleyerPos += 15
        }
            pleyerElem.style.left = pleyerPos + 'px'
            // console.log(pleyerElem.style.left);
        }
        function  left(){
            if(pleyerPos <= 1){
                pleyerPos = 250 
            }
            else{
            pleyerPos -= 15
        }
            pleyerElem.style.left = pleyerPos + 'px'
        }
        
        
       
       
        function moveElementImgs() {
            
           
            moveElementImg1()
            
            function moveElementImg1(){
                img = document.createElement("img")
                document.getElementById("continer").appendChild(img)
                imgPos = 0;
                img.src = "non.png"
                img.style.width = 50 + 'px'
                img.style.height = 50 + 'px'
                img.style.position = "absolute"
                xPosRan = Math.floor(Math.random() * 250);
                img.style.left = xPosRan + 'px'
                id3 = setInterval(moveImg1, 0.9)
                function moveImg1(){
                    if (imgPos == 750) {
                        clearInterval(id3) 
                        img.remove()
                        
                        highScore += 10
                        document.getElementById('thisIsTheScore').innerHTML =  `score: ${highScore}`
                        setTimeout(moveElementImg1, 1000 + Math.random() * 2000)
                    }
                    else{
                        imgPosTop= img.offsetTop
                        imgPosLeft= img.offsetLeft
                        pleyerPosTop = pleyerElem.offsetTop
                        pleyerPosLeft = pleyerElem.offsetLeft
                        imgPos +=2.5;
                        img.style.top = imgPos + 'px'
                         if((imgPosTop +50) >= pleyerPosTop && ((imgPosLeft + 50) >=  pleyerPosLeft && (imgPosLeft  <= (pleyerPosLeft +50)))){
                          alert(`game over your scor is: ${highScore}`)
                          highScore = 0
                            isGameOver() 
                         } 
                    } 
                        }
                       
                }}
              function isGameOver() {
                  clearInterval(id1)
                  clearInterval(id2)
                  clearInterval(id3)
              } 
            }
           
            function save(){
                let users = JSON.parse(localStorage.getItem('users'));
                let userNow = JSON.parse(localStorage.getItem('currentUser'));
                for(i = 0; i < users.length; i++){
                    if(users[i].firstName == userNow.firstName && users[i].password == userNow.password)
                    users[i].score = highScore
                   localStorage.removeItem('currentUser')
                }
                localStorage.setItem("users", JSON.stringify(users))
            }
        

       
       
       
       
       
       
     