//INICIO función realizarPagoAgua
function realizarPagoAgua() {
    var pagoAgua = document.getElementById('pagoAgua').value;
    var npeAgua = document.getElementById('npeAgua').value;
  
    // Validar la cantidad a depositar
    if (!validarPagoAgua(pagoAgua) || !validarNpeAgua(npeAgua)) {
      //Limpiando el campo por si coloca un valor incorrecto, como negativo o menos caracteres en NPE
      document.getElementById('pagoAgua').value = '';
      document.getElementById('npeAgua').value = '';
      return;
    }
  
    // Aquí continúa la lógica para página pagoEnergia
    // Obtener la cantidad a pagar desde el input
  var cantidad = parseFloat(document.getElementById('pagoAgua').value);
  // Validar que la cantidad sea un número válido
  if (isNaN(cantidad) || cantidad <= 0) {
    alert('Por favor ingresa una cantidad válida.'); //alerta que se lanza si en el campo está vacio, cero o negativo
    return;
  }
  // Obtener el saldo actual del localStorage y restarle la cantidad a pagar
  var saldoActual = parseFloat(localStorage.getItem('saldo'));
  var nuevoSaldo = saldoActual - cantidad;
  // Actualizar el saldo en el localStorage
  localStorage.setItem('saldo', nuevoSaldo.toString());
  // Mostrar un mensaje de confirmación
  alert('Se ha pagado $' + cantidad + ' . Nuevo saldo: $' + nuevoSaldo + ' .');
  //Almacenando transacción en el historial
  var nuevaTransaccion = {
    concepto: 'Pago energía NPE ' + document.getElementById('npeAgua').value,
    fecha: obtenerFechaActual(), // Función para obtener la fecha actual
    valor: cantidad,
  };
  var historial = JSON.parse(localStorage.getItem('historial')) || [];
  historial.push(nuevaTransaccion);
  localStorage.setItem('historial', JSON.stringify(historial));

  //PARA QUE SE ACTUALICE EL SALDO EN EL ENCABEZADO AL HACER LA TRANSACCIÓN
  // Obtener el saldo actual del localStorage
  var saldoActual = parseFloat(localStorage.getItem('saldo'));
  //asignación del saldo al encabezado
  document.getElementById('saldo-encabezado').innerHTML = 'El N° cuenta es 0987654321, el saldo actual es $ ' + saldoActual;
  // Borrando contenido de la transacción anterior en los input
  document.getElementById('npeAgua').value = '';
  document.getElementById('pagoAgua').value = '';
}
//FIN función realizarPagoAgua

function obtenerFechaActual() {
  var fecha = new Date();
  var dia = fecha.getDate();
  var mes = fecha.getMonth() + 1; // Se agrega 1 porque los meses comienzan desde 0
  var año = fecha.getFullYear();
  // Formatear la fecha en el formato dd-mm-yyyy
  return (dia < 10 ? '0' : '') + dia + '-' + (mes < 10 ? '0' : '') + mes + '-' + año;
}

//INICIO lógica de mascara de NPE
//obtener el elemento de entrada
var input = document.getElementById('npeAgua');
//agregar un evento input para aplicar la máscara
input.addEventListener('input', function () {
  //obtener el valor actual del input
  var valor = input.value;
  //remover todos los espacios en blanco del valor
  valor = valor.replace(/\s/g, '');
  //aplicar la máscara de grupos de 4 dígitos
  var valorFormateado = valor.replace(/(.{4})/g, '$1 ').trim();
  //actualizar el valor del input con la máscara aplicada
  input.value = valorFormateado;
});
//FIN lógica de mascara de NPE

//PARA QUE ESTÉ EN EL ENCABEZADO DESDE QUE SE CARGA LA PÁGINA
// Obtener el saldo actual del localStorage
var saldoActual = parseFloat(localStorage.getItem('saldo'));
//asignación del saldo al encabezado
document.getElementById('saldo-encabezado').innerHTML = 'El N° cuenta es 0987654321, el saldo actual es $ ' + saldoActual;

//INICIO Lógica para llamamiento de los botones
document.getElementById('btnRegresar').addEventListener('click', function () {
  window.location.href = '../../menu.html'; //redirige a la página de depósito
  //código de JavaScript a ejecutar cuando se abra la página web seleccionada
});

document.getElementById('btnCerrar').addEventListener('click', function () {
  // Mostrar ventana emergente de Sweet Alert
  Swal.fire({
    title: '¿Estás seguro?',
    text: '¿Deseas salir del sitio?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, salir',
    cancelButtonText: 'No, quedarse',
    backdrop: false,
  }).then((result) => {
    if (result.isConfirmed) {
      // Si el usuario elige "Sí, salir", redirigirlo a la página index para loguearse de nuevo
      window.location.href = '../../../index.html'; //redirige a la página de logueo
      //código de JavaScript a ejecutar cuando se abra la página web seleccionada
    }
  });
});

/*
    document.getElementById('btnCerrar').addEventListener('click', function () {
    window.location.href = '../../../index.html'; //redirige a la página de depósito
    //código de JavaScript a ejecutar cuando se abra la página web seleccionada
    });
*/
//FIN Lógica para llamamiento de los botones