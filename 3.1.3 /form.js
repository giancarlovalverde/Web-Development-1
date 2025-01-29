// Listener för submit på formuläret med ID myForm
document.getElementById("myForm").addEventListener("submit", function(evt) { //Körs när användaren klickar på submit-knappen
    evt.preventDefault(); 
    document.getElementById("message").textContent = "The form has been submitted!";
});


// Listener för reset på formuläret med ID myForm
document.getElementById("myForm").addEventListener("reset", function(event) { //Körs när användaren klickar på reset-knappen
    document.getElementById("message").textContent = "The form has been reset!";
});


// Listener för change på textfältet med ID textField
document.getElementById("textField").addEventListener("change", function(event) { // Fungerar när det skrivs något i textfältet
    document.getElementById("message").textContent = "The text field value has changed!";
});


// Listener för focus och blur på textfältet med ID textField
document.getElementById("textField").addEventListener("focus", function(event) { //Körs när användaren klickar på textfältet
    document.getElementById("message").textContent = "Write your text here!";
});


// Listener för blur på textfältet med ID textField
document.getElementById("textField").addEventListener("blur", function(event) { // Fungerar när anvämnaren klickar utanför textfältet
    document.getElementById("message").textContent = "Please click on the text input!";
});
