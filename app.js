const http = require('http'); //llamda al modulo http que es propio de nodejs
const express = require('express'); //llamda al modulo express
const app = express(); //asignarle a una variable el modulo express para posteriores usos
const hbs = require('hbs'); //llamada al modulo hbs
const port = process.env.PORT || 3000; //toma como valor el puerto que el envioroment tiene por defecto, caso contrario le asigna el puerto 3000

app.use(express.static(__dirname + '/public')); //define las paginas staticas en public 
//__dirname es el nombre del directorio donde esta corriendo el proyecto


//SIN HBS
// http.createServer((req, res) => { //creacion del servidor
//     res.writeHead(200, { 'Content-Type': 'application/json' }); // se trabaja sobre el objeto res 
//     //ya que este es el que manipula la respuestas del servicio web, se le manda el parametro 200 
//     //que indica que la respuesta fue procesada correctamente, tambien se le da el tipo de aplicacion que esta manejando

//     let salida = { //creacion de un objeto JSON
//         nombre: 'Santiago',
//         edad: 25,
//         url: req.url
//     }

//     res.write(JSON.stringify(salida)); //transformar formato json a un formato entendible


//     res.end(); // se indica que se ha terminado el proceso
// }).listen(8080); //se define xq puerto va a estar escuchando el servidor

// console.log("Eescuchando en el puerto 8080");

//CON HBS

hbs.registerPartials(__dirname + '/views/parciales'); //registrar los parciales, esto es propio de hbs
app.set('view engine', 'hbs'); //decirle a express que usara el moter de vista hbs, lo que significa que hay mas tipos de view engine

//renderizar los templates

require('./hbs/helpers') //define la ruta de los helpers

app.get('/', function(req, res) { //usa los templates que se encuentran en la pagina home que es de tipo hbs y esta dentro de la carpeta views
    res.render('home', { //con esto se renderiza, se dibuja la plantilla ( plantilla-->codigo html que tiene ciertas variables )
        nombre: "santIago", // se le envia una variable al template
    });
});


app.get('/about', (req, res) => { //crear un nuevo lugar de la aplicacion, usa los templates que se encuentran en la pagina about que es de tipo hbs y esta dentro de la carpeta views
    res.render('about', { //con esto se renderiza, se dibuja la plantilla ( plantilla-->codigo html que tiene ciertas variables )
    });
});


app.listen(port, () => { // listen con callback, define el puerto por el que la aplicacion esta trabajando
    console.log(`escuchando peticiones en el puerto ${port}`);
});