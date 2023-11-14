const express = require('express')
const router = express.Router()

const dataController = require('../../controllers/demo/dataController')

router.post('/getData', dataController.getData)

module.exports = router