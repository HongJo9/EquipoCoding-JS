// Ejercicio 1
//Crearemos  un calculadora para comprobar si un año es bisiesto o no .las condiciones a cumplir de un año bisiesto son que :
//-es divisible por 4
//-no es divisible por 100 o es divisible por 400
//finalmente ,se debe imprimir por pantalla si es bisiesto , o no lo es.

document.querySelector("#Comprobar").addEventListener("click", function(){
    const Anio = document.querySelector('#entradaAnio').value;
    const year = parseInt(Anio);
    const resultadoFinal = document.getElementById('resultado');

    if (Bisiesto(year)) {
        resultadoFinal.textContent = year + ' es un año bisiesto.';
    } else {
        resultadoFinal.textContent = year + ' no es un año bisiesto.';
    }
})


function Bisiesto(Anio) {
    if (Anio % 4 === 0) {
        if (Anio % 100 !== 0 || year % 400 === 0) {
            return true;
        }
    }
    return false;
}


// Ejercicio 2
// Crea una función llamada  calculadora que tendrá 3 parámetros
// -un string llamada operación y dos números llamados “x” e “y" entonces la string nos indicara el tipo de operación  que se llevara a cabo  entre “x” e “y” , es decir ,si operación es igual a “sumar”,”x” e “y” se van a sumar esto lo tenemos que hacer con suma ,resta ,multiplicacion,division,exponenciacion y residuo, encaso de que el valor de operación ni corresponda con ninguno de estos , la función devolverá “-1”.

document.addEventListener("DOMContentLoaded", function() {
    function calculadora(operacion, x, y) {
        if (operacion === 'sumar') {
            return x + y;
        } else if (operacion === 'restar') {
            return x - y;
        } else if (operacion === 'multiplicar') {
            return x * y;
        } else if (operacion === 'dividir') {
            return x / y;
        } else if (operacion === 'exponenciar') {
            return Math.pow(x, y);
        } else if (operacion === 'residuo') {
            return x % y;
        } else {
            return -1;
        }
    }

    document.getElementById('calcular').addEventListener("click", function() {
        const x = parseFloat(document.getElementById('x').value);
        const y = parseFloat(document.getElementById('y').value);
        const operacion = document.getElementById('operacion').value;
        const resultado = calculadora(operacion, x, y);

        if (resultado === -1) {
            document.getElementById('resultado2').textContent = 'Operación no válida.';
        } else {
            document.getElementById('resultado2').textContent = 'El resultado es: ' + resultado;
        }
    });
});







// Ejercicio 3
// vamos a crear dos variables, una va ser string(nombre) y la otra un numero [cantidad], el nombre de producto puede ser, juntamente con su precio:
// -refresco 1,00 soles
// -cerveza 2.50 soles
// -papitas 5.00 soles
// según la cantidad y el nombre del producto especificados, vamos a tener que calcular el precio total del pedido.

calculo3=document.querySelector('#calculo3')
calculo3.addEventListener('click', function() {
    const producto = document.getElementById('producto').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);

    let precio;

    if (producto === 'refresco') {
        precio = 1.00;
    } else if (producto === 'cerveza') {
        precio = 2.50;
    } else if (producto === 'papitas') {
        precio = 5.00;
    } else {
        precio = 0;
    }

    const total = precio * cantidad;

    document.getElementById('resultado3').textContent = `El total del pedido de ${cantidad} ${producto}(s) es S/. ${total.toFixed(2)}`;
});
