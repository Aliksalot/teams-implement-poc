 const getData = (req, res) => {
    console.log('request for date of birth of', req.body)
    res.send({city: 'Sofia'})
}

const sendData = (req, res) => {
    console.log(req.body)
}

const getMeetingData = (req, res) => {
    res.send()
}

const getConfig = (req, res) => {
    res.send()
}

module.exports = 
{
    getData,
    sendData,
    getConfig,
    getMeetingData
}