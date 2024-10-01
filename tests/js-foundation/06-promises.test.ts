import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('js-foundation/06-promises.ts', () => {

    test('getPokemonById should retrun a pokemon', async()=>{

        const pokemonId = 4
        const pokemonName = await getPokemonById(pokemonId)
        expect(pokemonName).toBe('charmander')

    })

    test('should return an error if pokemon does not exist', async()=>{

        const pokemonId = 1000000

        try {
            await getPokemonById(pokemonId)
            expect(true).toBeFalsy()
        } catch (error) {
            expect(error).toBe(`pokemon not found with id ${pokemonId}`)
        }

    })

});