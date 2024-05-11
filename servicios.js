$(document).ready(function() {
    $('#navbarDropdown').mouseenter(function() {
      $(this).dropdown('toggle'); // Abrir el dropdown al poner el cursor sobre el enlace
    });

    $('.dropdown-menu').mouseleave(function() {
      $('#navbarDropdown').dropdown('toggle'); // Cerrar el dropdown al salir del área del menú
    });
  });