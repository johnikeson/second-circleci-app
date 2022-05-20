const supertest = require('supertest');
const app = require('../app');

describe('product', () => {

    describe("get product route", () => {

        describe("given product does not exist", () =>{

            it("should return 404", async () => {
                expect(true).toBe(true);
                const id = '33'

                await supertest(app).get(`/products/${id}`).expect(404);
            })
        })

    })

})