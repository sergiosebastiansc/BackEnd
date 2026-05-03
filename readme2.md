# 🏢 Sistema de Gestión de Espacios y Reservas (V2 - MongoDB)

API REST construida con **Node.js** y **Express**, diseñada para la gestión de espacios físicos y la reserva de los mismos. Esta implementación utiliza **MongoDB** como base de datos persistente y cuenta con un sistema robusto de autenticación y validación.

---

## 🚀 Tecnologías y Herramientas

*   **Backend:** Node.js, Express.
*   **Base de Datos:** MongoDB con **Mongoose** como ODM.
*   **Seguridad:** 
    *   **Bcryptjs:** Para el cifrado de contraseñas.
    *   **JSON Web Tokens (JWT):** Para la gestión de sesiones y autenticación.
*   **Variables de Entorno:** Gestionadas mediante `dotenv`.
*   **Pruebas:** Thunder Client / Postman.

---

## ⚙️ Configuración e Instalación

1. **Clonar el repositorio e instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto y añade:
   ```env
   PORT=3000
   MONGO_URI=tu_cadena_de_conexion_mongodb
   SECRET_KEY=tu_clave_secreta_para_jwt
   ```

3. **Ejecutar el servidor:**
   ```bash
   # Modo desarrollo (con nodemon)
   npm run dev
   ```

---

## 🛠️ Estructura de la API

### Autenticación (Usuarios)
| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `POST` | `/registro` | Crea un nuevo usuario y cifra su contraseña. |
| `POST` | `/login` | Valida credenciales y devuelve un token JWT. |

### Gestión de Espacios
| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/espacios` | Obtiene la lista de todos los espacios en la DB. |
| `POST` | `/espacios` | Registra un nuevo espacio de trabajo. |

### Reservas
| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/reservas` | Lista todas las reservas realizadas. |
| `POST` | `/reservas` | Crea una reserva (Requiere validación de disponibilidad). |
| `PUT` | `/reservas/:id` | Modifica una reserva existente (cambio de fecha u hora). |
| `DELETE` | `/reservas/:id` | Cancela o elimina una reserva por su ID. |

---

## 🛡️ Características de Seguridad y Validación

1.  **Validación de Reservas:** El sistema cuenta con un middleware `validateReserva.js` que:
    *   Verifica que todos los campos obligatorios estén presentes.
    *   Valida la existencia del `espacioId` en la base de datos antes de proceder.
    *   Evita conflictos de horarios.

2.  **Cifrado de Contraseñas:** En el controlador de usuarios, las contraseñas nunca se guardan en texto plano; se utiliza un *hash* seguro.

3.  **Autorización (JWT):** Los endpoints sensibles están protegidos por un middleware de autenticación que verifica la validez del token enviado en las cabeceras.

---

## 🧪 Guía de Pruebas (Thunder Client)

### Registro de Usuario
*   **URL:** `http://localhost:3000/registro`
*   **Cuerpo (JSON):**
    ```json
    {
      "nombre": "cliente",
      "email": "cliente@example.com",
      "password": "123456password"
    }
    ```

### Login
*   **URL:** `http://localhost:3000/login`
*   **Resultado:** Recibirás un `token`. Debes usar este token en las cabeceras `Authorization: Bearer <token>` para las rutas protegidas.

### Crear Reserva
*   **URL:** `http://localhost:3000/reservas`
*   **Validación Automática:** Si intentas reservar un espacio inexistente o dejas campos vacíos, la API responderá con `400 Bad Request` o `404 Not Found` según corresponda.

---

## 📁 Organización del Código
*   `/src/models`: Definición de esquemas de Mongoose (`Espacio`, `Usuario`, `Reserva`).
*   `/src/controllers`: Lógica de negocio para cada entidad.
*   `/src/middlewares`: Validaciones personalizadas y control de acceso.
*   `/src/database`: Configuración de la conexión a MongoDB.