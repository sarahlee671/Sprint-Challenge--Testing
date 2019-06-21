const db = require('../data/dbConfig.js');

const games = require('./gamesModel.js');

describe('games model', () => {
    beforeEach(async() => { 
        await db('games').truncate();
    })

    const mockGame = {
        title: 'AddGame',
        genre: 'Arcade',
        releaseYear: '2019'
    }

    describe('insert()', () => {
        it('should insert game', async () => {
            await games.insert(mockGame);
            const game = await db('games');
            expect(game).toHaveLength(1)
        })
    })

    describe('getAll()', () => {
        it('should get all games', async () => {
            const allGames = await games.getAll();
            expect(Array.isArray(allGames)).toBe(true)
        })
    })
})