const mongoose = require('mongoose')

const NewsletterSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    }
})

const Newsletter = mongoose.model('Newsletter', NewsletterSchema)
module.exports = Newsletter