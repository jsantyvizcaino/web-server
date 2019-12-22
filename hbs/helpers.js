const hbs = require('hbs') //se hace el llamado al modulo hbs

// creacion de helpers


hbs.registerHelper('getanio', () => { //se crea el helpers getanio
        return new Date().getFullYear(); //regresa la fecha
    }) //funcion q va ser invocada desde los templates


hbs.registerHelper('capitalizar', (texto) => { //se crea el helpers capitalizar que posee un callback que recibe un parametro
        let palabras = texto.split(' '); //se divide el string ue recibe la funcion
        palabras.forEach((palabra, idx) => { //se recorre la palabra, y se coloca un index
            palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase(); //se hace el cambio de mayusculas a minusculas
        })
        return palabras.join(' '); //se retorna la palabra unida nuevamente

    }) //funcion q va ser invocada desde los templates