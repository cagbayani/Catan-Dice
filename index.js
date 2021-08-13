

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

    document.querySelector("h1").innerHTML = "You rolled a " + sum;

    $("body").css("background","#393E46");

    if(sum === 7){
        imageSelector = "images/yellowdice"+randomNumber1+".png";
        image1.setAttribute("src", imageSelector);

        imageSelector2 = "images/yellowdice" + randomNumber2+".png";
        image2.setAttribute("src", imageSelector2);

        $("body").css("background-image","url(images/drought.jpg)");
        $("body").css("background-blend-mode","soft-light");
        document.querySelector("h1").innerHTML = "Move the Robber";

    } else if (sum === 8 || sum === 11){
        document.querySelector("h1").innerHTML = "You rolled an " + sum;

    }

}

