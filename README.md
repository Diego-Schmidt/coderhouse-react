<!-- PROJECT LOGO -->

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
<br />
<div align="center">
  <a href="https://github.com/Diego-Schmidt/coderhouse-react">
    <img src="https://diego-schmidt.github.io/coderhouse-react/static/media/logo.31c5442b01f1a5c30e92.webp" alt="Logohabemuspapagit " width="184" height="74">
  </a>

  <h3 align="center">Habemus Papa! React - Curso de CoderHouse</h3>
<br />
<h3 align="center">Video de navegación en la aplicación (click para ver)</h3>
  <a href="http://www.youtube.com/watch?v=YfTgt29KcwE">
    <img src="http://img.youtube.com/vi/YfTgt29KcwE/0.jpg" alt="habemuspapayoutube" >
  </a>

  <p align="center">
    
   
</div>

Proyecto ficticio de sitio e-commerce creado para el curso de ReactJS de CoderHouse, basado en el proyecto Habemus Papa! para el curso de Desarrollo Web.

En este proyecto para el curso de ReactJS creamos varios componentes con el objetivo de construir un sitio e-commerce funcional. 
Los componentes centrales para el desarrollo de la funcionalidad son: ItemListContainer, ItemList, Item, ItemDetailContainer, ItemDetail, CartView, CartWidget, CartContext, NavBar, ItemCount.

Comenzamos instalando el software necesario, NodeJS, npm, etc. Luego con el comando npx create-react-app para generar la estructura básica de un proyecto ReactJS.

Agregando primer componente NavBar y un logo a la app, para tener una estructura primigénea que se asemeje a un sitio web. Decidí utilizar bootstrap y react-boostrap para darle estilo al sitio y poder reutilizar los estilos creados para el proyecto Habemus Papa! del curso de desarrollo web, también en CoderHouse. https://github.com/Diego-Schmidt/habemus-full-responsive/tree/habemus-sass

Decidí utilizar el módulo Gh-pages https://www.npmjs.com/package/gh-pages , este módulo automatiza la creación de un branch especial para que GitHub Pages pueda mostrar la parte web de la aplicación react. 

Agregada funcionalidad de react-router-dom para crear las urls de las categorías y url de detella de producto, para ser usado en ItemListContainer (filtrar por categoría) e ItemDetail para acceder a un item del catálogo mediante su id.

El componente ItemListContainer.jsx contiene la funcionalidad y lógica que envía información a otro componente llamado ItemList.jsx, encargado de leer y mapear un archivo mockup json con información sobre un catálogo de productos, en mi caso relacionados con la comida rápida y el componente Item.jsx, utilizado para pintar correctamente la información de cada producto que ItemList encuentre en el json.

Luego de comprobar el funcionamiento correcto de esos componentes procedimos a la creación de ItemDetailContainer e ItemDetal.jsx, siguiendo una lógica similar a los componentes anteriores para mostrar más información de cada item, por ejemplo la descripción completa.

Para darle estilo a todos los componentes decidí utilizar Bootstrap 5 y React-Boostrap.

Creamos el componente CartContext para guardar el contenido del carrito y utilizarlo luego en el componente CartView y en el componente CheckOut. CarView nos muestra el contenido del carrito y CheckOut nos lleva al pago.






### Echo con


* [HTML]
* [CSS]
* [Bootstrap](https://getbootstrap.com)
* [JavaScript]
* [ReactJS]
* [React-Bootstrap]
* [Sweetalert2]
* [Firebase]

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">Volver arriba</a>)</p>



<!-- CONTACT -->
## Contacto

Diego Schmidt - [@diegogschmidt](https://twitter.com/diegogschmidt) - email@diegoschmidt.com

Link del proyecto: [https://github.com/Diego-Schmidt/coderhouse-react](https://github.com/Diego-Schmidt/coderhouse-react)
Web Deployment: [https://diego-schmidt.github.io/coderhouse-react/](https://diego-schmidt.github.io/coderhouse-react/)
