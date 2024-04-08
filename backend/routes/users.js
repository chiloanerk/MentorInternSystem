var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    user1: 'Christabel',
    user2: 'Lithini',
    user3: 'Mish-Al',
    user4: 'Michael',
    user5: 'Uthmaan',
    user6: 'Vika',
    user7: 'Rele',
    user8: 'Anele',
  });
});

module.exports = router;
