const os = require('os');

class HomeController {
    async index(req, res) {
        res.render('home/index', {
            'hostname': os.hostname(),
        });
    }
}

module.exports = new HomeController();