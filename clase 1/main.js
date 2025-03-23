// ---------------------- CALLBACKS --------------------------------------------

// setTimeout(callback, timpo)

// setTimeout(() => {
    
// }, timeout);




// function fetchData(callback){
//     setTimeout(() => {
//         const data = "datos obtenidos";
//         callback(data)
//     }, 1000);
// }

// function processData(data){
//     console.log("procesando..." + data)
// }

// fetchData(processData)


function filtrarNumeros(arr, callback){
    return arr.filter(callback)
}

const numeros = [1,2,3,4,5];

const numerosPares = filtrarNumeros(numeros, (num) => num % 2 === 0);

const numerosImpares = filtrarNumeros(numeros, (num) => num % 2 !== 0);
console.log("numeros pares: " + numerosPares)
console.log("numeros impares: " + numerosImpares)