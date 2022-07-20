let images = [
    "a.jpg",
    "b.jpg",
    "c.jpg",
    "d.jpg",
    "e.jpg",
    "f.jpg",
    "a.jpg",
    "b.jpg",
    "c.jpg",
    "d.jpg",
    "e.jpg",
    "f.jpg",
]
// images.sort(function (a, b) { return 0.5 - Math.random() });

for (let i = 0; i < images.length; i++) {
    document.getElementById("id" + i).src = images[i]
}

let imagesNew = document.querySelectorAll('.step1');
let array = [];
let arrayId = [];
for (let i = 0; i < imagesNew.length; i++) {
    imagesNew[i].addEventListener('click', function () {
        this.classList.toggle('flipped');

        let pic = this.querySelector('.step2').querySelector('.img1').src;    // src של כל תמונה שנלחצת

        let pic1 = this.querySelector('.step2').querySelector('.img1').id;
        array.push(pic) // מכניס למערך כל מה שנלחץ
        arrayId.push(pic1)
        // console.log(pic);
        console.log(array);
        console.log(arrayId);
        // console.log(pic1);
        if (array.length == 2) {
            if (array[0] == array[1] && arrayId[0] != arrayId[1]) {
                alert(score = 1)
                array = [];
                arrayId = [];
            }
            if (array[0] != array[1]) {
                
            }
            if (arrayId[0] == arrayId[1]) {
                // this.classList.remove('flipped');
                    array.pop()
                    arrayId.pop()
                    return
            }


            // return
        }


        {

        }
    });
}
