const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { json } = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.json("Hola Mundo!");
})

app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "El nombre de usuario es requerido"
        })
    }

    res.json({
        body
    });
})

app.put('/usuario/:id/:nombre', function(req, res) {
    let id = req.params.id;
    let nombre = req.params.nombre;
    res.json({
        id,
        nombre
    });
});

app.delete('/usuario', function(req, res) {
    res.json("delete Usuario");
})

app.listen(3000, () => {
    console.log("Escuchando en el puerto : ", 3000);
})