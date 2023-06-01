document.addEventListener("DOMContentLoaded", function() {
    var barraProgreso = document.querySelector(".barra");
    var textoProgreso = document.querySelector(".progreso");
    var botonReinicio = document.querySelector(".reinicio");
  
    var progreso = 0;
    var intervalo;
  
    function iniciarProgreso() {
      intervalo = setInterval(function() {
        if (progreso >= 100) {
          clearInterval(intervalo);
          return;
        }
  
        progreso++;
        barraProgreso.style.width = progreso + "%";
        textoProgreso.textContent = progreso + "%";
  
        if (progreso >= 0 && progreso <= 46) {
          textoProgreso.style.color = "#0F0";
        } else {
          textoProgreso.style.color = "#FFF";
        }
      }, 175);
    }

    function pausarAnimacion(duracion) {
        clearInterval(intervalo); 
        setTimeout(function() {
            iniciarProgreso(); 
          }, duracion);
      }
  
    botonReinicio.addEventListener("click", function() {
      clearInterval(intervalo);
      progreso = 0;
      barraProgreso.style.width = progreso + "%";
      textoProgreso.textContent = progreso + "%";
      textoProgreso.style.color = "#0F0";
      pausarAnimacion(500);
    });
    iniciarProgreso();
  });
  