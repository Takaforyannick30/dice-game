let randomNumber1 = Math.random() * 6;

let finalRandomNumber1 = Math.floor(randomNumber1) + 1;

let randomNumber2 = Math.random() * 6;

let finalRandomNumber2 = Math.floor(randomNumber2) + 1;


document.querySelector("img").setAttribute("src", "./images/dice" + finalRandomNumber1 + ".png");

document.querySelector("img.img2").setAttribute("src", "./images/dice" + finalRandomNumber2 + ".png");

if (finalRandomNumber1 === finalRandomNumber2) {
    document.querySelector("h1").innerHTML = "its a draw";
} 
else if(finalRandomNumber2 > finalRandomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
} 
else {
    document.querySelector("h1").innerHTML = "1";
}

