const express = require('express')
const router = express.Router()

const demoApi = require('./apis/demoApi')

router.use('/demo', demoApi)

module.exports = router