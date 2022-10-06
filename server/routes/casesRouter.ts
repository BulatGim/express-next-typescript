export {}
const Router = require('express')
const router = new Router()
const casesController = require("../controllers/casesController")

router.post('/', casesController.createCase)
router.get('/getAllCases', casesController.getAllCases)
router.get('/getOneCase/:id', casesController.getOneCase)

module.exports = router