## Instalar

```bash
npm install
```

Es posible que necesites instalar el módulo de neon:

```bash
npm install @neondatabase/serverless
```

Luego debes crear una base de datos postgres en Neon y copiar el string de conexión en una variable de entorno
.env.local en la raiz del proyecto:

Primero, crea una cuenta en neon [(https://neon.com/)](https://neon.com/)

Luego, en Neon, crea una base de datos de ejemplo y una tabla. En este ejemplo se creó la base de datos "ejemplo-sql" con una tabla, la tabla "frases"

```sql
CREATE TABLE "frases" (
     "id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "frases_id_seq" INCREMEN BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
     "texto" text,
     "fecha" timestamp
);
CREATE UNIQUE INDEX "frases_pkey" ON "frases" ("id");
```

Pobla la base de datos con algunos datos usando la herramienta de Neon.

Neon te da el string de conexión a tu base de datos: botón "connect", ver .env
El string de conexión se copia en un archivo .env.local en la raiz de tu proyecto NextJS

```bash
DATABASE_URL='postgresql://neondb_owner...'
```

Luego puedes correr el proyecto

```bash
npm run dev
```

Revisa el archivo route para ver como se define el servicio que hace la query a la base de datos

```bash
./api/frases/route.js
```

Revisa el archivo ./page.js para ver como se consume el servicio

```bash
./page.js
```
