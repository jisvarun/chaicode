import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors(
    {
        origin: [
            "http://localhost:5173",
            "http://localhost:5174",
            "http://localhost:3000",
        ],
        credentials: true
    }
))

// API Routes
app.get("/api/message", (req, res) => {
    res.json({message: "Hello from Tech With Varun."})
})

app.get("/api/user", (req, res) => {
    res.json({message: "Hello User"})
})
app.get("/api/admin", (req, res) => {
    res.json({message: "Hello Admin"})
})

const PORT = 4000
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
    
})