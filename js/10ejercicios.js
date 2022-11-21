function primero () {
    //datos
    let numero_1 = document.getElementById("_1_primera")
    let numero_2 = document.getElementById("_1_segunda")
    let resultado = document.getElementById("primer_ejercicio")

    //procesos

    numero_1 = numero_1.value
    numero_2 = numero_2.value

    numero_1 = parseFloat(numero_1)
    numero_2 = parseFloat(numero_2)
    
    //salida

    resultado.innerText = `la suma es ${numero_1+numero_2} y el producto es ${numero_1*numero_2}`
}
let primerEjercicio = document.getElementById("boton_primer_ejercicio")

primerEjercicio.addEventListener("click",primero)