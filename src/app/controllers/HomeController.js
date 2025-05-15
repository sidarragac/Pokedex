const containerId = require('../services/hostInformation');

class HomeController {
    async index(req, res) {
        res.render('home/index', {
            'containerId': containerId(),
        });
    }
}

module.exports = new HomeController();