const router = require('express').Router();
const Consumer = require('../controller/consumer-controller');

router.post('/consumer', Consumer.CREATE);
router.get('/consumer', Consumer.READ);
router.get('/consumer/:id', Consumer.READID);
router.put('/consumer/:id', Consumer.UPDATE);
router.delete('/consumer/:id', Consumer.DELETE);

module.exports = router;