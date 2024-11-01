let abc = 'abcdefghijklmnopqrstuvwxyz'; 
let boton = document.getElementById('boton'); 
boton.addEventListener('click', () =>{
    //funcion a ejecutar cuando hacemos click en el botón
    let input = document.getElementById('palabra'); //recuperamos la palabra introducida en el input del html
    let palabra = input.value; 
    palabra = palabra.toLowerCase(); //la pasamos a minusculas para poder comparar con todos los casos
    let patron = /[!@#$%^&*(),.?":{}|<>_\-+=¡¿/[\]\\]/; //eliminamos la posibilidad de introducir carácteres especiales

    if (palabra==''){
        alert('Tienes que incluir una palabra'); 
    }
    else if(!isNaN(palabra)){ //condicional para pasar el filtro de que sea una palabra lo que introducimos
        alert("Error! has introducido un número"); 
    } else if (patron.test(palabra)){
        alert("Error! has introducido un caracter especial"); 
    } else {
        let charFormat=''; 
        let codificada = ''; 
        for (let i=0; i<palabra.length; i++){
            let char = palabra[i]; 
            if (abc.includes(char)) {
                let indice = abc.indexOf(char); //indice del caracter actual 
                let nuevoIndice = (indice + 5) % abc.length; //sumamos 5 y evitamos el desbordamiento 
                let charFormat = abc[nuevoIndice];  //obtenemos el nuevo caracter de la operacion de arriba
                codificada = codificada + charFormat; 
            }
        }
        document.write("<p>LA PALABRA CODIFICADA ES: </p><h1>" + codificada + "</h1><hr>") ; 
    
    
        document.write('<input type="button" id="botonDes" value="Descodificar">'); //escribimos un button que nos va a servir para descodificar
    
        let botonDes =document.getElementById("botonDes"); 
    
        botonDes.addEventListener('click', ()=>{
            /*
            generamos una nueva funcion dentro de la codificacion para no perder las variables y reutilizar codigo
            */
    
            let descodificada=''; 
    
            for (let j=0; j<codificada.length; j++){
                char = codificada [j]; 
                if (abc.includes(char)){
                    indice = abc.indexOf(char); 
                    let nuevoIndice= (indice-5 + abc.length) % abc.length; //evitamos que el numero sea negativo con la suma de toda la longitud de abc
                    let charFormat = abc [nuevoIndice]; 
                    descodificada= descodificada+charFormat
                }
            }
    
            document.write("<hr><p>La palabra descodificada es</p><h1> " + descodificada + "</h1>"); 
        })
        document.write('<button id="recargarBtn">Volver a cargar la página</button>'); //Elaboramos un boton para volver atrás y recargar la página
        document.getElementById('recargarBtn').addEventListener('click', () => {
            window.location.reload();
        }); 
    }


})