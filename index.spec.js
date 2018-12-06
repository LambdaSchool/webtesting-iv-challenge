const request = require('supertest')
const server = require('./index')

describe('index.js', ()=> {
    it('should run the tests', () =>{
        expect(true).toBeTruthy()
    })

    describe('/ route', () =>{
        it('should return status code 200', async()=>{
            let response = await request(server).get('/')
            expect(response.status).toBe(200)
        })

       it('should return JSON', async ()=>{
        let response = await request(server).get('/')
        expect(response.type).toBe('application/json')
    }) 
    })

    
})
