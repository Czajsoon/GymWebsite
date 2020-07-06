var i = 0;
var images = [];
var timer = 5000;

//images
images[0]='images/img1.jpg';
images[1]='images/img2.jpg';
images[2]='images/img3.jpg';
images[3]='images/img4.jpg';

function changeImage(){
    document.slide.src = images[i];
    
    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }

    setTimeout("changeImage()",timer);
}

window.onload = changeImage;
