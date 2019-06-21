
const express = require('express');

const server = express();

const Games = require('../games/gamesModel.js')

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'api is working' });
});

server.get('/api/games', (req, res) => {
  Games.getAll()
    .then(games => {
      res.status(200).json(games);
    })
    .catch (error => {
      res.status(500).json({message: "We ran into an error retrieving the games" })
    })
})

server.post('/api/games', async (req, res) => {
  const games = req.body;

  if (games.title) {
    try {
      const inserted = await Games.insert(games);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error creating the game' });
    }
  } else {
    res.status(422).json({ message: 'Please provide title and genre for the game' });
  }
});

module.exports = server;

