// Fönsterhändelse (load) - körs när  sidan har laddats
window.addEventListener("load", function() {
    alert("The page has fully loaded! Click OK to enter the page!");
});


// Eventlistener för elementet med id "box" som fungerar när musen rör sig över den
document.getElementById("box").addEventListener("mouseover", function() {
    this.classList.add("highlight");
});


// Eventlistener för elementet med id "box" som fungerar när musen rör sig bort från den
document.getElementById("box").addEventListener("mouseout", function() {
    this.classList.remove("highlight");
});


// Eventlistener för elementet med id "toggleClass" som fungerar när musen klickar på den
document.getElementById("toggleClass").addEventListener("click", function() {
    let box = document.getElementById("box"); // Hämtar elementet med id "box"
    box.classList.toggle("highlight"); 
});


// Tangentbordshändelse (keydown) som fungerar som knappen när man tycker på 'g' 
document.addEventListener("keydown", function(event) {
    if (event.key === "g") { // Om tangenten "h" trycks 
        let box = document.getElementById("box");
        box.classList.toggle("highlight"); // Toggla boxen
    }
});