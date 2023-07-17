const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({

    
    userRank: {type: String,
        required: [true, `Your Imperial rank is required.`]},


    userName: {type: String,
        required: [true, `Your official INI (Imperial Name Identifier) is required.`],
        minlength: [5, `Your name identifier is too short.`],
        maxlength: [50, `Your name identifier is too long.`]},


    userStation: {type: String,
        required: [true, `Your current Imperial station or patrolling sector is required.`]},


    userMail: {type: String,
        required: [true, `Your official Imperial hyper-mail address is required.`],
        minlength: [5, `The indicated hyper-mail address is too short.`],
        maxlength: [50, `The indicated hyper-mail address is too long.`],
        validate: {
            validator: function (value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                return emailRegex.test(value)},
            message: `This Imperial mail address is invalid.`}},


    userPassword: {type: String,
        required: [true, `An encrypted password is required.`],
        minlength: [7, `Your password must be 7 or more characters long.`],
        maxlength: [20, `Your password cannot be longer than 20 characters.`],
        validate: {
            validator: function (value) {
                const symbolRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/
                return symbolRegex.test(value)},
            message: `Your password must contant at least one unique symbol [!@#$%^&*].`}},


    // userConfirmPassword: {type: String,
    //     required: [true, `You must confirm your password.`],
    //     validate: {
    //         validator: function (value) {
    //             console.log(this.userPassword)
    //             return value === this.userPassword},
    //         message: `The password confirmation must exactly match the password entered.`}
    //     },


}, {timestamps: true})

module.exports = mongoose.model('Profile', ProfileSchema)