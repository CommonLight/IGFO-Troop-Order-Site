const Profile = require('../models/profile.model')

module.exports = {
    // CREATE //
        createProfile: (request, response) => {
            Profile.create(request.body)
                .then((newProfile) => {response.status(200).json(newProfile)})
                .catch((error) => {response.status(400).json(error)})},
    
    // READ //
        getAllProfiles: (request, response) => {
            Profile.find()
                .then((allProfiles) => {response.status(200).json(allProfiles)})
                .catch((error) => {response.status(400).json(error)})},
    
        getOneProfile: (request, response) => {
            Profile.findById({_id:request.params.id})
                .then((oneProfile) => {response.status(200).json(oneProfile)})
                .catch((error) => {response.status(400).json(error)})},
    
    // UPDATE //
        updateProfile: (request, response) => {
            Profile.findByIdAndUpdate({_id:request.params.id}, request.body, {new: true, runValidators: true})
                .then((updatedProfile) => {response.status(200).json(updatedProfile)})
                .catch((error) => {response.status(400).json(error)})},
    
    // DELETE //
        deleteProfile: (request, response) => {
            Profile.findByIdAndDelete({_id:request.params.id})
                .then((result) => {response.status(200).json(result)})
                .catch((error) => {response.status(400).json(error)})}
    }
    