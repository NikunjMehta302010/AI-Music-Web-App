song = "";
song = "1";

function preload() {
    song = loadSound("Stay.mp3");
    song = loadSound("harry-potter.mp3");
   }

function setup() {
    canvas = createCanvas(400,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image (video, 0, 0, 400, 400);
}