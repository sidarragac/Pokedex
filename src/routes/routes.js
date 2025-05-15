const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/HomeController');
const pokedexController = require('../app/controllers/PokedexController');

router.get('/', homeController.index);
router.get('/pokedex/json', pokedexController.pokeneaJson);
router.get('/pokedex/imageAndPhrase', pokedexController.pokeneaImageAndPhrase);

module.exports = router;