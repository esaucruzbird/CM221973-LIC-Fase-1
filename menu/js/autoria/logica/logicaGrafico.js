//INICIO función realizarDeposito

// Obtener el saldo actual del localStorage
var saldoActual = parseFloat(localStorage.getItem('saldo'));
//asignación del saldo al encabezado
document.getElementById('saldo-encabezado').innerHTML = 'El N° cuenta es 0987654321, el saldo actual es $ ' + saldoActual;

//INICIO lógica gráfico
// Obtener el historial de transacciones del localStorage
var historial = JSON.parse(localStorage.getItem('historial')) || [];

// Contadores para cada categoría
var depositos = 0;
var retiros = 0;
var pagos = 0;

// Iterar sobre cada transacción y contar las transacciones de cada categoría
historial.forEach(function (transaccion) {
  var concepto = transaccion.concepto;
  if (concepto === 'depósito') {
    depositos++;
  } else if (concepto === 'retiro') {
    retiros++;
  } else {
    pagos++;
  }
});

// Preparar los datos para el gráfico de Chart.js
var etiquetas = ['Depósitos', 'Retiros', 'Pagos'];
var datos = [depositos, retiros, pagos];

// Crear el gráfico de barras con Chart.js
var ctx = document.getElementById('graficoBarras').getContext('2d');
var graficoBarras = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: etiquetas,
    datasets: [
      {
        label: 'Cantidad de Transacciones',
        data: datos,
        backgroundColor: [
          'rgba(0, 128, 0, 0.6)', // Color de las barras para depósitos
          'rgba(255, 165, 0, 0.6)', // Color de las barras para retiros
          'rgba(50, 50, 50, 0.6)', // Color de las barras para pagos
        ],
        borderColor: [
          'rgba(0, 128, 0, 0.6)', // Color del borde de las barras para depósitos
          'rgba(255, 165, 0, 0.6)', // Color del borde de las barras para retiros
          'rgba(50, 50, 50, 0.6)', // Color del borde de las barras para pagos
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    // Escalar el gráfico para que se ajuste al contenedor
    scales: {
      y: {
        beginAtZero: true, // Empezar el eje Y desde cero
      },
    },
    // Controlar el tamaño del gráfico
    maintainAspectRatio: false,
    responsive: true,
    aspectRatio: 1, // Proporción 1:1
    plugins: {
      legend: {
        display: false, // Ocultar la leyenda
      },
    },
  },
});
//FIN lógica gráfico

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
