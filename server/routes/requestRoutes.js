const express = require("express")
require("dotenv").config()

const router = express.Router()

const requestController = require("../controller/requestController")
router.get('/', requestController.welcome)

module.exports = router