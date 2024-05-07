//Scripts para redireccionar y activar archivos JS
// Función para inicializar los datos del cliente en localStorage
if (!localStorage.getItem('saldo')) {
  //valida si la clave saldo existe, si existe no hace nada, PERO si NO existe la crea
  localStorage.setItem('saldo', '500');
}

var historial = JSON.parse(localStorage.getItem('historial'));
if (!historial) {
  historial = []; // Si la clave "historial" no existe, se crea un array vacío
}

// Obtener el saldo actual del localStorage
var saldoActual = parseFloat(localStorage.getItem('saldo'));
//asignación del saldo al encabezado
document.getElementById('saldo-encabezado').innerHTML = 'El N° cuenta es 0987654321, el saldo actual es $ ' + saldoActual;

//INICIO Lógica para llamamiento de los botones

document.getElementById('btnDepositar').addEventListener('click', function () {
  window.location.href = 'depositar/deposito.html'; //redirige a la página de depósito
  //código de JavaScript a ejecutar cuando se abra la página web seleccionada
});

document.getElementById('btnRetirar').addEventListener('click', function () {
  window.location.href = 'retirar/retiro.html'; //redirige a la página de depósito
  //código de JavaScript a ejecutar cuando se abra la página web seleccionada
});

document.getElementById('btnConsultar').addEventListener('click', function () {
  window.location.href = 'consultar/consulta.html'; //redirige a la página de depósito
  //código de JavaScript a ejecutar cuando se abra la página web seleccionada
});

document.getElementById('btnPagar').addEventListener('click', function () {
  window.location.href = 'pagar/pago.html'; //redirige a la página de depósito
  //código de JavaScript a ejecutar cuando se abra la página web seleccionada
});

document.getElementById('btnHistorial').addEventListener('click', function () {
  window.location.href = 'historial/historial.html'; //redirige a la página de depósito
  //código de JavaScript a ejecutar cuando se abra la página web seleccionada
});

document.getElementById('btnGrafico').addEventListener('click', function () {
  window.location.href = 'graficar/grafico.html'; //redirige a la página de depósito
  //código de JavaScript a ejecutar cuando se abra la página web seleccionada
});

document.getElementById('btnCerrar').addEventListener('click', function () {
  window.location.href = '../index.html'; //redirige a la página de depósito
  //código de JavaScript a ejecutar cuando se abra la página web seleccionada
});
//FIN Lógica para llamamiento de los botones
