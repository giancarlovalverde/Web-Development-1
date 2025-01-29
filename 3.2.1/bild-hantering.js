// Array med bilderna
const images = ["finbild.jpg", "bild2.jpg"];


// Funktion som hanterar muspekaren när den är över bilden
const hover = () => {
    $('#img').attr('src', images[1]);     
};


// Funktion för att andra bilden tillbaka när muspekaren lämnar
const resetImage = () => {
    $('#img').attr('src', images[0]);
};


$(document).ready(() => {
    $('#img').on('mouseover', hover);
    $('#img').on('mouseout', resetImage);
});