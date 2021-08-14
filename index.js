
var diceImage = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice4.png", "dice5.png", "dice6.png"];

document.querySelector("button").addEventListener("click", function () {

    var diceSound = new Audio('audio/diceSound.mp3');

    setTimeout(function(){
        diceSound.play();
    },500);
    
    var sec = 100;

    for (i = 0; i < 40; i++) {

        setTimeout(function () {
            reroll();
            reroll();
        }, sec);
        sec = sec + 50;
        console.log(sec);
    }

    // slow down roll 
    setTimeout(function () {
        reroll();
    }, 1200);

    setTimeout(function () {
        reroll();
    }, 1400);

    setTimeout(function () {
        reroll();
    }, 1600);

    setTimeout(function () {
        reroll();
    }, 1800);

    setTimeout(function () {
        reroll();
    }, 2500);

    setTimeout(function () {
        reroll();
    }, 2900);

    setTimeout(function () {
        reroll();
    }, 3000);

    

});

function reroll() {

    document.querySelector("button").innerHTML = "Reroll Dice"

    var randomNumber1 = Math.floor((Math.random() * 6) + 1);

    var imageSelector = "images/dice" + randomNumber1 + ".png"; //image/dice1.png - dice6.png

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", imageSelector);

    var randomNumber2 = Math.floor((Math.random() * 6) + 1);

    var image2 = document.querySelectorAll("img")[1];

    var imageSelector2 = "images/dice" + randomNumber2 + ".png";

    image2.setAttribute("src", imageSelector2);

    var sum = randomNumber2 + randomNumber1;

    document.querySelector("h1").innerHTML = "You rolled a " + sum;

    $("body").css("background", "#393E46");

    if (sum === 7) {
        imageSelector = "images/yellowdice" + randomNumber1 + ".png";
        image1.setAttribute("src", imageSelector);

        imageSelector2 = "images/yellowdice" + randomNumber2 + ".png";
        image2.setAttribute("src", imageSelector2);

        $("body").css("background-image", "url(images/drought.jpg)");
        $("body").css("background-blend-mode", "soft-light");
        document.querySelector("h1").innerHTML = "Move the Robber";

    } else if (sum === 8 || sum === 11) {
        document.querySelector("h1").innerHTML = "You rolled an " + sum;

    }

}

