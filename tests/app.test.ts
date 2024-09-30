
// A A A => Arange Act Assert

describe('App', ()=>{
    test('should be 30', ()=>{

        //! Arrange: Aqui vamos a preparar todo lo que vamos a probar e el test
        const num1 = 20
        const num2 = 20

        //! Act: Aqui definimos el proceso de actuar
        const result = num1 + num2

        //! Assert: Aqui definimos los resultados esperados
        expect(result).toBe(40)

    })
})