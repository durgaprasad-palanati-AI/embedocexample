let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to edex world',
    });
});

var routecontroller = require('./routecontrol');


router.get('/viewmembers',routecontroller.viewmembers);//
router.get('/viewmembers2',routecontroller.viewmembers2);//
router.get('/viewmembers3',routecontroller.viewmembers3);//
router.get('/viewmembers4',routecontroller.viewmembers4);//

module.exports = router ;