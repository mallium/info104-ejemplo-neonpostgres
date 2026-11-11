import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export async function GET() {
  const data = await sql`SELECT * FROM frases`;
  return NextResponse.json(data);
}
