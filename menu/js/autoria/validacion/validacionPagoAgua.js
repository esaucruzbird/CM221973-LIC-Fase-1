// cargar la librería ValidateJS (si no está incluida por defecto) por si ValidateJS no está incluida en el HTML
// con la variable "validate" se asume que ValidateJS ya está disponible globalmente en el navegador

if (typeof validate === 'undefined') {
    document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"><\/script>');
}

function validarPagoAgua(pagoAgua) {
    var constraints = {
        pagoAgua: {
        presence:{
            message: "Este campo no puede quedar vacío"
        },
        numericality: {
          greaterThan: 0,
          message: "La cantidad a retirar no puede quedar vacía y debe ser mayor que cero"
        }
      }
    };
  
    var errors = validate({ pagoAgua: pagoAgua }, constraints);
    if (errors) {
      alert(errors.pagoAgua[0]);
      return false;
    }
    return true;
  }

  function validarNpeAgua(npeAgua) {
    var constraints = {
        npeAgua: {
        presence:{
            message: "Este campo no puede quedar vacío"
        },
        length:{
            is: 24,
            message: "El NPE debe tener una longitud de 20 caracteres"
        }
      }
    };
  
    var errors = validate({ npeAgua: npeAgua }, constraints);
    if (errors) {
      alert(errors.npeAgua[0]);
      return false;
    }
    return true;
  }