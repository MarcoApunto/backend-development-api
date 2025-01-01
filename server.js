const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')

const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

const app = express()

// Middleware
app.use(express.json())
// Middleware para urlencoded
app.use(express.urlencoded({ extended: false }))

// DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
	.connect(db)
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize())

// Passport Config
require('./config/passport')(passport)

// Use Routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Server running on port ${port}`))