console.log("javascript is working!")

function setup() {
    createCanvas(windowWidth, windowHeight);
    mouseX = mouseX + 1;
}

let img;

function preload() {
    img = loadImage("blackapple1.png");
}

function draw() {
    background(0);
    image(img, 0, 0, 400, 400);
    timer = timer + increment;
}

let timer = 0;
let increment = 0;

let imgWidth = 200; // Initial width of the image
let imgHeight = 200; // Initial height of the image

function preload() {
    img = loadImage('blackapple1.png');
}

function setup() {
    createCanvas(600, 600);
    imageMode(CENTER);
}

function draw() {
    background(220);
    image(img, width / 2, height / 2, imgWidth, imgHeight);
}

function mousePressed() {
    imgWidth += 20;
    imgHeight += 20;
}

console.log("hello there!");

let img1, img2, img3, img4, img5, img6, img7;
let gameStarted = false;
let prevMouseX = 0;
let prevMouseY = 0;
let mouseSpeed = 0;
let decayLevel = 0;
let decaySpeed = 0.01;

function preload() {
    img1 = loadImage('blackapple1.png');
    img2 = loadImage('blackapple2.png');
    img3 = loadImage('blackapple3.png');
    img4 = loadImage('blackapple4.png');
    img5 = loadImage('blackapple5.png');
    img6 = loadImage('blackapple6.png');
    img7 = loadImage('blackapple7.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    imageMode(CENTER);
}

function draw() {
    background(0);

    if (!gameStarted) {
        textSize(30);
        textFont('Helvetica');
        fill(255);
        text('An apple a day.', width / 2, height / 2 - 50);

        textSize(20);
        text('A visual metaphor depicting the brains decay during Alzheimers.', width / 2, height / 2 + 20);

        textSize(12);
        textAlign(CENTER, CENTER);
        let textLines = [
            'An Apple is used to represent the progression of Alzheimers, drawing ',
            'parallel to its decay caused by Neofabraea bacteria - a process',
            'mirroring the brains gradual deterioration.'
        ];

        for (let i = 0; i < textLines.length; i++) {
            text(textLines[i], width / 2, height / 2 + 70 + i * 15);
        }

        textStyle(ITALIC);
        text('Click to begin. Move the mouse to control the speed of decay.', width / 2, height / 2 + 70 + textLines.length * 15 + 20);
        textStyle(NORMAL);
    } else {
        let dx = mouseX - prevMouseX;
        let dy = mouseY - prevMouseY;
        mouseSpeed = sqrt(dx * dx + dy * dy);
        decayLevel += decaySpeed * mouseSpeed / 10;
        decayLevel = constrain(decayLevel, 0, 1);

        if (decayLevel < 0.14) {
            image(img1, width / 2, height / 2, 400, 400);
        } else if (decayLevel < 0.28) {
            image(img2, width / 2, height / 2, 400, 400);
        } else if (decayLevel < 0.42) {
            image(img3, width / 2, height / 2, 400, 400);
        } else if (decayLevel < 0.57) {
            image(img4, width / 2, height / 2, 400, 400);
        } else if (decayLevel < 0.71) {
            image(img5, width / 2, height / 2, 400, 400);
        } else if (decayLevel < 0.85) {
            image(img6, width / 2, height / 2, 400, 400);
        } else {
            image(img7, width / 2, height / 2, 400, 400);
        }

        prevMouseX = mouseX;
        prevMouseY = mouseY;
    }
}

function mousePressed() {
    gameStarted = true;
}

  