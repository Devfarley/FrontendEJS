var express = require('express');
var router = express.Router();
var app = express();
var jdata = require('../public/JSONdata/data')

app.use(express.json());



/* GET home page. */
router.get('/:index', (req, res, next) => {
    const index = req.params.index
    res.render('newview', { title: 'new view!', data: jdata[index].name});
});

module.exports = router;