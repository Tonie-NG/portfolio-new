//Imports
const express = require('express')
const app = express()
const port = process.env.PORT|| 5000

//static
app.use(express.static('h'))
app.use(express.static(__dirname + 'h'))
app.use(express.static(__dirname + 'h'))
app.use('/assets'+'/images', express.static(__dirname + 'h/assets/images'))

app.get('', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})





//Listen
app.listen(port, () => console.info(`Listening at port ${port}`))


