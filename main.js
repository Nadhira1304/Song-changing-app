song = "";
leftWristX= 0;
leftWristY= 0;
rightWristX= 0;
rightWristY= 0;

function preload()
{
    song1 = loadSound("Noragami Aragoto Opening - Kyouran Hey Kids!!.mp3");
    song2 = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
  
    video = createCapture(VIDEO);
    video.size(550, 500);
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  
function gotPoses(results)
{
  if(results.length > 0)
  {
     console.log(results);
    
     leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
    

  }
}

function modelLoaded() 
{
    console.log('Model Loaded!');
}

function draw() 
{
    image(video, 0, 0, 600, 500);
}

function play()
{
    song1.play();
    song.setVolume(1);
    song.rate(1);
    song2.play();
    song.setVolume(1);
    song.rate(1);
}