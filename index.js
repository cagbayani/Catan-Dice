

var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var imageSelector = "images/dice" + randomNumber1 + ".png"; //image/dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imageSelector);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var image2 = document.querySelectorAll("img")[1];

var imageSelector2 = "images/dice" + randomNumber2 + ".png";

image2.setAttribute("src", imageSelector2);

document.querySelector("button").addEventListener("click", reroll);


function reroll() {

    document.querySelector("button").innerHTML = "Reroll Dice"

    randomNumber1 = Math.floor((Math.random() * 6) + 1);

    imageSelector = "images/dice" + randomNumber1 + ".png"; //image/dice1.png - dice6.png

    image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", imageSelector);

    randomNumber2 = Math.floor((Math.random() * 6) + 1);

    image2 = document.querySelectorAll("img")[1];

    imageSelector2 = "images/dice" + randomNumber2 + ".png";

    image2.setAttribute("src", imageSelector2);

    var sum = randomNumber2 + randomNumber1;

    document.querySelector("h1").innerHTML = "You roll a " + sum;

    if(sum === 7){
        imageSelector = "images/yellowdice"+randomNumber1+".png";
        image1.setAttribute("src", imageSelector);

        imageSelector2 = "images/yellowdice" + randomNumber2+".png";
        image2.setAttribute("src", imageSelector2);

        document.querySelector("h1").innerHTML = "Move the Robber";
    } else if (sum === 8){
        document.querySelector("h1").innerHTML = "You roll an " + sum;

    }

}

