const request = require('supertest')

describe('masukkan data diri', () => {
    it('harap isi sesuai data asli anda', async() => {
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
        console.log((await response).status)
        console.log((await response).body)
    })
})