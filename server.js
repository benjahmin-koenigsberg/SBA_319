const express = require('express')
const seedDb = require('./contacts.js')

require('dotenv').config()

const app = express()

const mongoose = require('mongoose')

//mongoose.connect(process.env.MONGO_URI , { dbName: process.env.MONGO_DB } )
mongoose.connect(process.env.MONGO_URI)

const db = mongoose.connection
db.on('error', (error) => console.log(error))

db.once('open', () => console.log('Connected to database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

const contactRouter = require('./routes/contacts')
app.use('/contacts', contactRouter)

seedDb()

app.listen(5000, () => { console.log('Server is running 🚀') })
