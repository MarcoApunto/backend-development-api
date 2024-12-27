# Backend Development and API Creation

Este repositorio es el resultado de un proyecto del curso *Backend Development and API Creation* en **Coursera**. El backend está construido con Node.js, Express y MongoDB, cubriendo los siguientes aspectos:

- **Configuración del servidor**: Servidor optimizado para la gestión de la aplicación.
- **Autenticación JWT**: Implementación de JWT para proteger las rutas de la API.
- **Base de datos con MongoDB y Mongoose**: Manejo de datos con MongoDB y Mongoose.
- **Perfiles de usuario**: Funcionalidades avanzadas con validación de datos para los perfiles de usuario.

## Sobre el curso

Este proyecto forma parte del programa especializado **MERN Stack Front To Back: Full Stack React, Redux & Node.js** en Coursera. A través de este programa, se abordan temas como la creación de aplicaciones full-stack con el stack MERN, implementación de autenticación segura con JWT, desarrollo de interfaces reactivas con React y gestión del estado con Redux.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/MarcoApunto/backend-development-api
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las credenciales de MongoDB:

   Dirígete al archivo `./config/keys.js` y añade tus credenciales de MongoDB en la variable de conexión:

   ```javascript
   module.exports = {
     mongoURI: 'mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.onfmv.mongodb.net/web-data'
   };
   ```

	 Sustituye `<USERNAME>` y `<PASSWORD>` por tus credenciales de MongoDB.


4. Inicia el servidor:

   Para iniciar el servidor de manera normal, usa:
   ```bash
   npm start
   ```

   Para iniciar el servidor con **Nodemon** (recarga automática en desarrollo), usa:
   ```bash
   npm run server
   ```

## Tecnologías utilizadas

Este proyecto utiliza las siguientes tecnologías:

- **Node.js** y **Express** para la creación del servidor.
- **MongoDB** y **Mongoose** para la gestión de la base de datos.
- **JWT** y **Passport.js** para la autenticación y autorización.
- **bcryptjs** para la encriptación de contraseñas.
- **Gravatar** para generar avatares.
- **Nodemon** para desarrollo.

## Licencia

Este proyecto está bajo la licencia ISC.