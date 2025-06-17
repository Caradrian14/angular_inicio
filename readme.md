# Angular

Existe un miedo de actualizar, muchas mepresas usan el angular viejo que es el 16, el nuevo es a partir del 16.
El angular viejo usa modulos que era lo que se usaba, coo chats, logins etc...

A partir del 17 arriba, se usa el el 'Stand alone components' que son modulos atomizados y que contienen solo y solo lo que se necesita.
Angular Way-> para un problema hay una solucion. A mas experiencia tengas mas efectivo en las soluciones.
Angular tiene directiva.

Angular usa un cache de las interaciones, meintras se carga, las interacciones se guardan en el cache.

Bun [https://bun.sh](Enlace)
Se trata de una herramienta similar a nodejs en la que se permite cosas en el servidor.
Esta es la version mas nueva y no la mas antigua.
`npm install -g @angular/cli` para instaar angular
`ng config -g cli.packageManager bun` mete bun en el manejador de paquetes a nivel global.

Angular, dentro se usa un servidor de expres js, el service rendering. Se puede crear servidores dentro y bases de datos dentro. 

En el contexto de Angular, los servicios y la renderización están estrechamente relacionados con la arquitectura de componentes y la inyección de dependencias.
Service Rendering se refiere a cómo los servicios interactúan con la renderización de componentes, podría implicar el uso de servicios para preparar o manipular datos que luego son utilizados por los componentes para renderizar la interfaz de usuario. Por ejemplo, un servicio podría obtener datos de una API, y un componente podría utilizar esos datos para renderizar una lista de elementos en la pantalla.

Angular usa mucho typescript

`ng serve` es una de las funciones más utilizadas de Angular CLI (Command Line Interface). Este comando se utiliza para compilar y servir una aplicación Angular en un servidor de desarrollo local.

El comando `ng build` en Angular CLI se utiliza para compilar una aplicación Angular en un conjunto de archivos estáticos que pueden ser desplegados en un servidor web. Este proceso de compilación es esencial para preparar la aplicación para su implementación en un entorno de producción o cualquier otro entorno donde los usuarios finales interactuarán con ella.