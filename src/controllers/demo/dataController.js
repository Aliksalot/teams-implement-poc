
const getData = (req, res) => {
    console.log('request for date of birth of', req.body)
    res.send({city: 'Sofia'})
}

module.exports = 
{
    getData
}