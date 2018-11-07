const router = require('express').Router();
const Consumer = require('../controller/consumer-controller');

router.post('/consumer', Consumer.CREATE);
router.get('/consumers/:page', Consumer.READ);
router.get('/consumer/:id', Consumer.READID);
router.get('/consumerCount', Consumer.COUNT);
router.put('/consumer/:id', Consumer.UPDATE);
router.delete('/consumer/:id', Consumer.DELETE);
router.get('/consumerfind', Consumer.SEARCH);

module.exports = router;