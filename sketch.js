//Title Screen / Loading Screen
let gameStarted = false;
// the player on the left side of the screen
//EVERYONE LOCK IN

// scenes
let scene = 1;

/* for sounds *later*
function preload(){
   
} */

let playerScore = 5;
let enemyScore = 5;
let winImg

//Game Screen

let myXPos = 25;
let myYPos = 100;

let enemyXPos = 475;
let enemyYPos = 350;
let ySpeed, yDirection;

let myLeft, myRight, myTop, myBottom;
let ballTop, ballBottom, ballLeft, ballRight;
let playerY;
let ballX = 250
let ballY = 250;
let xDirection, xSpeed;

// Here you go
let bgImage;
let hit
function preload() {
  bgImage = loadImage("image.png");
  winImg = loadImage("broo.png");
  hit = createAudio("hit.mp3");
}

function setup() {
  createCanvas(500, 500);
  noStroke();
  ySpeed = 0;
  yDirection = -1
  xDirection = - 1
  xSpeed = 0
  rectMode(CENTER);
  playerScore = 0
  enemyScore = 0
}

function draw() {
  if (scene === 1) {
    first_screen();

  } else if (scene == 2) {
    background(0);
    fill(255, 255, 255)
    rect(250, 250, 25, 500)
    fill(0, 0, 255);
    rect(enemyXPos, enemyYPos, 25, 150);

    fill(255, 0, 0);
    rect(myXPos, myYPos, 25, 150);

    fill(0, 255, 0)
    circle(ballX, ballY, 25)
    text(playerScore, 100, 25)
    text(enemyScore, 375, 25)

    if (keyCode == 32) {
      ySpeed = 1
      xSpeed = 1
    }

    if (ballRight < 0) {
      enemyScore += 1
    }
    ballY += ySpeed * yDirection;
    ballX += xSpeed * xDirection;

    if (keyIsDown(87)) {
      myYPos -= 3
    }

    if (keyIsDown(83)) {
      myYPos += 3;
    }

    if (keyIsDown(UP_ARROW)) {
      enemyYPos -= 3
    }

    if (keyIsDown(DOWN_ARROW)) {
      enemyYPos += 3;
    }

    myTop = myYPos - 25;
    myBottom = myYPos + 25;
    myLeft = myXPos - 25;
    myRight = myXPos + 25;

    ballLeft = ballX - 25;
    ballRight = ballX + 25;
    ballTop = ballY - 25;
    ballBottom = ballY + 25;

    if (ballX >= enemyXPos - 13 && ballY >= enemyYPos - 83 && ballY <= enemyYPos + 83) {
      xDirection *= -1;
      yDirection = random([-1, 1]);
      xSpeed = random(2, 4);
      ySpeed = random(2, 4);
      hit.play()
    }

    if (ballX <= myXPos + 18 && ballY >= myYPos - 83 && ballY <= myYPos + 83) {
      xDirection *= -1;
      yDirection = random([-1, 1]);
      xSpeed = random(2, 4);
      ySpeed = random(2, 4);
      hit.play()
    }

    if (ballBottom > 498) {
      yDirection *= -1
      hit.play()

    }

    if (ballTop < 2) {
      yDirection *= -1
      hit.play()
    }

    if (ballX < 0) {
      ySpeed = 0
      xSpeed = 0
      ballX = 250
      ballY = 250
      enemyScore += 1
      if (keyCode == 32) {
        ySpeed = 3
        xSpeed = 3
      }
    }

    if (ballX > 500) {
      ySpeed = 0
      xSpeed = 0
      ballX = 250
      ballY = 250
      playerScore += 1
      if (keyCode == 32) {
        ySpeed = 3
        xSpeed = 3
      }
    }

    if (playerScore == 3) {
      background(255, 255, 255)
      win()

    } else if (enemyScore == 3) {
      background(255, 255, 255)
      winnny()


    }
  }
}

//Joseph do your title screen here
function first_screen() {
  image(bgImage, 0, 0);
  textAlign(CENTER, CENTER);


  stroke(255);
  noFill();


  fill(255);
  noStroke();
  textSize(32);
  text("PONG", 250, 200);


  textSize(18);
  text("By Team Chess", 250, 170);


  textSize(16);
  text("Click 'Play' to begin", 250, 240);
  text("Use ↑ and ↓ or W and S to move your paddle", 250, 270);


  stroke(255);
  fill(0);
  rect(250, 340, 200, 60, 20);


  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER);
  text("play", 250, 340)
  if (mouseIsPressed === true) {
    if (mouseButton === LEFT) {
      scene += 1
    }
  }




}

function win() {
  fill("black")
  image(winImg, 0, 0)
  textSize(25)
  text("Player1 Won ", 200, 100)
  text("they didnt pay me enough for this", 300, 200)

}

function winnny() {
  fill("black")
  image(winImg, 0, 0)
  textSize(25)
  text("Player2 Won ", 200, 100)
  text("they didnt pay me enough for this", 300, 200)

}