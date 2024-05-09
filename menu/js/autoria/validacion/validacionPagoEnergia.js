// cargar la librería ValidateJS (si no está incluida por defecto) por si ValidateJS no está incluida en el HTML
// con la variable "validate" se asume que ValidateJS ya está disponible globalmente en el navegador

if (typeof validate === 'undefined') {
    document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"><\/script>');
}

function validarPagoEnergia(pagoEnergia) {
    var constraints = {
        pagoEnergia: {
        presence:{
            message: "Este campo no puede quedar vacío"
        },
        numericality: {
          greaterThan: 0,
          message: "La cantidad a retirar no puede quedar vacía y debe ser mayor que cero"
        }
      }
    };
  
    var errors = validate({ pagoEnergia: pagoEnergia }, constraints);
    if (errors) {
      alert(errors.pagoEnergia[0]);
      return false;
    }
    return true;
  }

  function validarNpeEnergia(npeEnergia) {
    var constraints = {
        npeEnergia: {
        presence:{
            message: "Este campo no puede quedar vacío"
        },
        length:{
            is: 24,
            message: "El NPE debe tener una longitud de 20 caracteres"
        }
      }
    };
  
    var errors = validate({ npeEnergia: npeEnergia }, constraints);
    if (errors) {
      alert(errors.npeEnergia[0]);
      return false;
    }
    return true;
  }