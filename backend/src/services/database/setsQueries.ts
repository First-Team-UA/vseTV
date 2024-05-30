import { RowDataPacket } from "mysql2"

import pool from "./index"

interface ClientSets extends RowDataPacket {
  channel: number
  export_id: number
  export_ctag: string
}

const querySetChannels = "SELECT * FROM clients_set_channels"

export async function clientSets(): Promise<ClientSets[]> {
  try {
    const [rows] = await pool.query<ClientSets[]>(querySetChannels)
    return rows
  } catch (error) {
    console.error("Error executing query", error)
    return []
  }
}
