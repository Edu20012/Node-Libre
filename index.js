const express = require("express");
const app = express();
const port = 3127;

app.use(express.json());

//Datos de prueba
let videojuegos = [
    { id: 1, titulo: "Red Dead Redemption 2", precio: 100},
    { id: 2, titulo: "The Last of Us Part II", precio: 60},
    { id: 3, titulo: "God of War", precio: 70},
    { id: 4, titulo: "Assassin's Creed Odyssey", precio: 40},
    { id: 5, titulo: "The Witcher 3: Wild Hunt", precio: 45},
];

app.get("/", (req, res) => {

    return res.json(videojuegos);

});

app.get("/mis-videojuegos", (req, res) => {

    return res.json([
        videojuegos[0],
        videojuegos[3],
    ]);
});

app.post("/guardar-juego", (req, res) => {
    let nuevoJuego = {
        id: videojuegos.length + 1,
        titulo: req.body.titulo,
        precio: req.body.precio
    };
    videojuegos.push(nuevoJuego);
    return res.status(200).json(nuevoJuego);
});


app.listen(port, () => {
    console.log("Servidor de node escuchando en http://localhost:"+port);

});