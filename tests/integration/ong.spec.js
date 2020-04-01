const request = require("supertest");
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', ()=>{

    beforeEach(async ()=>{
        await connection.migrate.latest();
    });

    afterAll(async ()=>{
        await connection.destroy();
    }); 

    it('should create a new ONG', async ()=>{
        const response = await request(app)
        .post('/ongs')
        .send({
                "name":"APAD2",
                "email":"contato@raul.com.br",
                "whatsapp":"2100000000",
                "city":"Rio do Sul",
                "uf":"SC" 
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

    });

});