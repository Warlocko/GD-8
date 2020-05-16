const assert = require('assert')
const BankAccount = require('../app/models/BankAccount')

describe('Pruebas para operaciones de cuentas de banco', () => {
    describe('#Current', () => {
        let testAccount = new BankAccount()
        it('Debería regresar el valor de la cuenta', () => {
            assert.equal(0, testAccount.current())
        })
    })

    describe('#Append', () => {
        it('Debería sumarle una cantidad al valor de la cuenta', () => {
            let testAccount = new BankAccount()
            testAccount.append(200)
            assert.equal(200, testAccount.current())
        })

        it('El valor de la cuenta no debería cambiar porque el valor es negativo', () => {
            let testAccount = new BankAccount()
            testAccount.append(-200)
            assert.equal(0, testAccount.current())
        })
    })

    describe('#Sub', () => {
        it('Debería restarle una cantidad al valor de la cuenta', () => {
            let testAccount = new BankAccount()
            testAccount.sub(200)
            assert.equal(-200, testAccount.current())
        })

        it('El valor de la cuenta no debería cambiar porque el valor es negativo', () => {
            let testAccount = new BankAccount()
            testAccount.sub(-200)
            assert.equal(0, testAccount.current())
        })
    })

    describe('#merge', () => {
        let testAccountA = new BankAccount()
        let testAccountB = new BankAccount()
        let resultValue = 80

        testAccountA.append(100)
        testAccountB.sub(20)

        testAccountA.merge(testAccountB)

        it('Debería juntar el saldo de las dos cuentas', () => {
            assert.equal(resultValue, testAccountA.current())
        })

        it('Debería juntar la historia de las dos cuentas', () => {
            assert.deepEqual([{type:'append', amount:100},{type:'sub',amount:20}], testAccountA.history())
        })
    })

    describe('#merge', () => {
        let testAccountA = new BankAccount()
        let resultHistory = [{type:'append', amount:100},{type:'sub',amount:20},{type:'append',amount:200}]

        testAccountA.append(100)
        testAccountA.sub(20)
        testAccountA.append(200)

        it('Debería mostrar la historia de transacciones de una cuenta', () => {
            assert.deepEqual(resultHistory, testAccountA.history())
        })
    })

})
