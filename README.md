#  Blog API

Esta es una API REST pensada para gestionar el contenido de un blog: autores y sus publicaciones. Permite crear, leer, actualizar y eliminar tanto autores como posts, manteniendo la relación entre ellos.

La idea del proyecto es simular un backend real, aplicando una estructura ordenada y buenas prácticas que se usan en aplicaciones profesionales: separación por capas, validación de datos, manejo centralizado de errores y testing automatizado.

---

##  URL de la API

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

##  ¿Qué hace esta API?

Esta API permite manejar un sistema básico de blog. Con ella podés:

* Crear autores con sus datos
* Crear posts asociados a un autor
* Consultar información (todos o por ID)
* Actualizar contenido existente
* Eliminar registros
* Validar que los datos enviados sean correctos
* Manejar errores de forma controlada

Está pensada como base para algo más grande (por ejemplo, una app web completa).


##  Tecnologías utilizadas

El proyecto está construido con herramientas comunes en el desarrollo backend:

* **Node.js**: entorno donde corre el servidor
* **Express**: framework para manejar rutas y lógica HTTP
* **PostgreSQL**: base de datos relacional
* **pg**: cliente para conectarse a PostgreSQL
* **Vitest + Supertest**: para testear los endpoints
* **Swagger (OpenAPI)**: documentación interactiva de la API
* **Railway**: plataforma donde está desplegada la app


##  Estructura del proyecto

El código está organizado de forma modular para que sea más fácil de entender y escalar:

```bash
src/
│
├── controllers/        # Manejan las requests y responses (Authors, Posts)
│   ├── Authors.Controller.js
│   └── Post.Controllers.js
│
├── services/           # Lógica de negocio y consultas a la base de datos
│   ├── Authors.Services.js
│   └── Posts.Services.js
│
├── routes/             # Definen los endpoints de la API
│   ├── Authors.Routes.js
│   └── Posts.Routes.js
│
├── middlewares/        # Validaciones y manejo de errores
│   ├── Error.Middlewares.js
│   ├── Validate.Authors.js
│   └── Validate.Posts.js
│
├── db/                 # Conexión y configuración de PostgreSQL
│   └── index.js
│
├── sql/                # Scripts SQL de la base de datos
│   └── schema.sql
│
├── tests/              # Pruebas de la API
│   ├── authors.test.js
│   └── posts.test.js
│
├── yaml/               # Documentación Swagger / OpenAPI
│   ├── authors.yaml
│   ├── posts.yaml
│   └── swagger.yaml
│
├── app.js              # Configuración de Express (middlewares, rutas)
└── server.js           # Inicio del servidor (listen en el puerto)
```

Esta separación evita mezclar responsabilidades y hace que el código sea más mantenible.


## Endpoints disponibles

###  Autores

* `GET /api/authors` → devuelve todos los autores
* `GET /api/authors/:id` → devuelve un autor específico
* `POST /api/authors` → crea un nuevo autor
* `PUT /api/authors/:id` → actualiza un autor
* `DELETE /api/authors/:id` → elimina un autor



###  Posts

* `GET /api/posts` → devuelve todos los posts
* `GET /api/posts/:id` → devuelve un post
* `GET /api/posts/author/:authorId` → posts de un autor
* `POST /api/posts` → crea un post
* `PUT /api/posts/:id` → actualiza un post
* `DELETE /api/posts/:id` → elimina un post

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
    "author_id": 1 
  }'
```

Si todo está bien, la API devuelve el post creado con su ID.

---

### Error por datos faltantes

```bash
curl -X POST http://localhost:3000/api/posts -d '{}'
```

En este caso la API responde con un error porque faltan campos obligatorios:

```json
{
  "error": "Missing fields"
}
```

Esto ayuda a evitar datos incompletos en la base.

## Campos requeridos: 
- title
- content
- authorId
con sus respectivas llaves 
{
   "title": "post4",
  "content": "ejemplo de primer post",
  "authorId": 1 (el id es para el autor)
}
##  Documentación interactiva

La API incluye documentación visual con Swagger:

```bash
https://proyectom2joaquingonzalezft73-production.up.railway.app/api-docs/ 
```

Desde ahí podés explorar todos los endpoints, ver qué datos espera cada uno y probarlos directamente desde el navegador.

Es muy útil para entender rápido cómo funciona la API sin tener que leer todo el código.

---

##  Ejecutar el proyecto localmente

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
DB_NAME= miniblog
DB_USER= joaquin
DB_PASSWORD=admin
PORT=5432
```

---

### 4. Crear base de datos

```sql
CREATE DATABASE blog_db;
```



### 5. Crear tablas

```sql
CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author_id INTEGER REFERENCES authors(id)
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



##  Testing

El proyecto incluye tests para verificar que los endpoints funcionen correctamente.

```bash
npm test
```

Se usan:

* **Vitest** para ejecutar los tests
* **Supertest** para simular requests HTTP

Esto permite detectar errores sin necesidad de probar todo manualmente.



## Manejo de errores

La API tiene un middleware global que captura errores automáticamente. Esto permite:

* Evitar que el servidor se caiga
* Mantener respuestas consistentes
* Facilitar el debugging



## Estado del proyecto

* API funcional
* CRUD completo
* Conexión a base de datos
* Testing implementado
* Deploy activo



### Autor

Joaquín Gonzalez FT73
