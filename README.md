# 🎴 K-Pop Photocard API

Este proyecto consiste en el desarrollo de una API backend utilizando **Node.js, Express y TypeScript**, conectada a una base de datos **MySQL**.

La API permite consultar información sobre una colección de *photocards de K-Pop*, almacenadas en una base de datos denominada `kpop_photocard_manager`. Cada registro incluye datos como:

- Identificador (ID)
- Nombre del miembro
- Grupo
- Álbum
- Precio
- Fecha de lanzamiento
- Estado (activa/inactiva)

## Objetivos del proyecto

- Utilizar **ES Modules** en TypeScript (sin `require`).
- Configurar el servidor para escuchar en un puerto definido mediante `process.env.PORT` o 3000 por defecto.
- Implementar una ruta `GET /` que devuelve contenido HTML explicando la temática.
- Crear una ruta `GET /api/datos` que se conecta a MySQL y devuelve los registros en formato JSON.
- Aplicar tipado estricto en TypeScript, evitando el uso de `any` mediante una `interface` que representa exactamente la estructura de la tabla.
- Utilizar el paquete `dotenv` para gestionar de forma segura las variables de entorno.

El proyecto demuestra la correcta integración entre **TypeScript, Express y MySQL**, aplicando buenas prácticas de tipado y configuración de entorno.