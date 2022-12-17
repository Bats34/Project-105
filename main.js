https://teachablemachine.withgoogle.com/models/FUOFpnjX7/
Webcam.set({
width:350,
height:300,
img_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function capture() {
   Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="cp" src="'+data_uri+'"/>';
   });
}
console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FUOFpnjX7/model.json',ModelLoaded);
function ModelLoaded() {
    console.log('Model Loaded!');
} 
function identify() {
    img=document.getElementById('cp');
    classifier.classify(img,GotResult);
}
function GotResult(error,results) {
if(error) {
    console.error(error);
}else{
    console.log(results);
    document.getElementById("name_tag").innerHTML=results[0].label;
    document.getElementById("accure_tag").innerHTML=results[0].confidence.toFixed(3);
    
}

}
