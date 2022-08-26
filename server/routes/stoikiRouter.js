const Router = require('express')
const router = new Router()
const stoikiController = require("../controllers/stoikiController")

router.post('/', stoikiController.create)
router.get('/:id', stoikiController.getOne)
router.get('/getByCatalogId/:id', stoikiController.getByCatalogId)

module.exports = router