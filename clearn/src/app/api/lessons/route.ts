import { NextResponse } from "next/server";
import { curriculum } from "@/lib/curriculum";

export async function GET() {
  return NextResponse.json({ units: curriculum });
}
