const router = require('koa-router')()

router.prefix('/api/v1')

const { home } = require('../controllers')
router.get('/home', home.prepage)

const { user } = require('../controllers')
router.get('/user/login', user.auth)

module.exports = router
