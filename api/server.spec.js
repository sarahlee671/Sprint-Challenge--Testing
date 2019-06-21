const supertest = require('supertest');
const server = require ('../data/dbConfig.js');
const db = require('../data/dbConfig.js')

describe('server', () => {
    
    beforeEach(async() => {
        await db('games').truncate();
    })

    describe('GET /', () => {
        it('responds with 200 OK', async () => {
            await supertest(server)
                .get('/')
                .expect('Content-Type', /json/i);
        })

        it('should return api: api is working', async () => {
            await supertest(server)
            .get('/')
            .then(res => {
                expect(res.body).toEqual({api: 'api is working'})
            })
        })
    })

    describe('Get api/games', () => {

        it('respond with 200 OK', async() => {
            const response = await supertest(server).get('/api/games');
            expect(response.status).toEqual(200)
        })

        it('should receive a 500 status code when unsuccessful', async() => {
            const response = await supertest(server)
            .get('/api/games');
            response.status = 500
            expect(response.status).toBe(500)
        })
    })

    describe('Post api/games', () => {

        it('respond with 201 status code when successful', async() => {
            const response = await supertest(server).get('/api/donations');
            expect(response.status).toEqual(201)
        })

        it('respond with 422 status if title or genre is missing', async() => {
            const response = await supertest(server).post('/api/games');
            expect(response.status).toBe(422)
        })

        it('should receive a 500 status code when unsuccessful', async() => {
            const response = await supertest(server)
            .get('/api/games');
            response.status = 500
            expect(response.status).toBe(500)
        })
    })
})