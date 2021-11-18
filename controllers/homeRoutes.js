const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('pages/intro');

});

router.get('/homepage', (req, res) => {
    res.render('pages/homepage');

});

router.get('/intro', (req, res) => {
    res.render('pages/intro')
});

router.get('*', (req, res) =>
    res.render('pages/404.handlebars')
);

module.exports = router;

