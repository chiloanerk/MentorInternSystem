var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users: [
      'Christabel',
      'Lithini',
      'Mish-Al',
      'Michael',
      'Uthmaan',
      'Vika',
      'Rele',
      'Anele'
    ]});
});

module.exports = router;
