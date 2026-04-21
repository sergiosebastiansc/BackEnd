# 🏢 Sistema de Gestión de Espacios y Reservas

API REST construida con **Node.js** y **Express** siguiendo una arquitectura **MVC** (Model-View-Controller). Este sistema permite gestionar la disponibilidad de espacios de trabajo y realizar reservas.

---

## 🛠️ Tecnologías
* **Node.js** & **Express**
* **Arquitectura:** MVC
* **Manejo de errores:** Middleware global centralizado
* **Formato de datos:** JSON

---

## 📋 Documentación de Endpoints

| Método | Endpoint | Descripción | Estado |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/espacios` | Obtiene la lista completa de espacios disponibles. | 200 |
| `POST` | `/api/reservas` | Crea una nueva reserva. | 201 |
| `GET` | `/api/reservas` | Lista todas las reservas realizadas. | 200 |
| `DELETE` | `/api/reservas/:id` | Elimina una reserva específica por su ID. | 204 |
| `PUT` | `/api/reservas/:id` | Actualiza el estado de una reserva existente. | 200 |

---

## ⚙️ Estructura del Proyecto

```text
/
├── server.js            # Punto de entrada
├── app.js               # Configuración de Express y Middlewares
├── src/
│   ├── routes/          # Definición de endpoints
│   ├── controllers/     # Lógica de negocio
│   ├── models/          # Datos (simulación de BD)
│   └── middlewares/     # Validación y manejador de errores