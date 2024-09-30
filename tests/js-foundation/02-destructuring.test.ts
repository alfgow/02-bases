import { characters } from '../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring', () => {

    test('characters shoud contain la chona', ()=>{

        expect(characters).toContain('la chona');

    })

});