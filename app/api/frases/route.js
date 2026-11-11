import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export async function GET() {
  const data = await sql`select f.id, f.texto, count(v.id) as n_votos
  from frases as f left join votos as v on f."id" = v."fraseId"
group by f.id order by n_votos desc`;
  return NextResponse.json(data);
}
