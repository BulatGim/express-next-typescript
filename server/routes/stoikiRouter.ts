export {}
const Router = require('express')
const router = new Router()
const stoikiController = require("../controllers/stoikiController")

router.post('/', stoikiController.create)
router.get('/getByCatalogId/:id', stoikiController.getByCatalogId)
router.get('/getSearchQuery', stoikiController.getByString)
router.get('/:id', stoikiController.getOne)

module.exports = router