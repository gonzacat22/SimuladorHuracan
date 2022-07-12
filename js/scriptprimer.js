let nombre = prompt('Ingresa tu Nombre');
let apellido = prompt('Ingresa tu Apellido');
let opcionCuota = prompt('Elegi Cuantas cuotas vas a pagar: \n1- 1 Mes. \n2- 2 Meses. \n3- 3 Meses. \n4- Semestre. \n Presiona X para Salir');

/* if (opcionCuota==1){
    opcionCuota = 2200;
 } else if(opcionCuota==2){
   opcionCuota = (2200*2)*.90
 } else if(opcionCuota==3){
    opcionCuota = (2200*2)*.85
   //else if(opcionCuota==4){
       // opcionCuota = (2200*2)*.75
    //}
 
 }    */

while(opcionCuota!='X'|| opcion!='x'){
    switch (opcionCuota) {
        case '1':
            opcionCuota = 2200;
            break;
        case '2':
            opcionCuota = (2200*2)*.90;
            break;
        case '3':
            opcionCuota = (2200*2)*.85;
            break; 
        case '4':
            opcionCuota = (2200*2)*.75;
            break;   
    
        default:
            alert('Elegiste una opcion no valida')
            break;
    }
}




