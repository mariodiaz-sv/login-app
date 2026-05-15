# Sistema Full Stack Login con Docker

Aplicación Full Stack desarrollada con:

- Frontend HTML + Bootstrap + JavaScript
- Backend Node.js + Express
- Base de datos MySQL
- Docker y Docker Compose

La aplicación permite:

- Registro de usuarios
- Inicio de sesión
- Validación de credenciales
- Dashboard de bienvenida
- Persistencia de datos con Docker Volumes

---

# Tecnologías utilizadas

## Frontend

- HTML5
- CSS3
- JavaScript
- Bootstrap 5

## Backend

- Node.js
- Express.js
- bcrypt
- cors
- mysql2

## Base de datos

- MySQL 8

## DevOps

- Docker
- Docker Compose

---

# Arquitectura del proyecto

Frontend → Backend API → MySQL

```text
Navegador
    │
    ▼
Frontend (Nginx)
    │
    ▼
Backend API (Express)
    │
    ▼
MySQL
```

---

# Estructura del proyecto

```text
login-app/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
├── frontend/
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── app.js
│   └── Dockerfile
│
├── database/
│   └── init.sql
│
└── docker-compose.yml
```

---

# Requisitos

Instalar:

- Docker
- Docker Compose
- Visual Studio Code

Verificar instalación:

```bash
docker --version
docker compose version
```

---

# Clonar el proyecto

```bash
git clone https://github.com/USUARIO/REPOSITORIO.git
```

Entrar al proyecto:

```bash
cd login-app
```

---

# Levantar el proyecto

Construir y ejecutar contenedores:

```bash
docker compose up -d --build
```

---

# Acceder a la aplicación

## Frontend

```text
http://localhost:8080/login.html
```

## Backend API

```text
http://localhost:3000
```

---

# Funcionalidades

## Registro

Permite crear nuevos usuarios almacenados en MySQL.

---

## Login

Valida:

- Correo
- Contraseña

Si las credenciales son correctas:

- Redirecciona al dashboard
- Muestra el nombre del usuario
- Muestra fecha y hora actual

---

## Dashboard

Muestra:

- Bienvenida personalizada
- Fecha y hora dinámica
- Botón cerrar sesión

---

# Persistencia de datos

La base de datos utiliza Docker Volumes:

```yaml
volumes:
  mysql_data:
```

Esto permite mantener los datos aunque el contenedor sea eliminado.

---

# Comandos útiles

## Ver contenedores activos

```bash
docker ps
```

---

## Ver logs del backend

```bash
docker compose logs backend
```

---

## Detener servicios

```bash
docker compose stop
```

---

## Eliminar contenedores

```bash
docker compose down
```

---

## Eliminar contenedores y volumen MySQL

```bash
docker compose down -v
```

---

## Reconstruir proyecto

```bash
docker compose up -d --build
```

---

# Problemas comunes

## Error al registrar usuario

### Solución:

```bash
docker compose down -v
docker compose up -d --build
```

---

## Error 404 nginx

Reconstruir frontend:

```bash
docker compose up -d --build
```

---

## Error MySQL connection closed

El proyecto utiliza:

```javascript
mysql.createPool()
```

para manejar conexiones persistentes correctamente.

---

# Competencias desarrolladas

- Arquitectura Full Stack
- Frontend separado del backend
- APIs REST
- Docker Compose
- Persistencia con volúmenes
- Comunicación entre contenedores
- Autenticación básica
- DevOps básico
- Contenedores Docker

---

# Capturas de pantalla

Agregar aquí:

- Pantalla Login
- Registro
- Dashboard
- Docker funcionando

---

# Autor

Mario Diaz

Proyecto educativo orientado a prácticas DevOps y Full Stack con Docker.
