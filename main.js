statuscheck="";
img="";
objects=[];
function preload(){
    img=loadImage("dog_cat.jpg");

}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd',modelLoaded);
}
function modelLoaded(){
    console.log("model loaded");
    statuscheck=true;
    objectdetector.detect(img,gotresult);
} 
function gotresult(error,results){
if(error){
console.log(error);
}
console.log(results);
objects=results;
}

function draw(){
   image(img,0,0,640,420);
   if(statuscheck!==""){
for(i=0;i<objects.length;i++){
    document.getElementById("status").innerHTML="status: object detected";
    fill("#ff0000");
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
    noFill();
    stroke("#ff0000");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
   }
/**fill("#42cef5");
text("dog",45,75);
noFill();
stroke("#1bcca6");
rect(30,60,450,350);
fill("#42cef5");
text("cat",320,120);
noFill();
stroke("#1bcca6");
rect(300,90,270,320);**/
}