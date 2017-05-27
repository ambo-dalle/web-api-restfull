var express = require('express')
var router = express.Router();
var Users = require('../controllers/user_controller')

router.get('/', Users.findAllUsers)
router.get('/:id', Users.findOneUser)
router.post('/', Users.insertUser)
router.put('/:id', Users.updateUser)



module.exports = router
