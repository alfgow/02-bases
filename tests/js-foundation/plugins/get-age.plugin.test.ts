import { getAge } from '../../../src/js-foundation/plugins';
var getAgePlugin = require('get-age');

describe('plugins/get-age.plugin.ts', () => {

    const birthdate = '1989-08-31'

    test('getAge should return the age of a person', ()=>{
        const age = getAge(birthdate)
        expect(typeof age).toBe('number')
    })

    test('getAge should return current age',()=>{
        const age = getAge(birthdate)
        const calculatedAge = getAgePlugin(birthdate)
        expect(age).toBe(calculatedAge)
    })
    
})