const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')



//get all
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.status(200)
        res.json(subscribers)
    } catch (err) {
        res.status(500)
        res.json({ msg: err.message })
    }

})

//get once
router.get('/:id', getSubscribers, (req, res) => {
    res.json(res.subscriber)

})

//create once
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)

    } catch (err) {
        res.status(400).json({ msg: err.message })
    }

})

//update once
router.patch('/:id', getSubscribers, async (req, res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name
    }
    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel
    }
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)

    } catch (err) {
        res.status(400).json({ msg: err.message })
    }

})

//deleye one
router.delete('/:id', getSubscribers, async (req, res) => {
    try {
        await res.subscriber.deleteOne()
        res.status(200).json({ msg: 'Deleted subscriber' })

    } catch (err) {
        res.status(400).json({ msg: err.message })
    }

})


async function getSubscribers(req, res, next) {
    let subscriber;
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({ msg: 'cannot find subscirber' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })

    }
    res.subscriber = subscriber
    next()
}

module.exports = router;
