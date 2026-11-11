## Instalar

```bash
npm install
```

Es posible que necesites instalar el módulo de neon:

```bash
npm install @neondatabase/serverless
```

Luego debes crear una base de datos postgres en Neon y copiar el string de conexión en una variable de entorno
.env.local en la raiz del proyecto

```bash
DATABASE_URL='postgresql://neondb_owner...'
```

Luego puedes correr el proyecto

```bash
npm run dev
```
