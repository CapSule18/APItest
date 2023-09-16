const { expect } = require('chai')
const request = require('supertest')

describe('post request example', () => {
    const response = request ('https://petstore.swagger.io/v2')
    .post('/user')
    .send({
        "id": 0,
        "username": "sule",
        "firstName": "albert",
        "lastName": "sule",
        "email": "233@gmail.com",
        "password": "12345",
        "phone":"0990090809800 ",
        "userStatus": 0
    })
    
    it('response status equal to 200', async () => {
        //response status harus sama dengan code 200
        expect((await response).status).to.equal(200)
        })

    it('response body to haveownproperty', async () => {
        //dalam response body terdapat status massage
        expect((await response).body).to.haveOwnProperty('message')
        })

        //reporting in mochawesome


})