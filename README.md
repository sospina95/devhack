# devhack
Prueba de Devhack

¿ Para que tipo de proyectos recomienda usar Angular(2+) ?

Es recomendado utilizar angular para proyectos de tipo Single Page Application pero yo considero que se puede usar en cualquier tipo de proyecto porque angular te asegura una organizacion de archivos facil de entender y de sopotar para un futuro, tambien puedes tener una estructura modular y escalable que no afecte el rendimiento.

¿ Cuando se debe usar Componentes ? Defina un Componente en un .ts
un Componente se debe usar siempre y cuando cuente con las carateristicas que lo definan tales como (html, estilos e interaccion o con alguna peticion http), otro factor importante es identificar si lo que se necesita crear se podria utilizar en otros escenarios.  

¿ Cuando se debe usar Directivas ? Defina una Directiva en un .ts

cuando se necesite modificar el DOM añadiendo o eliminando elementos.

¿ Cuál es la diferencia entre un Componente y una Directiva ?

Los componentes son directivas que incorporan un template HTML (embebido o externo) y las directivas son instrucciones que te permiten hacer que el DOM sea interactivo.

¿ Para que se utilizan los Servicios en Angular ? Defina un Servicio en un .ts

Básicamente un servicio es un proveedor de datos, que mantiene lógica de acceso a ellos y operativa relacionada con el negocio y las cosas que se hacen con los datos dentro de una aplicación. Los servicios serán consumidos por los componentes, que delegarán en ellos la responsabilidad de acceder a la información y la realización de operaciones con los datos.

¿ Para que se utilizan los Pipes en Angular ? Defina un Pipe en un .ts

Digamos que pipe son funciones separadas a un componente, son funciones que te servirá en cualquier parte de la web, un ejemplo de un Pipe format decimal, currency, date o date-time etc. 

¿ Que es una Promesa ? Defina la estructura general de una promesa imprimendo en console.log() si hay respuesta existosa y en console.error() si no hay respuesta.

Las promesas se utilizan para la realización de tareas asíncronas, como por ejemplo la obtención de respuesta a una petición HTTP.
Una promesa puede tener 4 estados:

Pendiente: Es su estado inicial, no se ha cumplido ni rechazado.
Cumplida: La promesa se ha resuelto satisfactoriamente.
Rechazada: La promesa se ha completado con un error.
Arreglada: La promesa ya no está pendiente. O bien se ha cumplido, o bien se ha rechazado.

¿ Que es un Observable ? Defina un metodo que se llame getInfo() e imprima en consola el llamado a https://fakeApi/fakeEndpoint usando una Observable.

Es aquello que queremos observar, que será implementado mediante una colección de eventos o valores futuros. Un observable puede ser creado a partir de eventos de usuario derivados del uso de un formulario, una llamada HTTP, un almacén de datos, etc. Mediante el observable nos podemos suscribir a eventos que nos permiten hacer cosas cuando cambia lo que se esté observando.

¿Como funciona el sistema de enrutamiento en Angular ? Defina un enrutamiento /dashboard que llame al componente dashboardComponent, a /users que llame al componente usersComponent y por defecto en caso de que la ruta sea desconocida redirija a /

el sistema de enrutamiento de angular utiliza el @angular/router, El Angular Router necesita ser importado y configurado. El módulo AppRoutingModule cumple dos funciones. Por un lado importa al RouterModule de Angular, el cual contiene toda la lógica necesaria para enrutar en el navegador. Por otro lado, permite la definición de rutas en el array Routes[].

¿Qué es un Módulo y cual es la recomendación para su uso?

Podriamos ver un modulo como un paquete que encapsula componentes, servicios, modelos, lógica de negocio que le permite al desarrollador separar en diferentes partes el modelo de negocios del cliente

¿ En qué proyectos recomiendas utilizar Promesas y en cual Observables ?

Yo considero que las promesas se pueden implementar en situaciones donde el proyecto es modular por que la logica de la respuesta son asincronas, pero si se va tener un proyecto bancario o financiero donde la informacion se debe manejar casi en linea la programacion reactiva por medio de observables seria la mejor opcion.

¿ Conoces sobre el ciclo de vida de los Hooks?, ¿ Cuáles son los principales que recuerdes y el orden ?

Estos hooks son eventos que se ejecutan en un momento dado del ciclo de vida del componente, es decir, son eventos que se van a lanzar dependiendo del estado del componente. Por ejemplo, cuando iniciemos el componente, cuando hagamos algún cambio en el componente, etc.

¿ Conoce de Event Emitters?, ¿para qué los usó?

un event Emitters lo he implementado en momentos donde hago el llamado de un componente y le emito un valor o tambien cuando el componente halla cumplido con su objetivo emitir una respuesta y seguir con el flujo o cualquier otra instrucción.

¿ Como funciona el Change Detection en Angular ?

el Change Detection se ejecuta cuando se cambian los datos de los componentes, y luego volver a renderizar la vista automáticamente para reflejar ese cambio.

¿ Que es Redux ?
no lo he manejado, pero yo considero que lo puedo aprender viendo un ejemplo de implementacion.

¿ Has usado Redux con Angular, que librerias ?
no lo he manejado, pero yo considero que lo puedo aprender viendo un ejemplo de implementacion.

¿ Que es JIT y AOT en Angular y cuando lo aplicas ?
no lo he manejado pero se que se utiliza para mejorar el rendimiento de la aplicación