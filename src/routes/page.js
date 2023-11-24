const express = require('express')
const router = express.Router()

const path = require('path')

const pagesPath = path.join(__dirname, '../client/pages')

router.get('/survey', (req, res) => {
    res.sendFile(path.join(pagesPath, 'survey.html'))
})

router.get('/admin-panel', (req, res) => {
    res.sendFile(path.join(pagesPath, 'admin-panel.html'))
})

router.get('/config', (req, res) => {
    res.sendFile(path.join(pagesPath, 'config.html'))
})

router.get('/config-other', (req, res) => {
    res.sendFile(path.join(pagesPath, 'config-other.html'))
})

router.get('/loading', (req, res) => {
    res.sendFile(path.join(pagesPath, 'loading.html'))
})

router.get('/about', (req, res) => {
    res.sendFile(path.join(pagesPath, 'about.html'))
})

module.exports = router