// Listener för knappen changeBtn som körs när den klickas
document.getElementById("changeBtn").addEventListener("click", function() {
    
    // Hämtar ID:t för title och sparar i variabeln title
    let title = document.getElementById("title"); 
    title.textContent = "Title changed"; 
});


// Listener för knappem deleteBtn som körs när den klickas
document.getElementById("deleteBtn").addEventListener("click", function() {
    
    // Hämtar ID:t för paragraph och sparar i variabeln paragraph
    let paragraph = document.getElementById("paragraph");

    // Tar bort paragraph-elementet
    paragraph.remove(); 
});