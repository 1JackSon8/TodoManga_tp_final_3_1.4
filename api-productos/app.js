
//Se importa la libreria express (peticiones/rutas)
const express = require('express')
const app = express()

//Se importa la libreria body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.json())

//Se importa lo que viene del archivo productos.js
var productos = require("./productos")

const cors = require("cors");
app.use(cors())

//path solicitud = /productos | repuesta = productos
/*app.use("/productos", productos);*/
app.get("/productos", (req, res) => {

    productos.listarProductos()
        .then(productos => {
            res.json(productos)
        })
        .catch(err => {
            console.log(err)
            res.json({error:"Hubo un error al consultar la DB. Intentelo mas tarde"});
        })

});

app.get("/productos/:id", (req, res) => {

    let id = req.params.id;

    productos.buscarProductoPorId(id)
        .then(producto => {
            res.json(producto)
        })
        .catch(err => {
            console.log(err);
            res.json({error:"Hubo un error"});
        })

})

//Levanta la página en el puerto 8080
app.listen(8080, () => {
    console.log(`Aplicación en http://localhost:8080`)
})
