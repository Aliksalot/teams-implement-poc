
const getData = (req, res) => {
    console.log('request for date of birth of', req.body)
    res.send({city: 'Sofia'})
}

const sendData = (req, res) => {
    console.log(req.body)
}

module.exports = 
{
    getData,
    sendData
}