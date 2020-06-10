const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
// bring routes
const blogRoutes = require('./routes/blog')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const tagRoutes = require('./routes/tag')
const formRoutes = require('./routes/form')
// app
const app = express()

// db
mongoose
    .connect(process.env.DATABASE_CLOUD, { 
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useFindAndModify:false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connect'))

// middlewares
app.use(morgan('dev'))
// app.use(bodyParser.json())
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(cookieParser())
// cors
app.use(cors())

// routes middleware
app.use('/api', blogRoutes)
app.use('/api', authRoutes)
app.use('/api', userRoutes)
app.use('/api', categoryRoutes)
app.use('/api', tagRoutes)
app.use('/api', formRoutes)
// port
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})