## WEB SERVER


Esta aplicacion esta disenada con NodeJS y permite la creacion de un servidor web donde se puede desplegar las paginas html de una manera dinamica.


Las tecnologias usadas en esta aplicacion son:
- express
- hbs 
- nodemon

La estructura de arbol de la aplicacion es

- hbs
    - helpers.js
- public
    - assets
        - css
        - img
        - js
- views
    - parciales
        - footer.hbs
        - header.hbs
        - navbar.hbs
    - about.hbs
    - home.hbs
- .gitignore
- app.js

#### Express

Es un framework de desarrollo de aplicaciones web para Node.js, es un entorno que trabaja en tiempo de ejecución, de código abierto, multi-plataforma, que permite a los desarrolladores crear toda clase de herramientas de lado servidor y aplicaciones en JavaScript.

~~~
npm install express --save
~~~

Para definir la ruta de las paginas staticas donde buscara express se usa

~~~
app.use(express.static(__dirname + '/public'));
~~~

#### Hbs


Es uno de los varios motores de plantillas que posee express.

~~~
npm install hbs --save
~~~


para definir que motor de vistas va a utilizar express se usa el codigo

~~~
app.set('view engine', 'hbs');
~~~

##### Helpers

Son funciones que se invocan desde los templates, se define la ruta de estos con la sintaxis

~~~
require('./hbs/helpers') 
~~~


##### Parciales

Son extractos de codigo que se usan para renderizar las vistas con variables. Para tener referencia a estos archivos se usa la ruta como se muestra a continuacion

~~~
hbs.registerPartials(__dirname + '/views/parciales')
~~~


#### Bootstrap

Es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web. Contiene plantillas de diseño con tipografía, formularios, botones, cuadros, menús de navegación y otros elementos de diseño basado en HTML y CSS, así como extensiones de JavaScript adicionales.


Las carpetas donde se encuentra los archivos para el funcionamiento de bootstrap son las siguientes.

~~~
- public
    - assets
        - css
        - img
        - js
~~~


#### Heroku

Es uno de los PaaS más utilizados en la actualidad en entornos empresariales por su fuerte enfoque en resolver el despliegue de una aplicación. Ademas te permite manejar los servidores y sus configuraciones, escalamiento y la administración. 

Una aplicacion en heroku debe saber como iniciar su funcionamiento para ello se realiza la configuracion en el archivo ***package.json***

~~~
"scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node app.js"
    },

~~~

#### start es el atributo donde se indicra como el programa arranca su funcionamiento

Para subir un proyecto a Heroku, se deben realizar los siguientes pasos

1. Tener cuenta en heroku
2. Crear una new app
3. En el ordenador donde se encuenttre la aplicacion hacer login
~~~
heroku login
~~~
4. Hacer un gti clone
~~~
heroku git:clone -a svizcaino-website
~~~
5. Hacer un push a la rama master de heroku
~~~
git push heroku master
~~~

6. Abrir la aplicacion en la web
~~~
heroku open
~~~


[sistema en heroku](https://svizcaino-webserber.herokuapp.com)

