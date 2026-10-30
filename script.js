
function upDate(previewPic) {
    console.log("Mouse is over an image!");
    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    const imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    console.log("Mouse left the image!");

    const imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
