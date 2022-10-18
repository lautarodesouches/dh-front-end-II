/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */

let nombre = ''

const validarNombre = () => nombre.trim().length < 3

const pedirNombre = () => {

    do {

        nombre = prompt('Ingrese su nombre')

        if (validarNombre()) alert('El nombre tiene que tener al menos 3 caracteres')

    } while (validarNombre())

}

const iniciarJuego = () => {

    alert('Bienvendio Al Juego de Piedra papel o tijera')

    pedirNombre()

    alert(`Hola ${nombre.toUpperCase()}!`)

    return nombre.toUpperCase()
}

// Creamos una variable Global con el nombre del jugador
const nombreJugador = iniciarJuego()

/* -------------------------------------------------------------------------- */
/*                       CONSIGNA DE LA MESA DE TRABAJO                       */
/* -------------------------------------------------------------------------- */

// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.







/*

// ------------------------------------------------

let nombre = ''
let opcion = 0
let eleccionIA = 0
let rondas = 0

// ------------------------------------------------

const traducirOpcion = () => {
    switch (opcion) {
        case 1:
            return 'Piedra ✊'
        case 2:
            return 'Papel ✋'
        case 3:
            return 'Tijeras ✌'
        default:
            return 'Valor invalido'
    }
}

const generarJugadaIA = () => eleccionIA = Math.round(Math.random() * 3) + 1

const pedirEleccion = () => {
    do {

        opcion = parseInt(
            prompt(`Selecciona:
            1- Piedra ✊
            2- Papel ✋
            3- Tijeras ✌`)
        )

        alert('Elegiste ' + traducirOpcion())

    } while (opcion < 1 || opcion > 3)
}

const jugarRonda = () => {

    pedirEleccion()

    generarJugadaIA()

}


// ------------------------------------------------

do {

    nombre = prompt('Ingrese el nombre')

    if (nombre.trim().length < 3) alert('El nombre debe tener al menos 3 caracteres')

} while (nombre.trim().length < 3)

alert(`Bienvenido ${nombre}!`)


do {
    jugarRonda()
} while (rondas < 3)

*/