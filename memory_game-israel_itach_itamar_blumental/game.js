
        let allUsers = JSON.parse(localStorage.getItem('users'))
        let player = localStorage.getItem('player');
        let score = 0;
         document.getElementById('yourName').textContent = player
        
        let i = [
            { name: "img1", img: "https://www.amsterdam.org.il/Photos/Holland/Giant-Panda-Bear.jpg" },
            { name: "img1", img: "https://www.amsterdam.org.il/Photos/Holland/Giant-Panda-Bear.jpg" },

            { name: "img2", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Totenkopfaffe_Saimiri_sciureus_Tierpark_Hellabrunn-21.jpg/1200px-Totenkopfaffe_Saimiri_sciureus_Tierpark_Hellabrunn-21.jpg" },
            { name: "img2", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Totenkopfaffe_Saimiri_sciureus_Tierpark_Hellabrunn-21.jpg/1200px-Totenkopfaffe_Saimiri_sciureus_Tierpark_Hellabrunn-21.jpg" },

            { name: "img3", img: "https://static.wixstatic.com/media/6eeeda_e8ef8df40789485794ff231c594ea9ed~mv2_d_4896_3264_s_4_2.jpg/v1/crop/x_1401,y_0,w_2951,h_3264/fill/w_640,h_708,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6eeeda_e8ef8df40789485794ff231c594ea9ed~mv2_d_4896_3264_s_4_2.jpg" },
            { name: "img3", img: "https://static.wixstatic.com/media/6eeeda_e8ef8df40789485794ff231c594ea9ed~mv2_d_4896_3264_s_4_2.jpg/v1/crop/x_1401,y_0,w_2951,h_3264/fill/w_640,h_708,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6eeeda_e8ef8df40789485794ff231c594ea9ed~mv2_d_4896_3264_s_4_2.jpg" },

            { name: "img4", img: "https://www.rishonlezion.muni.il/Residents/Environment/PublishingImages/Animals/animals24.jpg" },
            { name: "img4", img: "https://www.rishonlezion.muni.il/Residents/Environment/PublishingImages/Animals/animals24.jpg" },

            { name: "img5", img: "https://s3-us-west-2.amazonaws.com/melingoimages/Images/90800.jpg" },
            { name: "img5", img: "https://s3-us-west-2.amazonaws.com/melingoimages/Images/90800.jpg" },

            { name: "img6", img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.png" },
            { name: "img6", img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.png" },

            { name: "img7", img: "https://upload.wikimedia.org/wikipedia/commons/3/35/Netzgiraffe_%28Giraffa_camelopardalis_reticulata%29_Tierpark_Hellabrunn-13.jpg" },
            { name: "img7", img: "https://upload.wikimedia.org/wikipedia/commons/3/35/Netzgiraffe_%28Giraffa_camelopardalis_reticulata%29_Tierpark_Hellabrunn-13.jpg" },

            { name: "img8", img: "https://d3m9l0v76dty0.cloudfront.net/system/photos/1310147/original/c3032bcff24c65036f422e197e16d296.jpg" },
            { name: "img8", img: "https://d3m9l0v76dty0.cloudfront.net/system/photos/1310147/original/c3032bcff24c65036f422e197e16d296.jpg" },

            { name: "img9", img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Siberian_Tiger_%2829250157550%29.jpg" },
            { name: "img9", img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Siberian_Tiger_%2829250157550%29.jpg" },

            { name: "img10", img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Elephant_Walking.JPG" },
            { name: "img10", img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Elephant_Walking.JPG" },
        ]
        let player1;
        let player2;
        let state = 0;
        let id1;
        let id2;
        let res = []
        let changeArray = i.sort((a, b) => 0.5 - Math.random());

        let cangeSrc = (newSrc, id) => {

            if (id1 === id) {
                return

            }

            if (res.includes(newSrc)) {
                return
            }

            if (state === 0) {
                player1 = newSrc
                // res.push(player1);
                state++
                document.getElementById(id).src = newSrc;
                id1 = id;
            }
            else if (state === 1) {
                player2 = newSrc
                state++
                document.getElementById(id).src = newSrc;
                id2 = id;
                check();

            }

        }

        function check() {
            if (player1 === player2) {
                document.getElementById(id1).disabled = true;
                document.getElementById(id2).disabled = true;
                state = 0;
                res.push(player1);
                score += 10;
                document.getElementById("score").textContent = score;
                updateData()

            }
            else {

                setTimeout(() => {
                    document.getElementById(id1).src = "https://img.freepik.com/free-vector/zoo-animals-wild-nature-background_1308-44948.jpg?w=2000";
                    document.getElementById(id2).src = "https://img.freepik.com/free-vector/zoo-animals-wild-nature-background_1308-44948.jpg?w=2000";
                    state = 0
                }, 1000)
            }
        }
        function updateData() {
            for (let i = 0; i < allUsers.length; i++) {
                if (allUsers[i].userName == player) {
                    allUsers[i].score = score;
                }
            }
            localStorage.setItem('users',JSON.stringify(allUsers));
        }