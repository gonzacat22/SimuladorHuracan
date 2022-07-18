//Clase Nombres Socios
class Socios{
    constructor(nombre, apellido, telefono,opcionCuota){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.opcionCuota = opcionCuota;
    }
    nuevoid(i) {
        this.socioId = i;

    }
    cuantasCuotas(cuotas) {
        this.opcionCuota.cuotas = true;
    }
}

let socios = []
while (registro){
    i = i +1
    let nombre = prompt('Ingresa tu Nombre');
    let apellido = prompt('Ingresa tu Apellido');
    let telefono = prompt('Ingresa tu Telefono');
    let suSeleccion = prompt('Elegi Cuantas cuotas vas a pagar: \n1- 1 Mes. \n2- 2 Meses. \n3- 3 Meses. \n4- Semestre. \n Presiona X para Salir');
    
    if(suSeleccion == "X" || suSeleccion == "x") {
        registro = false;
        break;
    }

    const opcionCuota = {name:"opcion1mes", precio:2200,activo:false,name2:"opcion2Meses",precio2:(2200*2)*.90,activo2:false,name3:"opcion3Meses",precio3:(2200*3)*.85,activo3:false,name4:"opcion6meses",precio4:(2200*6)*.75,activo4:false}
    const socio = new socio(tempNombre[0], tempApellido[1],tempTelefono[3],opcionCuota);
    socios.push(socio);
    socio.crearId(i);
}

arrayOrden = socios.short((a,b) => a.apellido.localeCompare(b,apellido));
alert(arrayOrden)