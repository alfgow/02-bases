import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('js-foundation/05-factory.ts', () => {

    const uniqueId = ()=> '1234'
    const getAge = ()=> 20

    test('buildMakePerson should return a  function', ()=>{

        const makePerson = buildMakePerson({uniqueId , getAge})
        expect(typeof makePerson).toBe('function')

    })

    test('makePerson should return a person', ()=>{

        const makePerson = buildMakePerson({uniqueId , getAge})
        const person = makePerson({name: 'alfgow', birthdate: '2000-01-01'})
        expect(person).toEqual({
            id: '1234',
            name: 'alfgow',
            birthdate: '2000-01-01',
            age: 20
        })
        

    })

});