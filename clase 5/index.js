// FS filesystem
const fs = require('fs').promises;
// import fs from "fs"

// async function readFile(file){
//     try{
//         const data = await fs.readFile(file, 'utf-8');
//         console.log(data)
//     }catch(error){
//         console.log("error", error)
//     }
// }

// readFile('./file.txt')


// async function readdir(path){
//     try{
//         const data = await fs.readdir(path);
//         console.log(data)
//     }catch(error){
//         console.log("error", error)
//     }
// }

// readdir('./')

// async function writeFile(file){
//     try{
//         const data = await fs.writeFile(file, 'mensaje');
//         console.log(data)
//     }catch(error){
//         console.log("error", error)
//     }
// }

// writeFile('./file.txt')

// async function appendFile(file){
//     try{
//         const data = await fs.appendFile(file, '\n\n mensaje2');
//         console.log(data)
//     }catch(error){
//         console.log("error", error)
//     }
// }

// appendFile('./file.txt')


// async function copyFile(src, dest){
//     try{
//         const data = await fs.copyFile(src, dest);
//         console.log(data)
//     }catch(error){
//         console.log("error", error)
//     }
// }

// copyFile('./file.txt', './copy-file.txt')

// async function deleteFile(path){
//         try{
//             const data = await fs.unlink(path);
//             console.log(data)
//         }catch(error){
//             console.log("error", error)
//         }
//     }
    
// deleteFile('./copy-file.txt')

// async function deleteDir(path){
//     try{
//         const data = await fs.rmdir(path);
//         console.log(data)
//     }catch(error){
//         console.log("error", error)
//     }
// }

// deleteDir('./carpeta')

// HTTP

const http = require('http');
const { stringify } = require('querystring');

const PORT = 3000;

// https://httpstatusdogs.com/

const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    // console.log(req.headers)

    // CRUD 
    // create -- POST
    // read -- GET
    // update -- PUT PATCH
    // delete -- DELETE
    // /personajes
    // if(req.method === 'POST'){
    //     if(req.url === ){

    //     }
    // }
    // /locaciones

    if(url === '/' && method === 'GET'){
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.end("Pagina principal")
    }else if(url === '/json' && method === 'GET'){
        const data = {
            message: 'Hola Mundo!',
            date: new Date()
        }
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(data))
    }else if(url === '/html' && method === 'GET'){
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Mi pagina HTML</title>
        </head>
        <body>
            <h1>Hola Mundo</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, odio placeat. Quae nostrum incidunt officia suscipit provident voluptates iste quam alias odit quos quas, perferendis maiores, eveniet, doloribus sequi laboriosam.</p>
        </body>
        </html>`
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(html)
    }if(url === '/redirect' && method === 'GET'){
        res.writeHead(302, {'Location': '/'});
        res.end()
    }else{
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.end("Ruta no encontrada")
    }


    
})

server.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}`)
})
