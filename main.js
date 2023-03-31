function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    y=createCapture(VIDEO);
    y.hide();
    t="";
}
function draw(){
    image(y,0,0,640,480);
    tint(t);
}
function take_snapshot(){
save("pic.png");
}
function ci(){
    t=document.getElementById("i").value;
}