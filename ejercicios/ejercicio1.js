// Crea la siguiente aplicación JavaScript: Una página con un botón que al hacer click abre una ventana de tamaño 800 X 600, en la ventana se escribirá la frase "Son las hh:mm del DIA de MES de AÑO", siendo DIA, MES(nombre del mes) y AÑO , los actuales obtenidos a partir del objeto Date.

function inicializar() {
    document.getElementById("ventana").onclick = crearNueva; //el pulsar el botón de ventana nos va a llevar a ejecutar la función crearNueva
}
let nuevaVentana;
function crearNueva() {
    nuevaVentana = window.open("", "Nueva Ventana","height=600, width=800");
    //establecemos los datos a mostrar
    let date = new Date();
    let mes = date.getMonth()//los meses empiezan en cero
    let anyo = date.getFullYear();
    let dia = date.getDate();
    let hora = date.getHours();
    let min = date.getMinutes();

    let StrMes = '';
    switch (mes) { //hacemos un switch para establecer el mes del año en formato alfabético
        case 0:
            StrMes = 'Enero';
            break;
        case 1:
            StrMes = 'Febrero';
            break;
        case 2:
            StrMes = 'Marzo';
            break;
        case 3:
            StrMes = 'Abril';
            break;
        case 4:
            StrMes = 'Mayo';
            break;
        case 5:
            StrMes = 'Junio';
            break;
        case 6:
            StrMes = 'Julio';
            break;
        case 7:
            StrMes = 'Agosto';
            break;
        case 8:
            StrMes = 'Septiembre';
            break;
        case 9:
            StrMes = 'Octubre';
            break;
        case 10:
            StrMes = 'Noviembre';
            break;
        case 11:
            StrMes = 'Diciembre';
            break;

    }
    nuevaVentana.document.write('<p>Hola! son las ' + hora + ':' + min + ' del ' + dia + ' de ' + StrMes + ' del año ' + anyo + '</p>');
}
