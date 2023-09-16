const request = require('supertest')

describe('dapatkan contoh permintaan', () => {
    it('ia menemukan hewan peliharaan berdasarkan status', async() => {
        const response = request ('https://petstore.swagger.io/v2')
        .get('/store/inventory')
        console.log((await response).status)
        console.log((await response).body)
    })
})