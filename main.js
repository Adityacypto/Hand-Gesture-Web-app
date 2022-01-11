prediction1 = ""
prediction2 = ""

Webcam.set({

    width: 350,
    height:300,
    image_format: "png",
    png_quality: 90






});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_image" src= "'+ data_uri +'"/>';
        
          



    });
    
}
console.log("ml5 version: ",ml5.version);


classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aDbc5iySo/model.json', modelLoaded);


function modelLoaded(){

    console.log(" model Loaded!!👍 ");
}





function   speak(){

    var synth = window.speechSynthesis;
    speakdata1 = "The First Prediction is " + prediction1;
    speakdata2 = "The Second Prediction is " + prediction2;
    var utterthis = new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);
}


function check(){

    img = document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}
function gotResult(error,results){

    if(error){
        console.error(error);
    }

    else{
        console.log(results);
        document.getElementById("result_hand_name").innerHTML = results[0].label;

        document.getElementById("result_hand_name2").innerHTML = results[1].label;

        prediction1 = results[0].label;
        prediction2 = results[1].label;

        speak();

        if(results[0].label == "Thums Up"){
            
            document.getElementById("update_hand").innerHTML = "👍";
        }

        if(results[0].label == "Victory"){
            
            document.getElementById("update_hand").innerHTML = "✌️";
        }

        if(results[0].label == "Amazing"){
            
            document.getElementById("update_hand").innerHTML = "👌";
        }








        
        if(results[1].label == "Thums Up"){
            
            document.getElementById("update_hand2").innerHTML = " 👍";
        }

        if(results[1].label == "Victory"){
            
            document.getElementById("update_hand2").innerHTML = " ✌️";
        }

        if(results[1].label == "Amazing"){
            
            document.getElementById("update_hand2").innerHTML = " 👌";
        }
    }

    

}
