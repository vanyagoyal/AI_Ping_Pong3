function setup(){
    canvas =  createCanvas(700 , 600);
    canvas.parent('canvas');
    webcam = createCapture(VIDEO);
    webcam.size(400 , 350);
    webcam.hide();
    poseNet = ml5.poseNet(webcam , modelLoaded);
}

function draw(){
    image(webcam , 0 , 0 , 400 , 350);
}

function modelLoaded(){
    console.log("PoseNet Model Initialized!!");
}

