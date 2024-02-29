const express = require("express")
const cors = require("cors")

require("dotenv").config()

const app = express()
const PORT = process.env.PORT
const SERVER_NAME = process.env.SERVER_NAME || "server1"

app.use(cors())
app.use(express.json())

const requestRoutes = require("./server/routes/requestRoutes")
app.use('/requestHandler', requestRoutes)

const sendHeartbeat = require('./server/utilities/sendHeartbeat').sendHeartbeat
const heartbeatInterval = 1000;
setInterval(sendHeartbeat, heartbeatInterval);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})