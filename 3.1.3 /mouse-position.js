// Eventlistener på id "mouseArea" som fungerar när muses rör sig över kvadraten
document.getElementById("mouseArea").addEventListener("mousemove", function(event) {
    
    // Hämtar x och y positionen för musen
    let x = event.pageX;
    let y = event.pageY;
    
    // Skriver ut x och y positionen för musen med id "coords"
    document.getElementById("coords").textContent = `Mouse position: X = ${x}, Y = ${y}`;
});