let rh = 50;
let rw = 300;
let zdj;
let zdj2;
let zdj3;
let endTime;

function preload() {
  zdj = loadImage('skam (7).png');
  zdj2 = loadImage('skam (10).png');
  zdj3 = loadImage('skam (11).png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);

  endTime = millis() + 10 * 60 * 1000;
}

function draw() {
  background('#40068B');
  

  let wh = 3 * windowHeight / 4;
  let centerX = windowWidth / 2;
  let cpY = 4 * windowHeight / 5;
  let tcX = 1 * windowWidth / 14;
  let tcY = 1 * windowHeight / 14;

  image(zdj, -230, -230);

  if (frameCount % 60 < 30) {
    image(zdj2, width - 530, -230);
  } else {
    image(zdj3, width - 530, -230);
  }

  
  let remaining = endTime - millis();
  if (remaining < 0) {
    remaining = 0;
  }
  let minutes = floor(remaining / 60000);
  let seconds = floor((remaining % 60000) / 1000);
  let timeStr = nf(minutes, 2) + ':' + nf(seconds, 2);

  fill(255);
  textSize(24);
  text(timeStr, centerX, cpY - rh); // nad przyciskiem

 
  fill('#FF6600');
  if (mouseX > centerX - rw / 2 && mouseX < centerX + rw / 2 &&
      mouseY > cpY - rh / 2 && mouseY < cpY + rh / 2 && mouseIsPressed) {
    fill(255, 85, 200);
    if (mouseIsPressed); {     window.location.href='https://kornelia2211.github.io/Scam_2/';
      print('go!');
   }
  } else {
    fill(255, 85, 0);
  }

  strokeWeight(2);
  rect(centerX, cpY, rw, rh);

  noStroke();
  fill(255);
  textSize(18);
  text('Kliknij aby odebrać nagrodę.', centerX, cpY);

  textSize(13);
  fill(255);
  text('*Odbiór nagrody możliwy jest tylko w ciągu następnych 10 minut. Po tym czasie nagroda przemija!',
       centerX, 13 * windowHeight / 14);
}
