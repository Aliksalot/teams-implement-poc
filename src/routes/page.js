const express = require('express')
const router = express.Router()

const path = require('path')

const pagesPath = path.join(__dirname, '../client/pages')

router.get('/page1', (req, res) => {
    res.sendFile(path.join(pagesPath, 'index.html'))
})

router.get('/page2', (req, res) => {
    res.sendFile(path.join(pagesPath, 'index1.html'))
})

router.get('/config', (req, res) => {
    res.sendFile(path.join(pagesPath, 'config.html'))
})

module.exports = router