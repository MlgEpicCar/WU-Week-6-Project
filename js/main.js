document.getElementById("h1").textContent = `Goated Characters`;

document.getElementById("h3").textContent = `Search Here:`;

document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("txt-predict");
    const resultImage = document.getElementById("img-predict");

    const images = [
        "denji",
        "makoto",
        "shoko",
        "shoya",
        "yuri",
        "yuta",
        "aki",
        "power",
        "gojo",
        "toji",
        "sukuna",
        "megumi",
        "mlgepiccar"
    ];
    const notFoundImage = "not-found";

    inputField.addEventListener("keyup", function() {
        const inputValue = inputField.value.trim().toLowerCase();
        const matchedImage = images.find(image => image.toLowerCase().startsWith(inputValue));
        
        if (inputValue === "") {
            resultImage.src = "https://mlgepiccar.github.io/WU-Week-6-Project/images/" + notFoundImage + ".png";
            return; 
        }

        if (matchedImage) {
            resultImage.src = "https://mlgepiccar.github.io/WU-Week-6-Project/images/" + matchedImage + ".png";
        } else {
            resultImage.src = "https://mlgepiccar.github.io/WU-Week-6-Project/images/" + notFoundImage + ".png";
        }
    });
});