const express = require('express')

const router = express.Router()

const NewsletterSchema = require('../Model/NewsModel')

//API newsletter ka diiwan gelinayo 

router.post("/newsletter/create", async (req, res) => {
    const newNewsletter = NewsletterSchema(req.body)
    const saveNewsletter = await newNewsletter.save()

    if (saveNewsletter){
        res.send("Thanks for your susbcribing to our newsletter")
    }
})

module.exports = router