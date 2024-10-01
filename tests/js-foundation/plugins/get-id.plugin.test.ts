import { uniqueId } from '../../../src/js-foundation/plugins/get-id.plugin';

describe('plugins/get-id.plugin.ts', () => {

    test('uniqueId should return a unique id', ()=>{

        const id = uniqueId()
        expect(typeof id).toBe('string')
        expect(id.length).toBe(36)
        console.log(`unique id generated: ${id}`);
        

    })

})