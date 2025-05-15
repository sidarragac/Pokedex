const containerId = require('../services/hostInformation');

class HomeController {
    async index(req, res) {
        res.render('home/index', {
            'hostname': containerId(),
        });
    }
}

module.exports = new HomeController();