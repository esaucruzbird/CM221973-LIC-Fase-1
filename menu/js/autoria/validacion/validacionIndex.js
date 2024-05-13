// cargar la librería ValidateJS (si no está incluida por defecto) por si ValidateJS no está incluida en el HTML
// con la variable "validate" se asume que ValidateJS ya está disponible globalmente en el navegador

if (typeof validate === 'undefined') {
    document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"><\/script>');
}

// Lógica de validación utilizando ValidateJS
var constraints = {
    contrasena: {
        presence:{
            message: "Este campo no puede quedar vacío"
        },
        length: {
            is: 4,
            message: "La contraseña debe tener una longitud de 4 caracteres"
        },
        format: {
            pattern: "1234",
            message: "La contraseña es incorrecta"
        }
    }
};

document.getElementById("frm").addEventListener("submit", function(event) {
    var errors = validate(document.getElementById("frm"), constraints);
    if (errors) {
        event.preventDefault();
        // Mostrar el mensaje de error del campo validado
        Swal.fire({
            title: 'Error de Validación',
            text: errors.contrasena[0],
            // indica la posición (0) del mensaje que se debe mostrar, al romoperse alguna de las 2 reglas que tiene el campo. Como solo se puede romper 1 a la vez. Siempre se debe llamar a la posición 0 de la matriz error contrasena
            icon: 'error',
            backdrop: false
        });
    }
});
