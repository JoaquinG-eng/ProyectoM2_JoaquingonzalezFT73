# Blog API 📝

API REST para gestionar el contenido de un blog: autores y sus publicaciones. Permite crear, leer, actualizar y eliminar tanto autores como posts, manteniendo la relación entre ellos.

El proyecto aplica una arquitectura ordenada con separación por capas, validación de datos, manejo centralizado de errores, documentación con Swagger y testing automatizado.

---

## Demo

🔗 **Deploy activo:** [rest-api-node-production-551b.up.railway.app](https://rest-api-node-production-551b.up.railway.app)

📄 **Documentación Swagger:** [rest-api-node-production-551b.up.railway.app/api-docs](https://rest-api-node-production-551b.up.railway.app/api-docs)

---

## Tecnologías

| Tecnología | Uso |
|---|---|
| Node.js | Entorno de ejecución |
| Express | Framework HTTP |
| PostgreSQL | Base de datos relacional |
| pg | Cliente de PostgreSQL para Node |
| Vitest + Supertest | Testing de endpoints |
| Swagger (OpenAPI) | Documentación interactiva |
| Railway | Plataforma de deploy |

---

## Estructura del proyecto

```
/
├── src/
│   ├── controllers/
│   │   ├── Authors.Controller.js
│   │   └── Post.Controllers.js
│   ├── services/
│   │   ├── Authors.Services.js
│   │   └── Posts.Services.js
│   ├── routes/
│   │   ├── Authors.Routes.js
│   │   └── Posts.Routes.js
│   ├── middlewares/
│   │   ├── Error.Middlewares.js
│   │   ├── Validate.Authors.js
│   │   └── Validate.Posts.js
│   ├── db/
│   │   └── index.js
│   ├── yaml/
│   │   ├── authors.yaml
│   │   ├── posts.yaml
│   │   └── swagger.yaml
│   ├── app.js
│   └── server.js
├── sql/
│   └── schema.sql
├── tests/
│   ├── authors.test.js
│   └── posts.test.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## Endpoints

### Autores

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/authors` | Obtener todos los autores |
| GET | `/api/authors/:id` | Obtener autor por ID |
| POST | `/api/authors` | Crear un autor |
| PUT | `/api/authors/:id` | Actualizar un autor |
| DELETE | `/api/authors/:id` | Eliminar un autor |

### Posts

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/posts` | Obtener todos los posts |
| GET | `/api/posts/:id` | Obtener post por ID |
| GET | `/api/posts/author/:authorId` | Obtener posts de un autor |
| POST | `/api/posts` | Crear un post |
| PUT | `/api/posts/:id` | Actualizar un post |
| DELETE | `/api/posts/:id` | Eliminar un post |

---

## Ejemplos de uso

### Obtener todos los autores

```bash
GET https://rest-api-node-production-551b.up.railway.app/api/authors
```

### Crear un autor

```bash
POST https://rest-api-node-production-551b.up.railway.app/api/authors
Content-Type: application/json

{
  "name": "Joaquín González"
}
```

### Crear un post

```bash
POST https://rest-api-node-production-551b.up.railway.app/api/posts
Content-Type: application/json

{
  "title": "Mi primer post",
  "content": "Contenido del post",
  "author_id": 1
}
```

> ⚠️ El campo es `author_id` (no `authorId`) para mantener consistencia con la base de datos.

### Error por datos faltantes

```json
{
  "error": "Missing fields"
}
```

---

## Cómo correr el proyecto localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/JoaquinG-eng/Rest-Api-Node.git
cd Rest-Api-Node
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Copiá el archivo de ejemplo y completá con tus valores:

```bash
cp .env.example .env
```

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=miniblog
DB_USER=tu_usuario
DB_PASSWORD=tu_password
PORT=3000
```

### 4. Crear la base de datos

```sql
CREATE DATABASE miniblog;
```

### 5. Crear las tablas

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

### 6. Levantar el servidor

```bash
npm run dev
```

La API estará disponible en `http://localhost:3000`

La documentación Swagger en `http://localhost:3000/api-docs`

---

## Testing

```bash
# Correr los tests
npm test

# Modo watch
npm run test:watch

# Reporte de cobertura
npm run test:coverage
```

---

## Deploy en Railway

### Variables de entorno necesarias en Railway

```env
DATABASE_URL=${{Postgres.DATABASE_URL}}
NODE_ENV=production
```

### Pasos

1. Subir el código a GitHub
2. Conectar el repositorio en [Railway](https://railway.app)
3. Agregar las variables de entorno en el dashboard
4. Railway ejecuta automáticamente `npm start`
5. Generar dominio en **Settings → Networking**

Cada `git push` redeploya automáticamente.

---

## Manejo de errores

La API tiene un middleware global (`Error.Middlewares.js`) que captura todos los errores y devuelve respuestas consistentes con el código HTTP correspondiente.

---

## Autor

**Joaquín Gonzalez** — [GitHub](https://github.com/JoaquinG-eng)