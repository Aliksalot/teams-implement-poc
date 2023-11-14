const express = require('express')
const router = express.Router()

const path = require('path')

const pagesPath = path.join(__dirname, '../client/pages')

router.get('/home', (req, res) => {
    res.sendFile(path.join(pagesPath, 'index.html'))
})

module.exports = router