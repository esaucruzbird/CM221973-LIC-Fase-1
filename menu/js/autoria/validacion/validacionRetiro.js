// cargar la librería ValidateJS (si no está incluida por defecto) por si ValidateJS no está incluida en el HTML
// con la variable "validate" se asume que ValidateJS ya está disponible globalmente en el navegador

if (typeof validate === 'undefined') {
    document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"><\/script>');
}

function validarCantidadRetirar(cantidadRetirar) {
    var constraints = {
        cantidadRetirar: {
        presence:{
            message: "Este campo no puede quedar vacío"
        },
        numericality: {
          greaterThan: 0,
          message: "La cantidad a retirar no puede quedar vacía y debe ser mayor que cero"
        }
      }
    };
  
    var errors = validate({ cantidadRetirar: cantidadRetirar }, constraints);
    if (errors) {
      alert(errors.cantidadRetirar[0]);
      return false;
    }
    return true;
  }
