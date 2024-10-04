const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')



app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://abuukarmuuri2018:Bakar12Som@bakarportfolio.rrb0l.mongodb.net/?retryWrites=true&w=majority&appName=BakarPortfolio").then(() => {
    console.log('Database is Connected to MongoDB')
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error)
})

//import newsletters  route
const newsletters = require("./Routes/NewsletterRoute")
app.use(newsletters)

//import Contact or hireMe me route
const ContactMe = require("./Routes/HireMeRoute")
app.use(ContactMe)




app.listen(5000, () => {
    console.log('Server is running on port 5000')
})