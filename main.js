
Nosex=0;
Nosey=0;


function preload(){
clown_nose = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}





function setup(){
canvas = createCanvas(300,300);
canvas.center();
v = createCapture(VIDEO);
v.size(300, 300);
v.hide()


poseNet = ml5.poseNet(v, modelloaded);
poseNet.on('pose' , getposes);
}
function modelloaded(){
    console.log("posenet activated!!!!");
}
function getposes(results){
    if(results.length > 0){
        console.log(results);
        Nosex = results[0].pose.nose.x-15;
        Nosey = results[0].pose.nose.y;
        console.log("nosex = "+Nosex);
        console.log("nosey = "+Nosey);
    }
}
function draw(){
    image(v, 0, 0, 300, 300);
    image(clown_nose, Nosex, Nosey,30,30);
}

function take_snapshot(){
    save('myFilterImage.png');
}

