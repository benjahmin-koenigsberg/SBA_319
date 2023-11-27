const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')
//const contact = require('../models/contact')


//get all
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({name: 'asc'})
        res.status(200)
        res.json(contacts)
    } catch (err) {
        res.status(500)
        res.json({ msg: err.message })
    }

})

//get contacts by prefeerd method for communication
router.get('/method/:method', async (req, res) => {

    const contacts = await Contact.find({ preferredMethod: req.params.method })

    try {
        res.status(200)
        res.json(contacts)
    } catch (err) {
        res.status(400)
        res.json({msg: err.message})
    }
})


//get once
router.get('/:_id', async (req, res) => {
    console.log(req.params._id)
   const contact = await Contact.findById(req.params._id)
    res.json(contact)

})



//create once
router.post('/', async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        preferredMethod: req.body.preferredMethod
    })
    try {
        const newContact = await contact.save()
        res.status(201).json(newContact)

    } catch (err) {
        res.status(400).json({ msg: err.message })
    }

})

//update once
router.patch('/:_id',  async (req, res) => {

let contact = await Contact.findById(req.params._id)

   contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        preferredMethod: req.body.preferredMethod
    })


    try {
        const updatedContact = await contact.save()
        res.json(updatedContact)

    } catch (err) {
        res.status(400).json({ msg: err.message })
    }

})

//delete one
router.delete('/:_id', async (req, res) => {
    const contact = await Contact.findById(req.params._id)

    try {
        await contact.deleteOne()
        res.status(200).json({ msg: 'Deleted contact' })

    } catch (err) {
        res.status(400).json({ msg: err.message })
    }

})


module.exports = router;
