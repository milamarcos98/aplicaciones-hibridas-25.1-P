// NPM I EXPRESS
// NPM I NODEMON

// PETICIONES HTTP

// linea de solicitud
// metodo GET POST PUT PATCH DELETE
// URL
    // /personajes
    // /locaciones

// encabezados

// cuerpo

// GET
// personajes/123
// personajes?order=desc

// POST
// /personajes

// {
//     "nombre": 'Rick',
//     "edad": 42
// }

// PUT PATCH - actualizar

// {
//     "edad": 43
// }

// DELETE
// /personajes/123

// CRUD 
// create 
// read 
// update 
// delete 

// ABM 


// RESPUESTA 
 
// linea de estado
// codigo 200 OK, 404 Not Found
// mensaje de estado

// encabezados

// cuerpo

// MERN
// node 
// express


// import http from "http"

// const server = http.createServer((req, res)=> {
//     if(req.url === '/' && req.method === 'GET'){
//         res.writeHead(200, {"Content-Type": "text/plain"});
//         res.end("Pagina principal")
//         return;
//     }
//     if(req.url === '/saludo' && req.method === 'GET'){
//         res.writeHead(200, {"Content-Type": "text/plain"});
//         res.end("Hola mundo!")
//         return;
//     }
//     if(req.url === '/despedida' && req.method === 'GET'){
//         res.writeHead(200, {"Content-Type": "text/plain"});
//         res.end("Chau!")
//         return;
//     }
//     res.writeHead(404, {"Content-Type": "text/plain"});
//     res.end("Ruta no encontrada")
// })

// server.listen(3000, () => {
//     console.log("server running on port http://localhost:3000")
// })


import express from "express"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.send("Pagina principal");
})

// /api/users/camila

// params
app.get('/api/users/:nombre/:apellido', (req, res) => {
    console.log(req.params.nombre)
    res.send(`Bienvenido ${req.params.nombre} ${req.params.apellido}`)
})

const usuarios = [
    {id: 1, nombre: "Juan", apellido: "Perez", carrera: "DM"},
    {id: 2, nombre: "Pepe", apellido: "Perez", carrera: "DW"},
    {id: 3, nombre: "Maria", apellido: "Gonzalez", carrera: "DM"},
    {id: 4, nombre: "Carlos", apellido: "Perez", carrera: "DW"},
    {id: 5, nombre: "Lucia", apellido: "Ramirez", carrera: "DW"},
]

// queries
app.get('/carreras', (req, res) => {
    let carrera = req.query.carrera;
    if(!carrera || (carrera != "DM" && carrera != "DW")) return res.send("carrera invalida")

    let usuariosFiltrados = usuarios.filter(u => u.carrera === carrera)
    res.send({usuarios: usuariosFiltrados})
})

let users = [];

// {
//     "nombre": "{{$randomFirstName}}",
//     "apellido": "{{$randomEmail}}"
// }
app.post('/api/users', (req, res) => {
    let user = req.body;
    if(!user.nombre || !user.apellido){
        return res.status(400).send({status: "error", message: "incompleto"});
    }
    let findUser = users.filter(u => u.nombre === user.nombre && u.apellido === user.apellido);
    if(users.length > 0 && findUser.length > 0){
        return res.status(400).send({status: "error", message: "already created!"});
    }else{
        users.push(user);
        res.status(201).send({status: "success", message: "user created!", users: users});
    }
})


// middlewares
app.use((req, res) => {
    res.status(404).send('Ruta no encontrada')
})

app.listen(3000, () => {
    console.log("server running on port http://localhost:3000")
})
