const jugador = {
    nombre: "Juan Ignacio",
    apellido: "Durante",
    posicion: "Arquero",
    talle:{
     pantalonLargo:"L",
     pantalonJuego:"L",
     campera: "M",
     camisetaJuego: "L"

    }
}

const opcionCuota = {
    cuota1Mes: 2200,
    cuota2Meses: (2200*2)*.90,
    cuota3Meses: (2200*3)*.85,
    cuotaSemestral: (2200*6)*.75,
}

//alert(jugador.posicion)
//alert(jugador.talle.pantalonLargo)

jugador.talle.campera = "L" //No veo cambio en consola