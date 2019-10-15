const express = require('express');
const axios = require('axios');

const data = require('../data.json');

const router = express.Router();
const getAllPlayers = () => {
    return data.players;
};
const sortPlayers = (a, b) => (a.id > b.id ? 1 : -1);
const getPlayer = id => data.players.find(player => player.id == id);

const getAllPlayersFromApi = async () => {
    const response = await axios.get(process.env.API_URL);
    return response.data.players;
};
router.get('/', (req, res) => {
    const players = getAllPlayers();
    const sortedPlayers = players.sort(sortPlayers);
    res.send(sortedPlayers);
});

router.get('/dynamic/', async (req, res) => {
    const players = await getAllPlayersFromApi();
    res.send(players.sort(sortPlayers));
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const player = getPlayer(id);
    if (!player) {
        res.status(404).send(`Player ${id} not found`);
    }
    res.send(player);
});

module.exports.getAllPlayers = getAllPlayers;

module.exports = router;
