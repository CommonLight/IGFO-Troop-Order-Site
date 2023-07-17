const TroopController = require('../controllers/troop.controller')

module.exports = (app) => {
    app.get('/api/troops', TroopController.getAllTroops)
    app.get('/api/troops/:id', TroopController.getOneTroop)
    app.post('/api/troops/create', TroopController.createTroop)
    app.patch('/api/troops/update/:id', TroopController.updateTroop)
    app.delete('/api/troops/delete/:id', TroopController.deleteTroop)
}