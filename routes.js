const express = require('express');
const router = express.Router();

const Game = require('./games');

router.post('/create', Game.createUser);
router.post('/deposit', Game.depositUser);
router.post('/withdraw', Game.withdrawUser);
router.post('/play', Game.playGames);
router.post('/log', Game.historyGames);
module.exports = router;