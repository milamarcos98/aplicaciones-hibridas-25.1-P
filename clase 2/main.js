// ----------------------------- ASINCRONIA -----------------------------




// ----------------------------- CALLBACKS -----------------------------

// setTimeout(callback, tiempo)





// ----------------------------- PROMESAS -----------------------------

// const promesa = new Promise((resolve, reject) => {
//     const exito = true;
//     if(exito){
//         setTimeout(() => {
//             resolve("operacion exitosa")
//         },1000)
//     }else{
//         reject("operacion fallida")
//     }
//     // console.log("promesa pendiente")
// })

// console.log(promesa)

// promesa
// .then(resultado => {
//     console.log(resultado) //resolve
//     return "resultado del segundo then"
// })
// .then(result2 =>
//     console.log(result2)
// )
// .catch(error => {
//     console.log(error) //reject
// })
// .finally(() => {
//     console.log("fin")
// })




// moneda - cara

// function lanzarMoneda(){
//     return new Promise((resolve, reject) => {
//         const random = Math.random();
//         console.log(random);
//         const resultado = random < 0.5 ? "cara" : "cruz";

//         setTimeout(() => {
//             if(resultado === "cara"){
//                 resolve("salio cara, ganaste!")
//             }else{
//                 reject("salio cruz, perdisteeeeeeee")
//             }
//         }, 1000);
//     })
// }

// lanzarMoneda()
// .then(mensaje => {
//     console.log(mensaje)//resolve
// })
// .catch(error =>
//     console.log(error)//reject
// )



// ----------------------------- METODOS DE PROMESAS -----------------------------



// const promesa1 = new Promise ((resolve, reject) => setTimeout(reject, 500, "yas"));
// const promesa2 = new Promise ((resolve, reject) => setTimeout(reject, 800, "yas2"));
// const promesa3 = new Promise ((resolve, reject) => setTimeout(reject, 300, "yas3"));

// ANY
// Promise.any([promesa1, promesa2, promesa3])
// .then(resultado => {
//     console.log(resultado)
// })
// .catch(error =>
//     console.log("catch..."+error)
// )

// RACE
// Promise.race([promesa1, promesa2, promesa3])
// .then(resultado => {
//     console.log(resultado)
// })
// .catch(error =>
//     console.log("catch..."+error)
// )

// const promesa1 = new Promise ((resolve, reject) => setTimeout(resolve('yas', 1000)));
// const promesa2 = Promise.reject("error in first");
// const promesa3 = Promise.resolve("third");

// ALLSETTLED
// Promise.allSettled([promesa1, promesa2, promesa3])
// .then(resultado => {
//     console.log(resultado)
// })
// .catch(error =>
//     console.log("catch..."+error)
// )

// // ALL - todo o nada
// Promise.all([promesa1, promesa2, promesa3])
// .then(resultado => {
//     console.log(resultado)
// })
// .catch(error =>
//     console.log("catch..."+error)
// )



// ----------------------------- SINTACTIC SUGAR -----------------------------

// const numeros = [1,2,3,4,5];
// const dobles = numeros.map(function(numero){
//     return numero * 2;
// }) //[2,4,6,8,10]
// const dobles2 = numeros.map(numero => numero * 2)
// console.log(dobles)//2,4,6....

//  ----------------------------- ASYNC AWAIT -----------------------------

// obtenerDatos()
// .then(datos => {
//     return procesarDatos(datos)
// })
// .then(resultado => {
//     console.log(resultado)
// })
// .catch(error =>
//     console.log("catch..."+error)
// )

// async function manejarDatos(){
//     try{
//         const datos = await obtenerDatos();
//         const resultado = await procesarDatos(datos);
//         console.log(resultado)
//     }catch(error){
//         console.log("catch..."+error)
//     }
// }

function obtenerDatos(callback){
    setTimeout(() => {
        callback(null, "datos obtenidos")
    },1000)
}

// obtenerDatos((error, resultado) => {
//     if(error){
//         console.log(error)
//     }else{
//         console.log(resultado)
//     }
// })

function obtenerDatos(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("datos obtenidos")
        },1000)
    })
}

obtenerDatos()
.then(resultado =>{
    //
})
.catch(error =>{
    //
})

async function ejecutar() {
    try{
        const result = await obtenerDatos();
        console.log(result)
    }catch(error){
        //
    }
}