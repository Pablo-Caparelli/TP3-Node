📦 API de Productos con Express

📄 Descripción del Proyecto
Este proyecto consiste en una API REST desarrollada con Node.js y Express que permite gestionar un listado de productos.

La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre productos, cada uno con un identificador único generado automáticamente, nombre y precio.

🚀 Funcionalidades
Obtener todos los productos
Obtener un producto por ID
Crear un nuevo producto
Actualizar un producto existente
Eliminar un producto

🛠️ Tecnologías utilizadas
Node.js
Express
JavaScript

📥 Instalación y ejecución

1. Clonar el repositorio
   git clone https://github.com/TU-USUARIO/TU-REPO.git

2. Ingresar a la carpeta del proyecto
   cd TU-REPO

3. Instalar dependencias
   npm init -y
   npm install express

4. Ejecutar el servidor
   node server.js
   node --watch server.js

5. Servidor en ejecución
   El servidor estará disponible en:
   http://localhost:3000

📌 Endpoints disponibles
GET /products
Obtiene todos los productos.

GET /products/:id
Obtiene un producto por su ID.

POST /products
Crea un nuevo producto.

PUT /products/:id
Actualiza un producto existente.

DELETE /products/:id
Elimina un producto.

📸 Capturas de pantalla
Ejemplo de uso en Postman

## 📸 Capturas de pantalla

### Ejemplo de uso en Postman

### Obtener productos

![Obtener productos](public/getProducts.jpeg)

### Crear producto

![Crear producto](public/crearProducto.jpeg)

### getProducts con producto agregado

![getProducts con producto agregado](public/getProductsConProductoAgregado.jpeg)

### Obtener producto por su id

![Obtener producto por su id](public/getProduct-id.jpeg)

### Eliminar Producto

![Eliminar producto](public/deleteProduct.jpeg)

### Actualizar Producto

![Actualizar producto](public/Put-ActualizarProducto.jpeg)

### getProducts con producto actualizado

![getProducts con producto actualizado](public/getProductsConProductoActualizado.jpeg)

### getProducts en Navegador Puerto 3000

![getProducts en Navegador Puerto 3000](public/getProducts%20en%20Navegador.jpeg)

👨‍🎓 Créditos
Nombre: Pablo Caparelli
Desarrollo con Node
Diplomatura en Professional Full-Stack Developer
Comisión 999201567
TP2: API REST con Express

📚 Fuentes y bibliografía
Documentación oficial de Node.js
https://nodejs.org/
Documentación oficial de Express
https://expressjs.com/
MDN Web Docs (JavaScript)
https://developer.mozilla.org/

📌 Notas adicionales
Los datos se almacenan en memoria (array), por lo tanto se pierden al reiniciar el servidor.
Se utilizan UUIDs para generar identificadores únicos.
