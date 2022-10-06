export {}
const Router = require('express')
const router = new Router()
const mailController = require("../controllers/mailController")

router.post('/form', mailController.mailForm)
router.post('/stand', mailController.mailStand)

module.exports = router