// För att visa en "varning" om att eventet har visats
function showAlert(evt) {
    evt.preventDefault(); 
    alert("This is the event!"); // Visa varningen
    logEvent('The event has been shown'); 
}


// Funktion för att logga händelser med tid
function logEvent(message) {
    const log = document.getElementById('log');
    const timestamp = new Date().toLocaleTimeString(); //hämtar tiden
    log.innerHTML += `<p>${timestamp}: ${message}</p>`;
}


// Listener för att visa varning med id "alertBtn" vid klickning 
document.getElementById("alertBtn").addEventListener("click", showAlert);
logEvent('The event has started!'); 


// Listner för att ta bort varning med id "alertBtn" vid klickning
document.getElementById("removeEventBtn").addEventListener("click", function() {
    document.getElementById("alertBtn").removeEventListener("click", showAlert);
    document.getElementById("removeEventBtn").textContent = 'Event Removed';
    logEvent('The event has been removed');
});


// För att lägga tillbaka eventlistener på alertBtn med id "addEventBtn" vid klickning
document.getElementById("addEventBtn").addEventListener("click", function() {
    document.getElementById("alertBtn").addEventListener("click", showAlert);
    document.getElementById("removeEventBtn").textContent = 'Remove Event';
    logEvent('The event is added again!');
});