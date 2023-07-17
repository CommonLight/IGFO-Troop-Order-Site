const Troop = require('../models/troop.model')

module.exports = {
    // CREATE //
        createTroop: (request, response) => {
            Troop.create(request.body)
                .then((newTroop) => {response.status(200).json(newTroop)})
                .catch((error) => {response.status(400).json(error)})},
    
    // READ //
        getAllTroops: (request, response) => {
            Troop.find()
                .then((allTroops) => {response.status(200).json(allTroops)})
                .catch((error) => {response.status(400).json(error)})},
    
        getOneTroop: (request, response) => {
            Troop.findById({_id:request.params.id})
                .then((oneTroop) => {response.status(200).json(oneTroop)})
                .catch((error) => {response.status(400).json(error)})},
    
    // UPDATE //
        updateTroop: (request, response) => {
            Troop.findByIdAndUpdate({_id:request.params.id}, request.body, {new: true, runValidators: true})
                .then((updatedTroop) => {response.status(200).json(updatedTroop)})
                .catch((error) => {response.status(400).json(error)})},
    
    // DELETE //
        deleteTroop: (request, response) => {
            Troop.findByIdAndDelete({_id:request.params.id})
                .then((result) => {response.status(200).json(result)})
                .catch((error) => {response.status(400).json(error)})}
    }