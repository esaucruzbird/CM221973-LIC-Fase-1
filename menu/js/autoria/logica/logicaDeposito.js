//INICIO función realizarDeposito
function realizarDeposito() {
  var cantidadDepositar = document.getElementById('cantidadDepositar').value;

  // Validar la cantidad a depositar
  if (!validarCantidadDepositar(cantidadDepositar)) {
    //Limpiando el campo por si coloca un valor incorrecto, como negativo
    document.getElementById('cantidadDepositar').value = '';
    return;
  }

  // Aquí continúa la lógica para página depósito
  // Obtener la cantidad a depositar desde el input
  var cantidad = parseFloat(document.getElementById('cantidadDepositar').value);
  // Validar que la cantidad sea un número válido
  if (isNaN(cantidad) || cantidad <= 0) {
    alert('Por favor ingresa una cantidad válida.'); //alerta que se lanza si en el campo está vacio, cero o negativo
    return;
  }
  // Obtener el saldo actual del localStorage y sumarle la cantidad a depositar
  var saldoActual = parseFloat(localStorage.getItem('saldo'));
  var nuevoSaldo = saldoActual + cantidad;
  // Actualizar el saldo en el localStorage
  localStorage.setItem('saldo', nuevoSaldo.toString());
  // Mostrar un mensaje de confirmación
  alert('Se ha depositado $' + cantidad + ' . Nuevo saldo: $' + nuevoSaldo + ' .');
  document.getElementById('cantidadDepositar').value = '';
  //Almacenando transacción en el historial
  var nuevaTransaccion = {
    concepto: 'depósito',
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
}
//FIN función realizarDeposito

function obtenerFechaActual() {
  var fecha = new Date();
  var dia = fecha.getDate();
  var mes = fecha.getMonth() + 1; // Se agrega 1 porque los meses comienzan desde 0
  var año = fecha.getFullYear();
  // Formatear la fecha en el formato dd-mm-yyyy
  return (dia < 10 ? '0' : '') + dia + '-' + (mes < 10 ? '0' : '') + mes + '-' + año;
}

//PARA QUE ESTÉ EN EL ENCABEZADO DESDE QUE SE CARGA LA PÁGINA
// Obtener el saldo actual del localStorage
var saldoActual = parseFloat(localStorage.getItem('saldo'));
//asignación del saldo al encabezado
document.getElementById('saldo-encabezado').innerHTML = 'El N° cuenta es 0987654321, el saldo actual es $ ' + saldoActual;

//INICIO Lógica para llamamiento de los botones
document.getElementById('btnRegresar').addEventListener('click', function () {
  window.location.href = '../menu.html'; //redirige a la página de depósito
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
      cancelButtonText: 'No, quedarse'
  }).then((result) => {
      if (result.isConfirmed) {
          // Si el usuario elige "Sí, salir", redirigirlo a la página index para loguearse de nuevo
          window.location.href = '../../index.html'; //redirige a la página de logueo
          //código de JavaScript a ejecutar cuando se abra la página web seleccionada
      }
  });
});

/*
document.getElementById('btnCerrar').addEventListener('click', function () {
  window.location.href = '../../index.html'; //redirige a la página de depósito
  //código de JavaScript a ejecutar cuando se abra la página web seleccionada
});
*/
//FIN Lógica para llamamiento de los botones
