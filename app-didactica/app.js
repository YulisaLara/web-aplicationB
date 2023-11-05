const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const app = express();

//Motor de plantillas EJS
app.set('view engine', 'ejs')

//Public
app.use(express.static('public'))

// 4. Directorio public
app.use("/resources", express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Variables de entorno
dotenv.config({ path: './env/.env' })

//Uso de cookies
app.use(cookieParser());

//Router
app.use('/', require('./routes/router'))


//Eliminar el caché
app.use(function (req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000")
});
