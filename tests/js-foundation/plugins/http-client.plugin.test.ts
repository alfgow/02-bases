import { httpClient } from '../../../src/js-foundation/plugins';

describe('http-client.plugin', ()=>{

    test('http-client-plugin should return a string', async()=>{

        const data = await httpClient.get('https://jsonplaceholder.typicode.com/todos/1')
        expect(data).toEqual(
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": expect.any(Boolean),
            }
        )

    })

    test('httClient should have POST, PUT and DELETE methods',()=>{
        expect(httpClient.post).toBeDefined()
        expect(httpClient.put).toBeDefined()
        expect(httpClient.delete).toBeDefined()
    })

})