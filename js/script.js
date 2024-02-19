let images = ['../media/images/candy.png', '../media/images/cat.png', '../media/images/ghost.png'];

document.getElementById("randomNumber").addEventListener("click", displayImage);

function displayImage(){
    let image = document.getElementById('candy');
    let random = Math.floor(Math.random() * images.length);
    image.src = images[random];
}
