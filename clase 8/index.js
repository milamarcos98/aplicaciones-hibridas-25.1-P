import express from "express"

const app = express();
const PORT = 3000;

let users = [
    {id: 1, name: "Camila", email: "camila@gmail.com"},
    {id: 2, name: "Pepe", email: "pepe@yahoo.com"}
]

app.get('/users', (req, res) => {
    const {name, emailDomain} = req.query;
    // spread operator rest operator
    let resultado = [...users];

    if(name){
        resultado = resultado.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
    }

    if(emailDomain){
        resultado = resultado.filter(u => u.email.toLowerCase().endsWith(`@${emailDomain}`));
    }

    res.json(resultado)
})

// // search by name
// app.get('/users/search', (req, res) => {
//     const {name} = req.query;
//     // const name = req.query.name;
//     if(!name) return res.status(400).json({message: "name is required!"})
//     //     name = name 
//     // name incluye name
//     // camila
//     // camila cami cam
//     const getName = users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
//     if(getName.length === 0){
//         return res.status(404).json({message: `no se encontraron usuarios con: "${name}"`})
//     }
//     res.json(getName)
// })

// // filter by email domain
// app.get('/users/filter', (req, res) => {
//     const {emailDomain} = req.query;
//     if(!emailDomain) return res.status(400).json({message: "emailDomain is required!"})

//     const getEmails = users.filter(u => u.email.toLowerCase().endsWith(`@${emailDomain}`));

//     if(getEmails.length === 0){
//         return res.status(404).json({message: `no se encontraron usuarios con: "${emailDomain}"`})
//     }
//     res.json(getEmails)
// })

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id))
    res.json(user)
})

app.post('/users', (req, res) => {
    console.log(req.body)
    // const {name, email} = req.body;
    // const newUser = {
    //     id: users.length ? users.length + 1 : 1,
    //     name,
    //     email
    // }
    // users.push(newUser);
    res.status(201).json(newUser)
})

app.put('/users/:id', (req, res) => {
    console.log(req.body);
    res.status(201).json("zdfsdf")
})

// 2
app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id)); //-1
    if(userIndex === -1)res.status(404).json("user not found")

    users.splice(userIndex, 1);
    res.json({message: "user deleted"})
})

app.get("/go-to-google",(req, res) => {
    res.redirect("http://google.com")
})

app.get("/custom",(req, res) => {
    res.set('X-Powered-By','Starbucks coffee')
    res.set('X-Random','Yasss')
    res.send("nuevos headers")
})

app.get('/data',(req, res) => {
    res.format({
        'text/plain': () => res.send("Plain text"),
        'text/html': () => res.send("<h1>HTML text</h1>"),
        'application/json': () => res.json({message: "json response"}),
        default: () => res.status(418).send("im a teapot!")
    })
})

app.listen(PORT, () => {
    console.log("port running on 3000")
})

// curl url
// curl -X POST url
// -H "Content-Type: fgfg"
// -d '{"name":...'