//import request from "supertest"
import request from 'supertest';

let payload = {
    email: "eve.holt@reqres.in",
    password: "pistol"
}

async function GET(baseUrl, endpoint, query, authToken) {
    if (!baseUrl || !endpoint) {
        throw Error(`baseUrl ${baseUrl} or endpoint ${endpoint} are mot valid`)
    }

    baseUrl = baseUrl.trim();
    endpoint = endpoint.trim()

    return await (await request(baseUrl).get(endpoint).query({}).auth(authToken, { type: "bearer" }).set("Content-type", "application/json"))

}



    /**
     * https://reqres.in
     * /api/users?page=2
     * /api/register
     */

    async function POST(baseUrl, endpoint, payload, authToken) {
        if (!baseUrl || !endpoint) {
            throw Error(`baseUrl ${baseUrl} or endpoint ${endpoint} are mot valid`)
        }

        baseUrl = baseUrl.trim();
        endpoint = endpoint.trim()

        return await request(baseUrl)
            .post(endpoint)
            .auth(authToken, { type: "bearer" })
            .set("Content-type", "application/json")
            .send(payload)

            console.log(res.body);
        
    }

    export default { GET,POST }