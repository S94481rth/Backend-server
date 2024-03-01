const express = require("express")
require("dotenv").config()
const SERVER_NAME = process.env.SERVER_NAME
const IP_ADDRESS = require("../utilities/ipAddress").ipaddress()
const PORT = process.env.PORT

exports.welcome = (req,res) => {
    res.end(`response from the server whose port is ${PORT} and ip address is ${IP_ADDRESS}`)
}