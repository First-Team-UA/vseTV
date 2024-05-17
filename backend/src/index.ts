import dotenv from "dotenv"
import express, { Request, Response } from "express"

console.log(express)

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express!")
})

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`)
})
export {}
