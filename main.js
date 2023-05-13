audio_1 = ""
function preload(){
    audio_1 = loadSound("DAKU.mp3")

}

function play_song(){

    audio_1.play()

}


function setup(){
canvas = createCanvas(600,500);
canvas.center()
webcam = createCapture(VIDEO)
webcam.hide()

}


function draw(){
 image(webcam,0,0,600,500)
 //image(variable name,x,y,width,height)
}


