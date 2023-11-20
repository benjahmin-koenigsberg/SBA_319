const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')
//const contact = require('../models/contact')



//get all
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find()
        res.status(200)
        res.json(contacts)
    } catch (err) {
        res.status(500)
        res.json({ msg: err.message })
    }

})

//get once
router.get('/:id', async (req, res) => {
   const contact = await Contact.findById(req.params.id)
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
        const newContact = await Contact.save()
        res.status(201).json(newContact)

    } catch (err) {
        res.status(400).json({ msg: err.message })
    }

})

//update once
router.patch('/:id',  async (req, res) => {
    const contact = await Contact.findById(req.params.id)

    try {
        const updatedContact = await res.contact.save()
        res.json(updatedContact)

    } catch (err) {
        res.status(400).json({ msg: err.message })
    }

})

//deleye one
router.delete('/:id', async (req, res) => {
    const contact = await Contact.findById(req.params.id)

    try {
        await res.contact.deleteOne()
        res.status(200).json({ msg: 'Deleted contact' })

    } catch (err) {
        res.status(400).json({ msg: err.message })
    }

})


// async function getSubscribers(req, res, next) {
//     let subscriber;
//     try {
//         subscriber = await Subscriber.findById(req.params.id)
//         if (subscriber == null) {
//             return res.status(404).json({ msg: 'cannot find subscirber' })
//         }
//     } catch (err) {
//         return res.status(500).json({ message: err.message })

//     }
//     res.subscriber = subscriber
//     next()
// }

module.exports = router;
