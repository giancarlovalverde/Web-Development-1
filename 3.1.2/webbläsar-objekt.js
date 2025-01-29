// Hämtar element från HTML
const adviceButton = document.getElementById('giveAdvice');
const addButton = document.getElementById('addAdvice');
const startButton = document.getElementById('startAutomatic');
const stopButton = document.getElementById('stopAutomatic');
const openWindowButton = document.getElementById('openWindow');
const closeWindowButton = document.getElementById('closeWindow');
const adviceContainer = document.getElementById('advice');


// Array med olika råd
let advice = [
  "Drink more water",
  "Try something new today",
  "Always smile!",
  "Be thankful for what you have",
  "Think positively",
  "Set new goals",
];


let intervalId;
let timeoutId;
let newWindow; 


// Visar slumpmässigt råd
function giveAdvice() {
  if (confirm("Would you like a new piece of advice?")) {
    const randomNumber = Math.floor(Math.random() * advice.length);
    adviceContainer.textContent = advice[randomNumber];
  } else {
    adviceContainer.textContent = "No new advice :(, then! Click on 'Stop automatic advice' to stop.";
  }
}


// För att lägga till eget råd som användaren själv skriver in
function addCustomAdvice() {
  const newAdvice = prompt("Enter your own advice:");
  if (newAdvice) {
    advice.push(newAdvice);
    giveAdvice();
  }
}


// Visar ett nytt råd varje 5 sekunder 
function startAutomaticChange() {
  alert("You will receive different advices every 5 seconds!");
  intervalId = setInterval(giveAdvice, 5000);
}


// Stoppa automatiskt byte av råd
function stopAutomaticChange() {
  clearInterval(intervalId);
  alert("Automatic advice has been stopped.");
}


// Öppnar ett nytt fönster med en video som är 30 sekunder
function openAndCloseWindow() {
  newWindow = window.open("sea.html", "newWindow");  //Öppnar nytt fönster och laddar in sea.html
  if (newWindow) {
    setTimeout(() => {   // Timer för att stänga fönstret efter 30 sekunder
      if (newWindow && !newWindow.closed) { // Kontrollerar om fönstret fortfarande är öppet
        newWindow.close();  // Stänger fönstret
        alert("The image window has been closed.");
      }
    }, 30000);
  }
}


// Funktion för att stänga fönstret tidigare och rensa timeouten
function closeWindowManually() {
  if (timeoutId) {
    clearTimeout(timeoutId); // Rensa timeout
    timeoutId = null; // Återställ timeout-ID:t
  }
  // Stänger det nya fönstret om det fortfarande är öppet
  if (newWindow && !newWindow.closed) {
    newWindow.close();
    alert("The image window has been closed manually.");
  }
}


// Eventlisteners för knapparna 
adviceButton.addEventListener('click', giveAdvice);
addButton.addEventListener('click', addCustomAdvice);
startButton.addEventListener('click', startAutomaticChange);
stopButton.addEventListener('click', stopAutomaticChange);
openWindowButton.addEventListener('click', openAndCloseWindow);
closeWindowButton.addEventListener('click', closeWindowManually); 