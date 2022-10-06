export {}
const Router = require('express')
const router = new Router()

const mailRouter = require("./mailRouter")
const stoikiRouter = require('./stoikiRouter')
const catalogRouter = require('./catalogRouter')
const casesRouter = require("./casesRouter")


router.use('/mail', mailRouter)

router.use('/stands', stoikiRouter)

router.use('/catalog', catalogRouter)

router.use('/cases', casesRouter)


module.exports = router;