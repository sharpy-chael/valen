const messages = [
    "Are you sure?",
    "Really Sure?",
    "Are you positive?",
    "Pookiee please...",
    "Just think about it!",
    "Please dont say no, I will be sad...",
    "I will be very sad...",
    "Pleaseeee dont say no!!!",
    "Okay... I wont push you...",
    "Just kidding, please say yes!<3"
];
const happyGif = "https://c.tenor.com/6foaT9raMTcAAAAj/bug-cat.gif";

const gifs = [
    "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif",
    "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif",
    "https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif",
    "https://media.giphy.com/media/ISOckXUybVfQ4/giphy.gif"
];
let originalYesSize = null;
let messageIndex = 0;
let gifIndex = 0;
let noClickCount = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gif = document.getElementById('valentineGif');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    if (!originalYesSize) {
        originalYesSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    }

    if (noClickCount < 4) {
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        const maxSize = originalYesSize * 3;
        const newSize = Math.min(currentSize * 1.5, maxSize);
        yesButton.style.fontSize = `${newSize}px`;
    }

    noClickCount++; 

    gif.src = gifs[gifIndex];
    gifIndex = (gifIndex + 1) % gifs.length;
}

function handleYesClick() {
    const gif = document.getElementById('valentineGif');
    const title = document.querySelector('h1');
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');

    title.textContent = "Yayyy!! 💖 Happy Valentine’s Day!";
   
    gif.src = happyGif;
    yesButton.style.display = "none";
    noButton.style.display = "none";

    gifIndex = 0;
    messageIndex = 0;
    noClickCount = 0;

    if (originalYesSize) {
        yesButton.style.fontSize = originalYesSize;
    }
}