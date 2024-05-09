//INICIO lógica para preparar tabla que se pasará al HTML

// Obtener el historial de transacciones del localStorage
var historial = JSON.parse(localStorage.getItem('historial')) || []; //revisa si existe, sino devuelve corchetes vacios
// Construir la tabla de transacciones
//var tablaHTML = "<table><tr><th>Concepto</th><th>Fecha</th><th>Valor</th></tr>";
var tablaHTML =
  "<table id='miTabla' class='table table-striped'><thead><tr><th>Concepto</th><th>Fecha</th><th>Valor</th></tr></thead><tbody>";
historial.forEach(function (transaccion) {
  tablaHTML += '<tr><td>' + transaccion.concepto + '</td><td>' + transaccion.fecha + '</td><td>' + transaccion.valor + '</td></tr>';
});
tablaHTML += '</tbody></table>';
// Insertar la tabla en el documento HTML
document.getElementById('tabla-transacciones').innerHTML = tablaHTML;

//FIN lógica para preparar tabla que se pasará al HTML

$(document).ready(function () {
  $('#miTabla').DataTable({
    pageLength: 3, //mostrar solo 3 filas por página
    searching: false, //deshabilitar la opción de búsqueda
    lengthChange: false, //deshabilitar la opción de cambio de longitud (show entries)
    info: false, //deshabilitar la información de entradas y filas mostradas abajo de la tabla, como labels
    ordering: false, //deshabilitar el orden automático, para que se mantenga el orden
  });
});

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
