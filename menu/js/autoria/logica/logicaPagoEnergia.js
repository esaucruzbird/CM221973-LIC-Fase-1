//INICIO función realizarPagoEnergia
function realizarPagoEnergia() {
  var pagoEnergia = document.getElementById('pagoEnergia').value;
  var npeEnergia = document.getElementById('npeEnergia').value;

  // Validar la cantidad a depositar
  if (!validarPagoEnergia(pagoEnergia) || !validarNpeEnergia(npeEnergia)) {
    //Limpiando el campo por si coloca un valor incorrecto, como negativo o menos caracteres en NPE
    document.getElementById('pagoEnergia').value = '';
    document.getElementById('npeEnergia').value = '';
    return;
  }

  // Aquí continúa la lógica para página pagoEnergia
  // Obtener la cantidad a pagar desde el input
  var cantidad = parseFloat(document.getElementById('pagoEnergia').value);
  // Validar que la cantidad sea un número válido
  if (isNaN(cantidad) || cantidad <= 0) {
    //alerta que se lanza si en el campo está vacio, cero o negativo
    // Mostrar el mensaje de error del campo validado
    Swal.fire({
      title: 'Por favor ingresa una cantidad válida.',
      text: errors.pagoEnergia[0],
      // indica la posición (0) del mensaje que se debe mostrar, al romoperse alguna de las 2 reglas que tiene el campo. Como solo se puede romper 1 a la vez. Siempre se debe llamar a la posición 0 de la matriz error contrasena
      icon: 'error',
      backdrop: false,
    });
    return;
  }
  // Obtener el saldo actual del localStorage y restarle la cantidad a pagar
  var saldoActual = parseFloat(localStorage.getItem('saldo'));
  var nuevoSaldo = saldoActual - cantidad;
  // Actualizar el saldo en el localStorage
  localStorage.setItem('saldo', nuevoSaldo.toString());
  // Mostrar un mensaje de confirmación
  // Mostrar el mensaje de error del campo validado
  Swal.fire({
    title: 'Éxito',
    text: 'Se ha pagado $' + cantidad + ' . Nuevo saldo: $' + nuevoSaldo + ' .',
    // indica la posición (0) del mensaje que se debe mostrar, al romoperse alguna de las 2 reglas que tiene el campo. Como solo se puede romper 1 a la vez. Siempre se debe llamar a la posición 0 de la matriz error contrasena
    icon: 'success',
    backdrop: false,
  });
  //alert('Se ha pagado $' + cantidad + ' . Nuevo saldo: $' + nuevoSaldo + ' .');
  //Almacenando transacción en el historial
  var nuevaTransaccion = {
    concepto: 'Pago energía NPE ' + document.getElementById('npeEnergia').value,
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
  document.getElementById('npeEnergia').value = '';
  document.getElementById('pagoEnergia').value = '';
}
//FIN función realizarPagoEnergia

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
var input = document.getElementById('npeEnergia');
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
  window.location.href = '../../menu.html'; //redirige a la página de menu
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
