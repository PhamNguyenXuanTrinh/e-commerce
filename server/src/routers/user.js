const ctrl = require('../controllers/user')
const express = require('express')
const router = express.Router()
router.post('/register', ctrl.register) 
router.get('/login', ctrl.login) 
module.exports = router