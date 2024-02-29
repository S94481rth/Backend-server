const axios = require("axios")
require('dotenv').config()
const ZOOKEEPER_URL = process.env.ZOOKEEPER_URL
const port = process.env.PORT

console.log(port)

const ip = require('./ipAddress').ipaddress()

exports.sendHeartbeat = async () =>{
    const msg = await axios.post(ZOOKEEPER_URL, {
        ip : ip,
        port : port
    })
    console.log(msg.data)
}

// setInterval(sendHeartbeat, 1000)