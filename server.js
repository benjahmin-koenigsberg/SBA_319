const express = require('express')
const seedDb = require('./seedDb.js')

require('dotenv').config()

const app = express()

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, { dbName: 'mern-tutorial'})

const db = mongoose.connection
db.on('error', (error) => console.log(error))

db.once('open', () => console.log('Connected to database 🗄️'))

app.use(express.json())

const contactRouter = require('./routes/contacts')
app.use('/contacts', contactRouter)

//seedDb()

app.listen(5000, () => { console.log('Server is running 🚀') })
