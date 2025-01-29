// Väntar på att DOM ska laddas klart så koden kan köras
document.addEventListener('DOMContentLoaded', function() {
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const resultDisplay = document.getElementById('result');

    
    // Funktion för att utföra beräkningen
    function calculate() {
        const number1 = number1Input.value;
        const number2 = number2Input.value;
        
        // Om något av fälten är tomma, visa inget resultat
        if (!number1 || !number2) {
            resultDisplay.textContent = '';
            return;
        }
  
        // Skapar request till servern
        const xhr = new XMLHttpRequest();
        // Begär med get och inkluderar de två talen 
        xhr.open('GET', `https://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.3/example.php?number1=${number1}&number2=${number2}`, true);
    
        // Hanterar svar från servern
        xhr.onload = function() {
            resultDisplay.textContent = 'Svaret är: ' + xhr.responseText;
        };

        xhr.send(); // Sickar förfrågan till servern
    }

    number1Input.addEventListener('input', calculate);
    number2Input.addEventListener('input', calculate);
});
