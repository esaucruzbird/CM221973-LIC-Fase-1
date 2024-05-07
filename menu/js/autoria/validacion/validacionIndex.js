// Cargar la librería ValidateJS (si no está incluida por defecto)
// Esto es opcional, solo si ValidateJS no está incluida en el HTML
// Esto asume que ValidateJS ya está disponible globalmente en el navegador
// Si está utilizando un sistema de módulos, puede importar ValidateJS de manera diferente
// Este código debe ir al inicio del archivo validaciones.js antes de utilizar ValidateJS
if (typeof validate === 'undefined') {
    // Cambia la ruta de la librería según sea necesario
    document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"><\/script>');
}

// Lógica de validación utilizando ValidateJS
var constraints = {
    contrasena: {
        presence: true,
        length: {
            is: 4,
            message: "La contraseña debe tener exactamente 4 caracteres"
        },
        format: {
            pattern: "1234",
            message: "La contraseña debe ser otra"
        }
    }
};

document.getElementById("frm").addEventListener("submit", function(event) {
    var errors = validate(document.getElementById("frm"), constraints);
    if (errors) {
        event.preventDefault();
        alert(errors.contrasena[0]); // indica la posición del mensaje que se debe mostrar, al romoperse alguna de las 2 reglas que tiene el campo. Como solo se puede romper 1 a la vez. Siempre se debe llamar a la posición 0 de la matriz erro contrasena
    }
});
