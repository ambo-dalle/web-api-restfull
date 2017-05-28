var express = require('express')
var router = express.Router();
var getMemo = require('../controllers/memo_controller')

router.get('/', getMemo.findAllMemo)
router.get('/:id', getMemo.findOneMemo)
router.delete('/:id', getMemo.deleteMemo)
router.post('/', getMemo.insertMemo)
router.patch('/:id', getMemo.updateMemo)


module.exports = router
