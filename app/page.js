"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [frases, setFrases] = useState(null);
  useEffect(() => {
    fetch("/api/frases")
      .then((res) => res.json())
      .then((data) => setFrases(data));
  }, []);
  return (
    <div className="main">
      <div>
        <h1>Ejemplo de conexión a DB vía API</h1>
        <p>
          Las frases mostradas abajo son recuperadas desde una base de datos en
          la nube.{" "}
        </p>
        <div className="frases">
          {frases
            ? frases.map((frase, i) => <div key={i}>{frase.texto}</div>)
            : "Cargando..."}
        </div>
        <ul>
          <li>
            Primero, crea una cuenta en neon{" "}
            <a href="https://neon.com/" title="Neon Postgres">
              https://neon.com/
            </a>
          </li>
          <li>
            Luego, en Neon, crea una base d e datos de ejemplo, una tabla con
            algunos datos. En este ejemplo se creó la base de datos
            "ejemplo-sql" con una tabla, la tabla "frases"{" "}
            <pre>
              <code>
                CREATE TABLE "frases" (<br /> "id" integer PRIMARY KEY GENERATED
                ALWAYS AS IDENTITY (sequence name "frases_id_seq" INCREMEN BY 1
                MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
                <br /> "texto" text,
                <br /> "fecha" timestamp
                <br />
                );
                <br />
                CREATE UNIQUE INDEX "frases_pkey" ON "frases" ("id");
              </code>
            </pre>
          </li>
          <li>
            Neon te da el string de conexión a tu base de datos: botón
            "connect", ver .env
            <br />
            El string de conexión se copia en un archivo .env.local en la raiz
            de tu proyeccto NextJS
          </li>
          <li>
            Revisa el archivo ./api/frases/route.js para ver como se define el
            servicio que hace aquery a la base de datos
          </li>
          <li>
            Revisa el archivo ./page.js para ver como se consume el servicio
          </li>
        </ul>
      </div>
    </div>
  );
}
