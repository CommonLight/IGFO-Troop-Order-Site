const mongoose = require('mongoose')

const TroopSchema = new mongoose.Schema({
    
    trooperType: {type: String, 
        required: [true, `A trooper type is required.`]},
 
    trooperWeapon: {type: String,
        required: [true, `You must choose a weapon for your troops.`]},

    trooperArmor: {type: String, 
        required: [true, `You must specify an armor type for your troops.`]},
    
    // trooperGear: {type: String,
    //     required: [true, `Optional gear must be specified before ordering.`]},
    
    trooperAmount: {type: String,
        required: [true, `You must indicate the amount of troops being ordered.`]},
    
    subTotal: {type: Number,
        required: [true, ``]},

    taxAmount: {type: Number,
        required: [true, ``]},

    grandTotal: {type: Number,
        required: [true, ``]}
    
}, {timestamps: true})

module.exports = mongoose.model('Troop', TroopSchema)