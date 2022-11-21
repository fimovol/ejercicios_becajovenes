function primero () {
    //datos
    let primer_numero = document.getElementById("_1_numero_1")
    let operacion = document.getElementById("_1_operacion")
    let segundo_numero = document.getElementById("_1_numero_2")
    let resultado = document.getElementById("_1_1")
    let total = 0

    //procesos
    let multipli = function(x,y){
        return x*y
    }
    let dividir = function(x,y){
        //datos
        let primer_numero = x
        let segundo_numero = y

        //procesos
        let dividir = primer_numero / segundo_numero

        //salida
        return dividir
    }
    let expon = function(x,y){
        return Math.pow(x,y)
    }
    let suma = (x,y) => {return x+y}
    
    let resta = (x,y) => {
        //datos
        let primerNumero = x
        let segundoNumero = y
        //procesos
        let resta = primerNumero - segundoNumero
        //salida
        return resta
    }

    primer_numero = primer_numero.value || 0
    segundo_numero = segundo_numero.value || 0
    operacion = operacion.selectedIndex || 0
    
    primer_numero = parseFloat(primer_numero)
    segundo_numero = parseFloat(segundo_numero)

    if(operacion == 0){
        total = suma(primer_numero,segundo_numero)
    }
    if(operacion == 1){
        total = resta(primer_numero,segundo_numero)
    }
    if(operacion == 2){
        total = dividir(primer_numero,segundo_numero)
    }
    if(operacion == 3){
        total = multipli(primer_numero,segundo_numero)
    }

    //salida
    resultado.innerText = `el resultado es ${total}`
}
function segundo (){
    //datos
    let grados = document.getElementById("_2_grados")
    let opciones = document.getElementById("_2_operacion")
    let resultado = document.getElementById("_2_1")
    var result = 0

    //procesos
    let pasarfahrenheit= (grado) => {
        return Fahrenheit = grado * 1.8 + 32
    }

    let pasarCelcius = (grado) => {
        //datos
        let Fahrenheit = grado
        //procesos
        let celcius = (Fahrenheit - 32)/ 1.8
        //salida
        return celcius
    }
    grados = grados.value||0
    opciones = opciones.selectedIndex||0

    if(opciones==0){
        result = pasarCelcius(grados)
    }
    if(opciones==1){
        result = pasarfahrenheit(grados)
    }

    //salida
    resultado.innerText = `este es el resultado ${result}`
    
}

let boton_segundo = document.getElementById("_2_boton")
boton_segundo.addEventListener("click",segundo)

let boton_primero = document.getElementById("_1_boton")
boton_primero.addEventListener("click",primero)