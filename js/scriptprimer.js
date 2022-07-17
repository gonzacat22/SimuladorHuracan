let nombre = prompt('Ingresa tu Nombre');
let apellido = prompt('Ingresa tu Apellido');

let opcionCuota = prompt('Elegi Cuantas cuotas vas a pagar: \n1- 1 Mes. \n2- 2 Meses. \n3- 3 Meses. \n4- Semestre. \n Presiona X para Salir');

//objeto Indumentaria //crear array de distintos talles o crear objeto equipo o sea
const sportswearHuracan = {
    talle: "xxl",
    precio: 12000,
    pantalon: "xxl",
    campera: "xxl",
    shortJuego: "xxl",
    camisetaJuego: "xxl",



}

while(opcionCuota!='X'&& opcionCuota!='x'){
    switch (opcionCuota) {
        case '1':
            opcionCuota = 2200;
            alert('El monto final a pagar es de: '+opcionCuota)
            break;
        case '2':
            opcionCuota = (2200*2)*.90;
            alert('El monto final a pagar es de: '+opcionCuota)
            break;
        case '3':
            opcionCuota = (2200*3)*.85;
            alert('El monto final a pagar es de: '+opcionCuota)
            break; 
        case '4':
            opcionCuota = (2200*6)*.75;
            alert('El monto final a pagar es de: '+opcionCuota)
            break; 
        
    
        default:
            alert('Elegiste una opcion no valida')
            break;
 
    }
    opcionCuota = prompt('Elegi Cuantas cuotas vas a pagar: \n1- 1 Mes. \n2- 2 Meses. \n3- 3 Meses. \n4- Semestre. \n Presiona X para Salir');   
}




