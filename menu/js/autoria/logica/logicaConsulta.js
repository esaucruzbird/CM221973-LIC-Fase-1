//INICIO función realizarDeposito

// Obtener el saldo actual del localStorage
var saldoActual = parseFloat(localStorage.getItem('saldo'));
//asignación del saldo al encabezado
document.getElementById('saldo-encabezado').innerHTML = 'El N° cuenta es 0987654321, el saldo actual es $ ' + saldoActual;
//asignación del saldo a la pantalla
document.getElementById('saldo-actual').innerHTML = 'Saldo actual: $ ' + saldoActual;

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
    cancelButtonText: 'No, quedarse',
    backdrop: false,
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
