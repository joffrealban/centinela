// esta parte, permite que se ejecute el codigo cuando se halla cargado la pagina
$(function() {
    // esta parte es la que controla cuando se mueve el scroll y ejecuta una función
    $(document).scroll(function() {
      // aca se pregunta si el scroll se movio de pa bajo.
      if ($(this).scrollTop() > 1) {
        // esta parte cambia el atributo "src" de la etiqueta "img" 
        $('#logo').attr('src', './images/logo_1.png')
      }
      if ($(this).scrollTop() < 1) {
        $('#logo').attr('src', './images/logo_blanco1.png');
      }
    });
  });