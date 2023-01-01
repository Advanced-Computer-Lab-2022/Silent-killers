const mongoose = require('mongoose')

const Schema = mongoose.Schema
const WalletSchema = new mongoose.Schema({
    TraineeID: { type: mongoose.Types.ObjectId,
        ref: 'IndividualTrainee',
        required: true
    },
    Amount: {
        type: Number,
        required: true
    }
    }, { timestamps: true })

module.exports = mongoose.model('Wallet', WalletSchema)