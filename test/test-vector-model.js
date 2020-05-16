const assert = require('assert')
const vectorCalc = require('../app/models/VectorCalculator')

describe('Pruebas para calculador de vectores', () => {
    describe('#Suma', () => {
        let vectA = {x:3,y:1}
        let vectB = {x:1,y:4}
        let vectResult = {x:4,y:5}
        it('Debería regresar la suma de 2 vectores', () => {
            assert.deepEqual(vectResult,vectorCalc.sum(vectA,vectB))
        })
    })

    describe('#Sub', () => {
        let vectA = {x:3,y:1}
        let vectB = {x:1,y:4}
        let vectResult = {x:2,y:-3}
        it('Debería regresar la resta de 2 vectores', () => {
            assert.deepEqual(vectResult,vectorCalc.sub(vectA,vectB))
        })
    })

    describe('#Scalar', () => {
        let vectA = {x:3,y:1}
        let scaleFactor = 3
        let vectResult = {x:9,y:3}
        it('Debería un vector con la operación de matriz de escala aplicada', () => {
            assert.deepEqual(vectResult,vectorCalc.scale(vectA,scaleFactor))
        })
    })

    describe('#Dot', () => {
        let vectA = {x:3,y:1}
        let vectB = {x:1,y:4}
        let dotProduct = 7
        it('Debería regresar el producto punto de 2 vectores', () => {
            assert.equal(dotProduct,vectorCalc.dotProduct(vectA,vectB))
        })
    })
})