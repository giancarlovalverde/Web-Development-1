$(document).ready(function() {

  // Lägger till clickevent på knappen med id "show"
  $("#show").click(function() {
    $("#box").show();
  });
  

  // Lägger till clickevent på knappen med id "hide"
  $("#hide").click(function() {
    $("#box").hide();
  });


  // Lägger till clickevent på knappen med id "toggle"
  $("#toggle").click(function() {
    $("#box").toggle();
  });

  
  // Lägger till clickevent på knappen med id "fadeIn"
  $("#fadeIn").click(function() {
    $("#box").fadeIn();
  });

  
  // Lägger till clickevent på knappen med id "fadeOut
  $("#fadeOut").click(function() {
    $("#box").fadeOut();
  });

  
  // Lägger till clickevent på knappen med id "fadeToggle"
  $("#fadeToggle").click(function() {
    $("#box").fadeToggle();
  });

  
  // Lägger till clickevent på knappen med id "fadeTo"
  $("#fadeTo").click(function() {
    $("#box").fadeTo("slow", 0.5);
  });
  
  
  // Lägger till clickevent på knappen med id "animate"
  $("#animate").click(function() {
    $("#box").animate({
      width: "200px",
      height: "200px",
      opacity: 0.5
  }, 
      
    {
      duration: 1000,   // Animationen är 1 sekund
      easing: "swing", 
      complete: function() {
      alert("Animationen är klar!");
        }
      });
    });
  });