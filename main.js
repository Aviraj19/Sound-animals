function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/i7WCWG4kB/model.json", modelready);
}

function modelready() {
    classifier.classify(getresults)
}

function getresults(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can hear : "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy : "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        img1=document.getElementById("alien1");
        img2=document.getElementById("animal42");
        img3=document.getElementById("animal43");
        img4=document.getElementById("animal4");
        if(results[0].label=="Barking"){
            img1.src="Dog 01 gif.gif"
            img2.src="download.jpg"
            img3.src="Cow 01 png.jpg"
            img4.src="Lion 01 png.jpg"
        }
        else if(results[0].label=="Meowing"){
            img1.src="Dog 01 png.jpg"
            img2.src="Cat 02 gif.gif"
            img3.src="Cow 01 png.jpg"
            img4.src="Lion 01 png.jpg"
        }
        else if(results[0].label=="Mooing"){
            img1.src="Dog 01 png.jpg"
            img2.src="download.jpg"
            img3.src="Cow 01 gif.gif"
            img4.src="Lion 01 png.jpg"
        }
        else {
            img1.src="Dog 01 png.jpg"
            img2.src="download.jpg"
            img3.src="Cow 01 png.jpg"
            img4.src="Lion 01 gif.gif"
        }
    }
}