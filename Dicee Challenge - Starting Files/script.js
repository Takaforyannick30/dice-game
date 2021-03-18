let randomNumber1 = Math.random() * 6;

let finalRandomNumber1 = Math.floor(randomNumber1) + 1;

let randomNumber2 = Math.random() * 6;

let finalRandomNumber2 = Math.floor(randomNumber2) + 1;


document.querySelector("img").setAttribute("src", "./images/dice" + finalRandomNumber1 + ".png");

document.querySelector("img.img2").setAttribute("src", "./images/dice" + finalRandomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "It's a draw";
} else {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}