function preload(){
}
 
function setup() {
 canvas=createCanvas(300,300)
 canvas.center()
video= createCapture(VIDEO)
video.size(300,300)
video.hide()
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/p7qt1_HBt/model.json",modelloaded)
}

function draw() {
  image(video,0,0,300,300)  
  classifier.classify(video,gotresults)
}

function modelloaded() {
  console.log("modell iss loadedd")

}

function gotresults(error,results) {
  if (error) {
    console.log(error)
  } else {
    console.log(results)
    document.getElementById("object_result").innerHTML=results[0].label
    document.getElementById("accuracy_result").innerHTML=results[0].confidence.toFixed(3)
  } 
}