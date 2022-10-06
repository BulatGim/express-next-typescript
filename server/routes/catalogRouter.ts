export {}
const Router = require('express')
const router = new Router()
const catalogController = require("../controllers/catalogController")

router.post('/', catalogController.create)
router.get('/', catalogController.getAll)

module.exports = router