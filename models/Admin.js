const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
Username: {
    type: String,
    required: true
},
Password: {
    type: String,
    required: true
}
})

module.exports = mongoose.model('Admin', AdminSchema)