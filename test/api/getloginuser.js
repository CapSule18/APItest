const request = require('supertest')

describe('masukkan data diri', () => {
    it('masukkan nama dan password', async() => {
        const response = request ('https://petstore.swagger.io/v2')
        .get('/user/login')
        .send({
            "username" : "capsule",
            "password" : "12345"
        })
        console.log((await response).status)
        console.log((await response).body)
    })
})