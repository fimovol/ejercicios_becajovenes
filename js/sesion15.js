

function primero() {
    //datos
    let nombre_trabajador = document.getElementById("_1_nombre")
    let sueldo_basico = document.getElementById("_1_sueldo")
    let hijos_trabajador = document.getElementById("_1_hijos")
    let bonificacion = 0

    //procesos

    nombre_trabajador = nombre_trabajador.value || "arturo"
    sueldo_basico = sueldo_basico.value || 0
    hijos_trabajador = hijos_trabajador.value||0

    sueldo_basico = parseFloat(sueldo_basico)
    hijos_trabajador = parseFloat(hijos_trabajador)
    
    if(hijos_trabajador >= 1){
        bonificacion = 0.07
    }
    let sueldo_final = (bonificacion*sueldo_basico)+sueldo_basico
    
    bonificacion = bonificacion*100
    bonificacion = parseInt(bonificacion)

    //salida

    document.getElementById("_1_1").innerText = `a ${nombre_trabajador} le corresponde ${sueldo_final} soles`
    document.getElementById("_1_2").innerText = `con una bonificacion del ${bonificacion}% `
}
function segundo( ){
    //datos
    let numero = document.getElementById("_2_numero")
    const maximo = 500
    const porcentaje_18 = 0.18

    //procesos
    numero = numero.value || 0
    numero = parseFloat(numero)
    if(numero > maximo){
        let porcentaje = numero * porcentaje_18

        //salida
        document.getElementById("_2_1").innerText = `el 18% de ${numero} es de  ${porcentaje}`
    }
    else{
        //salida
        document.getElementById("_2_1").innerText = `bueno, gracias`
    }
}
function tercero() {
    //datos
    let numero = document.getElementById("_3_numero")
    total = 1
    //procesos

    numero = numero.value || 0
    
    numero = parseFloat(numero)

    
    for(let x=1;x<=numero ; x++){
        total = total * x
    }
    //salida
    document.getElementById("_3_1").innerText = `el factorial de ${numero} es ${total}`
}

let primer_boton = document.getElementById("_1_boton")
primer_boton.addEventListener("click",primero)
 
let segundo_boton = document.getElementById("_2_boton")
segundo_boton.addEventListener("click",segundo)

let tercero_boton = document.getElementById("_3_boton")
tercero_boton.addEventListener("click",tercero)