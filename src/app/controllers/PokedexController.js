const containerId = require('../services/hostInformation');
const randomPokenea = require('../services/randomPokenea');
const pokeneas = require('../data/pokeneaSample')

class PokedexController {
    async pokeneaJson(req, res) {
        const pokenea = randomPokenea(pokeneas);
        
        const response = {
            'containerId': containerId(),
            'pokenea': pokenea.basicInfo(),
        };

        res.json(response);
    }

    async pokeneaImageAndPhrase(req, res) {
        const pokenea = randomPokenea(pokeneas);

        res.render('pokenea/imageAndPhrase', {
            'containerId': containerId(),
            'pokenea': pokenea.imageAndPhrase(),
        });
    }
}

module.exports = new PokedexController();