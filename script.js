const fileInput = document.querySelector("#upload");
const topText = document.querySelector("#topInput");
const middleText = document.querySelector("#middleInput");
const bottomText = document.querySelector("#bottomInput");
const canvas = document.querySelector("#picture");


let image;

fileInput.addEventListener('change', () => {
        const imageDataUrl = URL.createObjectURL(fileInput.files[0]);
        
        image = new Image();
        image.src = imageDataUrl;


        image.addEventListener('load', () => {
            updateCanvas(canvas,image,topText.value,middleText.value,bottomText.value);
        },{once: true});


});


function updateCanvas(canvas, image,topText,middleText,bottomText){
    const ctx = canvas.getContext("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width/10)

    canvas.width = width;
    canvas.height  = height;
    ctx.drawImage(image,0,0);

}

