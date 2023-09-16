const request = require('supertest')

describe('masukkan pet id', () => {
    it('masukkan file', async() => {
        const response = request ('https://petstore.swagger.io/v2')
        .post('/pet/{petId}/uploadImage')
        .send({
            "pet id":"01",
            "additional metadata":"123123",
            "file":"file"
            
        })
        console.log((await response).status)
        console.log((await response).body)
    })
})