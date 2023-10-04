# app-Perfumes-node.js-Mongodb
Aplicación de Node.js con Panel de Administrador
Esta es una aplicación de práctica desarrollada en Node.js que incluye un panel de administrador para gestionar productos. Los productos creados y editados en el panel de administrador aparecen en la página principal de la aplicación. Esta aplicación utiliza una variedad de tecnologías web y herramientas populares para su funcionamiento.

## Tecnologías Utilizadas
Node.js: Plataforma de ejecución de JavaScript que permite construir aplicaciones del lado del servidor de manera eficiente.
Express: Framework web de Node.js que simplifica la creación de aplicaciones web y API RESTful.
Handlebars (HBS): Motor de plantillas que facilita la generación de contenido HTML dinámico.
CSS: Se utiliza para diseñar la interfaz de usuario y darle estilo a la aplicación.
JavaScript: Se emplea tanto en el lado del cliente como en el servidor para mejorar la experiencia del usuario y manejar la lógica de la aplicación.
Multer: Middleware de Express para el manejo de archivos, utilizado en la carga de imágenes de productos.
Passport: Middleware de autenticación para gestionar la autenticación de usuarios en el panel de administrador.
MongoDB: Base de datos NoSQL utilizada para almacenar la información de los productos y la información de autenticación de usuarios.
bcryptjs: Biblioteca para el cifrado seguro de contraseñas, utilizada para proteger las contraseñas de los usuarios almacenadas en la base de datos.
## Funcionalidades Principales

- **Panel de Administrador:** Solo los usuarios con permisos de administrador pueden acceder al panel de administrador. Desde allí, pueden crear, editar y eliminar productos.
- **Visualización de Productos:** Los productos creados y editados en el panel de administrador se muestran en la página principal de la aplicación.
- **Autenticación de Usuarios:** Utiliza Passport para autenticar a los usuarios que acceden al panel de administrador.
- **Gestión de Imágenes:** Multer se utiliza para cargar y gestionar imágenes de productos.
- **Base de Datos:** La información de los productos y los datos de autenticación se almacenan en una base de datos MongoDB.
