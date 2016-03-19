var express = require('express');
var router = express.Router();


/* GET route. */
router.get('/', function(req, res) {
  res.render('../../../src/client/index.ejs');
});


module.exports = router;
