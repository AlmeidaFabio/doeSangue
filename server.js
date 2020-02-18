const express = require('express')
const server = express()
const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/doeSangue', {
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology: true
    }
)
mongoose.Promise = global.Promise

server.use(express.static('public'))
server.use(express.urlencoded({extended:true}))

const nunjucks = require('nunjucks')
nunjucks.configure('./', {
    express: server,
    noCache: true,
})


const Donors = require('./Donors')



server.get('/', async function(req, res){
    const donors = await Donors.find()

    return res.render('index.html', {donors})
})

server.post('/', async function(req, res){
    const donor = new Donors(req.body)

    await donor.save()

    return res.redirect('/')
})

server.listen(3000)