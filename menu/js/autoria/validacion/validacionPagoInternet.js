// cargar la librería ValidateJS (si no está incluida por defecto) por si ValidateJS no está incluida en el HTML
// con la variable "validate" se asume que ValidateJS ya está disponible globalmente en el navegador

if (typeof validate === 'undefined') {
    document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"><\/script>');
}

function validarPagoInternet(pagoInternet) {
    var constraints = {
        pagoInternet: {
        presence:{
            message: "Este campo no puede quedar vacío"
        },
        numericality: {
          greaterThan: 0,
          message: "La cantidad a retirar no puede quedar vacía y debe ser mayor que cero"
        }
      }
    };
  
    var errors = validate({ pagoInternet: pagoInternet }, constraints);
    if (errors) {
      alert(errors.pagoInternet[0]);
      return false;
    }
    return true;
  }

  function validarNpeInternet(npeInternet) {
    var constraints = {
        npeInternet: {
        presence:{
            message: "Este campo no puede quedar vacío"
        },
        length:{
            is: 24,
            message: "El NPE debe tener una longitud de 20 caracteres"
        }
      }
    };
  
    var errors = validate({ npeInternet: npeInternet }, constraints);
    if (errors) {
      alert(errors.npeInternet[0]);
      return false;
    }
    return true;
  }