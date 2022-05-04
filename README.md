# test-webapi
Aplicación web desarrollada para consumir la Api de la Bolsa de Santiago con el propósito de obtener los valores de índices bursátiles. 

Tecnología usada:
Para el desarrollo front se utilizó html junto a los estilos de bootstrap, sweetalert y gráficos de chart.js.
Para el consumo de la Api de la Bolsa de Santiago se utilizó javascript, especificamente Fetch API, el cual provee una herramienta mas poderosa que vanilla js. (XMLHttpRequest). Además Fetch API usa "promesas" lo que nos permite manejar de manera mas sencilla las peticiones asíncronas.

Pasos para utilizar la aplicación (requiere token autorizado):
1) Descargar el proyecto.
2) Abrir el archivo index.html en un navegador (chrome, firefox, edge, etc).
3) Apretar botón "Obtener Índices".
4) Ingresar un token autorizado por la bolsa de Santiago.
5) Si el token es correto, el sistema desplegará los datos de los índices disponibles, además de un gráfico con los valores de estos.
