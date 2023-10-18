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


topText.addEventListener('input', () => {
    updateCanvas(canvas, image, topText.value, middleText.value, bottomText.value);
});

middleText.addEventListener('input', () => {
    updateCanvas(canvas, image, topText.value, middleText.value, bottomText.value);
});

bottomText.addEventListener('input', () => {
    updateCanvas(canvas, image, topText.value, middleText.value, bottomText.value);
});


function updateCanvas(canvas, image,topText,middleText,bottomText){
    const ctx = canvas.getContext("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width/10);
    const yOffset = height/25;

    canvas.width = width;
    canvas.height  = height;
    ctx.drawImage(image,0,0);

    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(fontSize/ 4);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    //template strings
    ctx.font = `${fontSize}px sans-serif`;

    ctx.textBaseline = "top";
    ctx.strokeText(topText,width/2,yOffset);
    ctx.fillText(topText,width/2,yOffset);

    ctx.textBaseline = "middle";
    ctx.strokeText(middleText,width/2,height/2);
    ctx.fillText(middleText,width/2,height/2);


    ctx.textBaseline = "bottom";
    ctx.strokeText(bottomText,width/2,height - yOffset);
    ctx.fillText(bottomText,width/2,height - yOffset);

}

