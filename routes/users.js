var express = require('express')
var router = express.Router();
var Users = require('../controllers/user_controller')
var helperJwt = require('../helper/verifyAccount')

router.post('/signup', Users.SignUp);
router.post('/login', Users.SignIn);

router.get('/', helperJwt.verifyAdminOnly, Users.findAllUsers)
router.get('/:id', helperJwt.verifyAdminOnly, Users.findOneUser)
router.post('/', helperJwt.verifyAdminOnly, Users.insertUser)
router.delete('/:id', helperJwt.verifyAdminOnly, Users.deleteUser)
router.put('/:id', helperJwt.verifyAminUser, Users.updateUser)



module.exports = router
