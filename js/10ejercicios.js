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
function segundo(){
    let numero_entero = document.getElementById("_2_primera")
    let resultado = document.getElementById("_2_1")

    numero_entero = numero_entero.value || 0
    numero_entero = parseFloat(numero_entero)

    resultado.innerText=`el 20% del numero ${numero_entero} es ${numero_entero*0.2}`
}
function tercero(){
    let valor_en_metros = document.getElementById("_3_metros")

    valor_en_metros = valor_en_metros.value ||0
    valor_en_metros = parseFloat(valor_en_metros)

    document.getElementById("_3_1").innerText = `Datos:  `
    document.getElementById("_3_2").innerText = `• ${valor_en_metros} metros son ${valor_en_metros*100} centímetros. `
    document.getElementById("_3_3").innerText = `• ${valor_en_metros} metros son ${valor_en_metros*1000} milímetros. `
}
function cuarto(){
    let base =document.getElementById("_4_base")
    let altura = document.getElementById("_4_altura")

    base = base.value ||0
    altura = altura.value || 0

    base = parseFloat(base)
    altura = parseFloat(altura)

    document.getElementById("_4_1").innerText = `el area de este triangulo es ${(base*altura)/2}`
}
function quinto(){
    let valor_dolares = document.getElementById("_5_dolares")

    valor_dolares = valor_dolares.value ||0

    valor_dolares= parseFloat(valor_dolares)

    document.getElementById("_5_1").innerText = `${valor_dolares} dolares son equivalentes a ${valor_dolares*3.38} soles`

}
function sexto(){
    let medida_pulgadas = document.getElementById("_6_pul")

    medida_pulgadas = medida_pulgadas.value ||0
    medida_pulgadas = parseFloat(medida_pulgadas)

    document.getElementById("_6_1").innerText = `la medida en milimetros de ${medida_pulgadas} pulgadas es de ${medida_pulgadas*25.4}mm`

}
function septimo() {
    let numero_tres =document.getElementById("_7_numero")

    numero_tres = numero_tres.value ||0
    let split = numero_tres.split("")

    for (let x = 0 ;x<split.length;x++){
        split[x] = parseFloat(split[x])
        split[x] = split[x] * split[x] //al cuadrado
    }
    let suma = split.reduce((a, b) => a + b, 0)

    document.getElementById("_7_1").innerText = `la suma de sus cadrados de ${numero_tres} es de ${suma}`

}
function octavo(){
    //datos
    let dinero = ""
    let socio_1 = 0
    let socio_2 = 0
    let socio_3 = 0
    //proceso
    dinero = document.getElementById("_8_numero")
    dinero = dinero.value ||0
    dinero = parseFloat(dinero)
    socio_1 = dinero * 0.3
    socio_2 = dinero * 0.2
    socio_3 = dinero * 0.5
    //salida
    document.getElementById("_8_1").innerHTML = `al socio 1 le toca el 30%, $${socio_1}`
    document.getElementById("_8_2").innerHTML = `al socio 2 le toca el 20%, $${socio_2}`
    document.getElementById("_8_3").innerHTML = `al socio 3 le toca el 50%, $${socio_3}`

}
function noveno(){
    //datos
    let precio = 0
    const igv = 0.19
    let igv_producto = 0
    let precio_final = 0
    //proceso
    precio = document.getElementById("_9_precio")
    precio = precio.value ||0
    precio = parseFloat(precio)
    igv_producto = precio * igv
    precio_final = precio+igv_producto
    //salida
    document.getElementById("_9_1").innerText = `el valor del igv es de ${igv_producto}`
    document.getElementById("_9_2").innerText = `el precio final del producto es de ${precio_final}`

}
function decimo(){
    //datos
    let entrada_general = ""
    let entrada_mayores = ""
    let entrada_menores = ""
    let total_entradas = 0
    let precio_general = 150
    let precio_mayores = 50
    let precio_menores = 80
    let total = 0
    //procesos
    entrada_general = document.getElementById("_10_general").value
    entrada_mayores = document.getElementById("_10_mayores").value
    entrada_menores = document.getElementById("_10_menores").value

    entrada_general = parseFloat(entrada_general)
    entrada_mayores = parseFloat(entrada_mayores)
    entrada_menores = parseFloat(entrada_menores)
    total_entradas = entrada_general+entrada_mayores+entrada_menores
    precio_general = entrada_general*precio_general
    precio_mayores = entrada_mayores*precio_mayores
    precio_menores = entrada_menores*precio_menores
    total = precio_general+precio_mayores+precio_menores
    //salida
    document.getElementById("_10_1").innerText = ` se vendieron ${total_entradas} entradas`
    document.getElementById("_10_2").innerText = ` se recaudaron ${precio_general} de soles con las entradas de general`
    document.getElementById("_10_3").innerText = ` se recaudaron ${precio_mayores} de soles con las entradas para mayores de 65 años`
    document.getElementById("_10_4").innerText = ` se recaudaron ${precio_menores} de soles con las entradas para menores de edad`
    document.getElementById("_10_5").innerText = ` con una recaudacion total de ${total} soles`

}

let primerEjercicio = document.getElementById("boton_primer_ejercicio")
primerEjercicio.addEventListener("click",primero)

let sendoBoton = document.getElementById("_2_boton")
sendoBoton.addEventListener("click",segundo)

let tercerboton = document.getElementById("_3_boton")
tercerboton.addEventListener("click",tercero)

let cuartoboton = document.getElementById("_4_boton")
cuartoboton.addEventListener("click",cuarto)

let quintoboton = document.getElementById("_5_boton")
quintoboton.addEventListener("click",quinto)

let sextoboton = document.getElementById("_6_boton")
sextoboton.addEventListener("click",sexto)

let septimoboton = document.getElementById("_7_boton")
septimoboton.addEventListener("click",septimo)

let octavoboton = document.getElementById("_8_boton")
octavoboton.addEventListener("click",octavo)

let novenoboton = document.getElementById("_9_boton")
novenoboton.addEventListener("click",noveno)

let decimoboton = document.getElementById("_10_boton")
decimoboton.addEventListener("click",decimo)