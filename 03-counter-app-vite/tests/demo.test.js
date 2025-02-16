describe('Pruebas en <DemoComponent/>', () => {

    test('Esta prueba no debe de fallar', () => {

        /*if (1 === 0)
        {
            throw new Error("NO se puede dividir por cero");
        }
        */
    
    
        // Pruebas
        // 1. Arrange - Inicializacion
        const message1 = 'Hola mundo';
    
        // 2. Add - Estimulo
        const message2 = message1.trim();
    
        // 3. Assert - Observar el comportamiento
        expect (message1).toBe(message2);
    
    } );

});


