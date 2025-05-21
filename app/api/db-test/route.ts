import { NextResponse } from "next/server"
import { testConnection } from "@/lib/db"

export async function GET() {
  try {
    const connectionStatus = await testConnection()
    return NextResponse.json(connectionStatus)
  } catch (error: any) {
    return NextResponse.json({ error: "Failed to connect to database", details: error.message }, { status: 500 })
  }
}
