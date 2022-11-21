function primero() {
    //datos 
    let primer_numero = document.getElementById("_1_primera_nota") 
    let segundo_numero = document.getElementById("_1_segunda_nota") 
    let tercer_numero = document.getElementById("_1_tercera_nota") 
    let resultado = document.getElementById("primer_ejercicio")
    let total = 0
    //procesos
    primer_numero = primer_numero.value || 0
    segundo_numero = segundo_numero.value || 0
    tercer_numero = tercer_numero.value || 0

    primer_numero = parseFloat(primer_numero)
    segundo_numero = parseFloat(segundo_numero)
    tercer_numero = parseFloat(tercer_numero)

    total = (primer_numero + segundo_numero + tercer_numero)/3

    //salida
    resultado.innerText = `el promedio es ${total}`
}
function segundoEjercicio(){
    //datos
    let sueldo1 = document.getElementById("_2_primera_sueldo")
    let sueldo2 = document.getElementById("_2_segundo_sueldo")
    let sueldo3 = document.getElementById("_2_tercer_sueldo")
    let primer_parrafo = document.getElementById("_2_mostrar_1")
    let segundo_parrafo = document.getElementById("_2_mostrar_2")
    let tercero_parrafo = document.getElementById("_2_mostrar_3")
    const _10 = 0.1
    const _12 = 0.12
    const _15 = 0.15

    //procesos

    sueldo1 = sueldo1.value || 0
    sueldo2 = sueldo2.value || 0
    sueldo3 = sueldo3.value || 0

    sueldo1 = parseFloat(sueldo1)
    sueldo2 = parseFloat(sueldo2)
    sueldo3 = parseFloat(sueldo3)

    let sueldo1_10 = (sueldo1*_10)+sueldo1
    let sueldo2_12 = (sueldo1*_12)+sueldo2
    let sueldo3_15 = (sueldo1*_15)+sueldo3

    //salida

    primer_parrafo.innerText = `el primer empleado tiene un sueldo de ${sueldo1} con un aumeto del 10% serian ${sueldo1_10}`

    segundo_parrafo.innerText = `el segundo empleado tiene un sueldo de ${sueldo2} con un aumeto del 12% serian ${sueldo2_12}`

    tercero_parrafo.innerText = `el tercero empleado tiene un sueldo de ${sueldo3} con un aumeto del 15% serian ${sueldo3_15}`
    
}
function tercerEjercicio(){
    //datos
    let primer_examen_30 = document.getElementById("_3_primera_nota")
    let segundo_examen_30 = document.getElementById("_3_segunda_nota")
    let tercer_examen_40 = document.getElementById("_3_tercera_nota")

    //procesos
    primer_examen_30 = primer_examen_30.value || 0
    segundo_examen_30 = segundo_examen_30.value|| 0
    tercer_examen_40 = tercer_examen_40.value|| 0

    primer_examen_30 = parseFloat(primer_examen_30)
    segundo_examen_30 = parseFloat(segundo_examen_30)
    tercer_examen_40 = parseFloat(tercer_examen_40)

    resultado = (primer_examen_30*0.3) + (segundo_examen_30*0.3)+(tercer_examen_40*0.4)

    //salida

    document.getElementById("_3_resultado").innerText = `la calificacion final del alumno es de ${resultado}`
}
let boton = document.getElementById("boton_primer_ejercicio")
boton.addEventListener("click",primero)

let segundo = document.getElementById("_2_boton_segundo")
segundo.addEventListener("click",segundoEjercicio)

let tercero = document.getElementById("_3_boton")
tercero.addEventListener("click",tercerEjercicio)