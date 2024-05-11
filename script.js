function validarFormulario(event) {
    // Validar teléfono
    var telefono = $('#phone'); 
    var valorTelefono = telefono.val();
    var numeros = /^[0-9]+$/;
    if (!numeros.test(valorTelefono) || valorTelefono.length > 8) {
        $('#phone-error').css('display', 'block');
        event.preventDefault();
        return;
    } else {
        $('#phone-error').css('display', 'none');
    }

    // Validar contraseña
    var contraseña = $('#password').val();
    var confirmarContraseña = $('#confirm_password').val();

    var contraseñaRegex = /^(?=.*[A-Z]).{8,}$/;

    if (contraseña !== confirmarContraseña) {
        $('#password-error').css('display', 'block').text('Las contraseñas no coinciden.');
        event.preventDefault();
        return;
    } else {
        $('#password-error').css('display', 'none');
    }

    if (!contraseñaRegex.test(contraseña)) {
        $('#password-error-two').css('display', 'block').text('La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula.');
        event.preventDefault();
        return;
    } else {
        $('#password-error-two').css('display', 'none');
    }

    $('#exitoModal').modal('show');
    event.preventDefault();
}

$(document).ready(function() {
    $('#form').submit(validarFormulario);
});
