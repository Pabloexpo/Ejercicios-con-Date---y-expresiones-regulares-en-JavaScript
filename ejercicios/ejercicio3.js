// Crea una aplicación javascript  que muestre un mensaje (prompt) pidiendo al usuario que introduzca un código en el siguiente formato nnnnnnnna, es decir 8 dígitos seguidos de una letra, en caso de error volvemos a mostrar el mensaje pidiendo el código, en caso de acierto escribimos en la página "el código introducido es correcto".

let input = prompt("Introduce un código en formato nnnnnnna"); //palabra a testear

let patron= /^\d{8}[a-zA-Z]$/; //patron simple, verificamos 8 números + letra mayúscula o minúscula  
let intentos=1;
while (!patron.test(input)){
    if (intentos==1){ //incluyo una variable para mostrar los intentos realizados hasta superar la verificación
        input=prompt("Has fallado! llevas " + intentos +" intento, introduce un código en formato nnnnnnna");
    } else {
        input=prompt("Has fallado! llevas " + intentos +" intentos, introduce un código en formato nnnnnnna");
    }
    
    intentos++; 
}
document.write("<h1>HAS INTRODUCIDO UN CÓDIGO CORRECTO, ENHORABUENA!<h1>")
