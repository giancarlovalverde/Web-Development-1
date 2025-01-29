// Array med olika årstider och månader
const seasons = [
    {period: "Spring", clues: ["flowers", "birds", "rain", "greenery", "Easter"], collectedItems: [], date: "March - May"},
    {period: "Summer", clues: ["sun", "swimming", "ice cream", "vacation", "beach", "travel"], collectedItems: [], date: "June - August"},
    {period: "Autumn", clues: ["leaves", "wind", "school", "mushroom picking"], collectedItems: [], date: "September - November"},
    {period: "Winter", clues: ["snow", "Christmas", "cold", "skiing", "gingerbread cookies"], collectedItems: [], date: "December - February"}
];


// För att hålla koll på poäng och antal försök
let score = 0;
let attempts = 0;
let number; 


// Funktion som startar spelet
function startGame() {
   // Skapar ett slumpmässigt nummer för denna omgång och visar det
   number = Math.floor(Math.random() * 1000); // slumpmässigt siffra mellan 0 och 999
   console.log("Unique number for this game round: " + number);
   alert("Unique number for this round: " + number);

    // Uppdaterar innehållet i numberDisplay med det unika ID
    document.getElementById('numberDisplay').textContent = "Spelomgång: " + number;

    // Den tar fram en slumpmässig årstid
    const seasonIndex = Math.floor(Math.random() * seasons.length); 
    const selectedSeason = seasons[seasonIndex];

    const clueIndex = Math.floor(Math.random() * selectedSeason.clues.length);
    const selectedClue = selectedSeason.clues[clueIndex];
    
    let userGuess = prompt("Which season am I thinking of? Here’s a clue: " + selectedClue);


    // Checkar om användaren gissat rätt och om inte så får användaren en till ledtråd
    if (guess(userGuess, selectedSeason.period)) {
        alert("Correct! You scored a point");
        score++;
        attempts++;
        playAgain();
        
    } else {
        userGuess = prompt("Incorrect! Try again. Here’s another clue! This season is between " + selectedSeason.date);
        if (guess(userGuess, selectedSeason.period)) {
            alert("Correct! You scored a point");
            score++;
            playAgain();
        } else {
            alert("Incorrect! No points for you :(");
            attempts++;
            playAgain();
        }
    }
}


// Funktion som visar dagens datum
function showTodayDate() {
    const today = new Date();
    const dateStr = today.toLocaleDateString('sv-SE', {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    document.getElementById('currentDate').textContent = `Today is ${dateStr}`;
}


// Funktion som frågar om man vill spela igen eller avsluta
function playAgain() {
    if (confirm("Do you want to keep playing?")) {
        startGame();
    } else {
        alert("Thank you for playing! You scored " + score + " points in " + attempts + " attempts");
    }
}


// För att jämföra användarens gissning med den korrekta årstiden
function guess(userGuess, correctSeason) {
    let regExp = /[^a-zA-Z]/g; 
    let cleanedCorrectSeason = correctSeason.toLowerCase().replace(regExp, '');
    let cleanedUserGuess = userGuess.toLowerCase().replace(regExp, ''); 

    return cleanedCorrectSeason === cleanedUserGuess;
}


// Visar hela scoren
function showScore() {
    alert("You have " + score + " points in " + attempts + " attempts");
}


// Eventlistener för att starta spelet
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startButton').addEventListener('click', startGame);
    showTodayDate(); 
});


// Startar spelet när sidan laddas
startGame(); 