let topText, bottomText, chooseImage, generateButton, topSize, bottomSize, canvas, ctx, fontSize;

function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function memeEngine(img, drawTop, drawBottom, topTextSize, bottomTextSize) {

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);

    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';

    fontSize = canvas.width * topTextSize;
    ctx.font = fontSize + 'px Impact';
    ctx.lineWidth = fontSize / 20;
    ctx.textBaseline = 'top';
    drawTop.split('\n').forEach(function (t, i) {
        ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
    });

    fontSize = canvas.width * bottomTextSize;
    ctx.font = fontSize + 'px Impact';
    ctx.lineWidth = fontSize / 20;
    ctx.textBaseline = 'bottom';
    drawBottom.split('\n').reverse().forEach(function (t, i) {
        ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    });
}

function init() {

    topText = document.getElementById("topText");
    bottomText = document.getElementById("bottomText");
    topSize = document.getElementById("topSize");
    bottomSize = document.getElementById("bottomSize");
    chooseImage = document.getElementById("chooseImage");
    generateButton = document.getElementById("generateButton");
    canvas = document.getElementById("meme");

    ctx = canvas.getContext('2d');

    canvas.width = 0;
    canvas.height = 0;

    generateButton.addEventListener("click", function () {
        let reader = new FileReader();
        reader.onload = function () {
            let img = new Image;
            img.src = reader.result;
            memeEngine(img, topText.value, bottomText.value, topSize.value, bottomSize.value);
        };
        reader.readAsDataURL(chooseImage.files[0]);

    });
}

init();