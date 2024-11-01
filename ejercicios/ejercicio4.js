// Crea una aplicación que solicite al usuario que introduzca la fecha de su cumpleaños:

//  a) Utiliza expresiones regulares para validar que introducen la fecha en uno de los siguientes formatos xx/xx/xx o xx-xx-xx, avisando del error en caso contrario.

//  b) En caso de que introduzcan la fecha correctamente, la guardamos en el almacenamiento local, de forma que la siguiente vez que acceda a la web ya no le pregunte la fecha, sino que escriba en pantalla, "Su cumpleaños es el ...."




let patron = /^(0?[1-9]|1[0-9]|20|3[0-1])[-\/](0?[1-9]|1[0-2])[-\/](19\d{2}|20\d{2}|\d{2})$/;


// let patron = /^(0?[1-9]|1[0-9]|20|3[0-1])[-\/](0?[1-9]|1[0-2])[-\/][\d{2}\d{4}]/

// Con este patrón, primero permitimos la inserción de los días del 1 al 30, permitiendo el día 31 con 3[0-1] y con un 0 opcional inicial, 
// todo esto incluido en paréntesis, despues bajo corchetes decimos que podemos separar por - o / y 
// repetimos la misma acción con el mes (mes 06 por ejemplo, suele llevarse mucho), volvemos a 
// separar -\/. Finalmente permitimos dos o cuatro dígitos para el año, permitimos que el año
// empiece con 19+2 dígitos más o 20 + 2 dígitos más, mientras que luego se permite incluir un 
// año de dos dígitos

const clave = "Fecha de nacimiento";



if (!localStorage.getItem(clave)) { //inspeccionamos que no hayamos almacenado ya un valor en local para preguntar la fecha de cumpleaños

    let fecha = prompt("Introduce tu fecha de nacimiento");

    while (!patron.test(fecha)) {
        fecha = prompt("Fecha incorrecta, inténtalo de nuevo, recuerda que debes ponerlo en el formato correcto");
    } //introducimos ya el patrón para que no se nos cuele una fecha incorrecta en LocalStorage

    if (fecha) { //almacenamos la fecha en caso de que haya una
        localStorage.setItem(clave, fecha);
    }

}

const valorAlmacenado = localStorage.getItem(clave); //recuperamos la fecha en LocalStorage buscando por su clave

document.write("Su cumpleaños es el " + valorAlmacenado);



