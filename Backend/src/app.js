const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cookieParser())

// CORS origin is configurable via `CLIENT_URL` env var.
// Set `CLIENT_URL=ALL` to allow all origins (not recommended for production).
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173"
const corsOptions = {
    origin: CLIENT_URL === 'ALL' ? true : CLIENT_URL,
    credentials: true
}
app.use(cors(corsOptions))

/* require all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")


/* using all the routes here */
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)

// Health check route — useful for platforms like Render to verify the service is up
app.get('/', (req, res) => {
    res.json({ status: 'ok' })
})



module.exports = app