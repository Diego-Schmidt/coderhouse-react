const productosDB = [
  {
  "id": 1,
  "name": "Tuck",
  "ingredients": "Chef Hat 25cm",
  "category": "hamburguesas",
  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  "stock": 85,
  "price": 314,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}, {
  "id": 2,
  "name": "Chancey",
  "ingredients": "Sunflower Seed Raw",
  "category": "hamburguesas",
  "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  "stock": 10,
  "price": 224,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}, {
  "id": 3,
  "name": "Elwyn",
  "ingredients": "Tea - Jasmin Green",
  "category": "hamburguesas",
  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  "stock": 17,
  "price": 416,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}, {
  "id": 4,
  "name": "Coraline",
  "ingredients": "Flour - Buckwheat, Dark",
  "category": "hamburguesas",
  "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  "stock": 13,
  "price": 227,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}, {
  "id": 5,
  "name": "Carlos",
  "ingredients": "Wine - Red, Mouton Cadet",
  "category": "papas",
  "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  "stock": 23,
  "price": 428,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}, {
  "id": 6,
  "name": "Mahmud",
  "ingredients": "Fennel - Seeds",
  "category": "papas",
  "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "stock": 25,
  "price": 207,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}, {
  "id": 7,
  "name": "Susana",
  "ingredients": "Extract - Vanilla,artificial",
  "category": "papas",
  "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  "stock": 67,
  "price": 378,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}, {
  "id": 8,
  "name": "Matti",
  "ingredients": "Cheese - Fontina",
  "category": "papas",
  "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  "stock": 65,
  "price": 438,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}, {
  "id": 9,
  "name": "Raimund",
  "ingredients": "Lemonade - Pineapple Passion",
  "category": "batatas",
  "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  "stock": 92,
  "price": 247,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}, {
  "id": 10,
  "name": "Debby",
  "ingredients": "Oil - Pumpkinseed",
  "category": "batatas",
  "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  "stock": 92,
  "price": 245,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}, {
  "id": 11,
  "name": "Casie",
  "ingredients": "Ecolab Crystal Fusion",
  "category": "batatas",
  "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  "stock": 43,
  "price": 575,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}, {
  "id": 12,
  "name": "Regine",
  "ingredients": "Tomatoes - Orange",
  "category": "batatas",
  "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  "stock": 70,
  "price": 423,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}, {
  "id": 13,
  "name": "Lacy",
  "ingredients": "Cups 10oz Trans",
  "category": "salsas",
  "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  "stock": 90,
  "price": 364,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}, {
  "id": 14,
  "name": "Bebe",
  "ingredients": "Wine - White, Concha Y Toro",
  "category": "salsas",
  "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "stock": 58,
  "price": 515,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}, {
  "id": 15,
  "name": "Charmaine",
  "ingredients": "Sauce - Rosee",
  "category": "salsas",
  "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  "stock": 99,
  "price": 526,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}, {
  "id": 16,
  "name": "Gibby",
  "ingredients": "Bread - Onion Focaccia",
  "category": "salsas",
  "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  "stock": 36,
  "price": 409,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}, {
  "id": 17,
  "name": "Calvin",
  "ingredients": "Apple - Macintosh",
  "category": "bebidas",
  "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  "stock": 19,
  "price": 216,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}, {
  "id": 18,
  "name": "Halsy",
  "ingredients": "Pepper - Green Thai",
  "category": "bebidas",
  "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  "stock": 62,
  "price": 350,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}, {
  "id": 19,
  "name": "Grier",
  "ingredients": "Wine - Ruffino Chianti Classico",
  "category": "bebidas",
  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  "stock": 99,
  "price": 224,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}, {
  "id": 20,
  "name": "Pacorro",
  "ingredients": "Sauce - Gravy, Au Jus, Mix",
  "category": "bebidas",
  "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "stock": 82,
  "price": 354,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}, {
  "id": 21,
  "name": "Lenee",
  "ingredients": "Wine - Red, Colio Cabernet",
  "category": "bebidas",
  "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  "stock": 16,
  "price": 251,
  "picture": "https://p.favim.com/orig/2018/11/28/hamburguer-cheddar-tomato-Favim.com-6588712.jpg"
}
];


export default productosDB;