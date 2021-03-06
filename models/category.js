const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            max: 32
        },
        slug: {
            type: String,
            unique: true,
            index: true // Indexes support the efficient execution of queries in MongoDB. 
                        // Without indexes, MongoDB must perform a collection scan
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Category', categorySchema)