const express = require('express');
const router = express.Router();
const ContactModel = require("../Model/HireMeModel")


router.post("/contact/create", async (req, res) => {
    const newContact = ContactModel(req.body)
    const saveContact =  await newContact.save()

    if (saveContact){
        res.send("Thanks for reaching out to me, I'll get back to you soon.")
    }
})

module.exports = router