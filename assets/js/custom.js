let startElem = document.getElementsByClassName("start");
let diceImageElem = document.getElementById("diceImage");
let imagePath = "./assets/img/";
let diceImage = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
let gifImage = "animate.gif";
let winAudio = new Audio("./assets/audio/winAudio.mp3");

startElem[0].addEventListener("click", () => {
    diceImageElem.src = imagePath + gifImage;
    generateDice();
});

generateDice();

function generateDice() {
    setTimeout(() => {
        let randomDiceNumber = getRandomNumber(6);

        // set random dice image
        diceImageElem.src = imagePath + diceImage[randomDiceNumber];

        if (randomDiceNumber === 5) {
            winAudio.play();
        }
    }, 2000)
}

function getRandomNumber(n) {
    return Math.floor(Math.random() * n);
}
