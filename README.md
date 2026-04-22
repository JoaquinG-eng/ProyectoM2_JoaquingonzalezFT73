# Blog API

Esta es una API REST pensada para gestionar el contenido de un blog: autores y sus publicaciones. Permite crear, leer, actualizar y eliminar tanto autores como posts, manteniendo la relación entre ellos.

La idea del proyecto es simular un backend real, aplicando una estructura ordenada y buenas prácticas que se usan en aplicaciones profesionales: separación por capas, validación de datos, manejo centralizado de errores y testing automatizado.

---

## URL de la API

```bash
GET http://localhost:3000/api-docs ( Se accede a la documentacion de swagger)
```

Rutas para obtener autores:

```bash
GET http://localhost:3000/api/Authors
GET http://localhost:3000/api/Authors/5 ( para obtenerlos por id)

```

Por ejemplo, para obtener todos los posts:

```bash
GET http://localhost:3000/api/posts
```

---

## ¿Qué hace esta API?

Esta API permite manejar un sistema básico de blog. Con ella podés:

* Crear autores con sus datos
* Crear posts asociados a un autor
* Consultar información (todos o por ID)
* Actualizar contenido existente
* Eliminar registros
* Validar que los datos enviados sean correctos
* Manejar errores de forma controlada

Está pensada como base para algo más grande (por ejemplo, una app web completa).

## Tecnologías utilizadas

El proyecto está construido con herramientas comunes en el desarrollo backend:

* **Node.js**: entorno donde corre el servidor
* **Express**: framework para manejar rutas y lógica HTTP
* **PostgreSQL**: base de datos relacional
* **pg**: cliente para conectarse a PostgreSQL
* **Vitest + Supertest**: para testear los endpoints
* **Swagger (OpenAPI)**: documentación interactiva de la API
* **Railway**: plataforma donde está desplegada la app

## Estructura del proyecto

El código está organizado de forma modular para que sea más fácil de entender y escalar:

```bash
src/
│
├── controllers/        
│   ├── Authors.Controller.js
│   └── Post.Controllers.js
│
├── services/           
│   ├── Authors.Services.js
│   └── Posts.Services.js
│
├── routes/             
│   ├── Authors.Routes.js
│   └── Posts.Routes.js
│
├── middlewares/        
│   ├── Error.Middlewares.js
│   ├── Validate.Authors.js
│   └── Validate.Posts.js
│
├── db/                 
│   └── index.js
│
├── sql/                
│   └── schema.sql
│
├── tests/              
│   ├── authors.test.js
│   └── posts.test.js
│
├── yaml/               
│   ├── authors.yaml
│   ├── posts.yaml
│   └── swagger.yaml
│
├── app.js              
└── server.js           
```

---

## Endpoints disponibles

### Autores

* `GET /api/authors`
* `GET /api/authors/:id`
* `POST /api/authors`
* `PUT /api/authors/:id`
* `DELETE /api/authors/:id`

---

### Posts

* `GET /api/posts`
* `GET /api/posts/:id`
* `GET /api/posts/author/:authorId`
* `POST /api/posts`
* `PUT /api/posts/:id`
* `DELETE /api/posts/:id`

---

## Ejemplos de uso

Para interactuar con la API podés usar herramientas como Postman (yo utilice thunder).

### Obtener todos los posts

```bash
GET http://localhost:3000/api/posts
```

### Crear un post

```bash
POST https://TU-APP.onrender.com/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Mi primer post",
    "content": "Contenido de prueba",
    "authorId": 1 
  }'
```

⚠️ Importante: la API utiliza `author_id` (no `authorId`) para mantener consistencia con la base de datos.

---

### Error por datos faltantes

```bash
curl -X POST http://localhost:3000/api/posts -d '{}'
```

```json
{
  "error": "Missing fields"
}
```

Esto ayuda a evitar datos incompletos en la base.

---

## Campos requeridos:

* title
* content
* authorId

---

## Documentación interactiva

La API incluye documentación visual con Swagger:

```bash
https://proyectom2joaquingonzalezft73-production.up.railway.app/api-docs/ 
```

Desde ahí podés explorar todos los endpoints.

### Uso en local (AGREGADO)

Para ver Swagger en tu computadora:

1. Levantar el servidor:

```bash
npm run dev
```

2. Ir a:

```bash
http://localhost:3000/api-docs
```

---

## Ejecutar el proyecto localmente

Si querés correr la API en tu propia máquina:

### 1. Clonar repositorio

```bash
git clone https://github.com/JoaquinG-eng/ProyectoM2_JoaquingonzalezFT73.git
cd ProyectoM2_JoaquingonzalezFT73
```

---

### 2. Instalar dependencias

```bash
npm install
```

---

### 3. Crear archivo `.env`

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=miniblog
DB_USER=joaquin
DB_PASSWORD=admin
PORT=3000
```

---

### 4. Crear base de datos

```sql
CREATE DATABASE miniblog;
```

---

### 5. Crear tablas (CORREGIDO)

```sql
CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author_id INTEGER NOT NULL,
  FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE CASCADE
);
```

---

### 6. Levantar servidor

```bash
npm run dev
```

La API va a estar disponible en:

```bash
http://localhost:3000
```

---

## Testing

El proyecto incluye tests para verificar que los endpoints funcionen correctamente.

```bash
npm test
```

### Coverage (AGREGADO)

```bash
npm run test:coverage
```

Esto genera una carpeta `coverage/` donde se puede ver qué partes del código están testeadas.

---

## 🚀 Deployment en Railway (AGREGADO)

### Variables de entorno necesarias

```env
DATABASE_URL=${{Postgres.DATABASE_URL}}
NODE_ENV=production
```

### Explicación

* `DATABASE_URL` contiene toda la conexión a PostgreSQL
* Railway la genera automáticamente
* No se usa `.env` en producción

### Cómo deployar

1. Subir el código a GitHub
2. Conectar el repositorio en Railway
3. Railway ejecuta automáticamente:

```bash
npm start
```

4. Generar dominio en Settings → Networking

### Deploy automático

Cada vez que hacés:

```bash
git push
```

Railway redeploya automáticamente.

---

## Manejo de errores

La API tiene un middleware global que captura errores automáticamente.

---

## Estado del proyecto

* API funcional
* CRUD completo
* Conexión a base de datos
* Testing implementado
* Deploy activo

---

### Autor

Joaquín Gonzalez FT73
