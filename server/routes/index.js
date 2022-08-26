const Router = require('express')
const router = new Router()

const mailRouter = require("./mailRouter")
const stoikiRouter = require('./stoikiRouter')
const catalogRouter = require('../routes/catalogRouter')


router.use('/mail', mailRouter)

router.use('/stands', stoikiRouter)

router.use('/catalog', catalogRouter)


module.exports = router;