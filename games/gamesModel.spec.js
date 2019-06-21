const db = require('../data/dbConfig.js');

const games = require('./gamesModel.js');

describe('games model', () => {
    beforeEach(async() => { 
        await db('games').truncate();
    })

    describe('add()', () => {
        it('should insert donation', async () => {
            await games.add(mockDonation);
            const game = await db('games');
            expect(game).toHaveLength(1)
        })
    })

    describe('getAll()', () => {
        it('should get all donations', async () => {
            const allGames = await games.getAll();
            expect(Array.isArray(allDonations)).toBe(true)
        })
    })
})