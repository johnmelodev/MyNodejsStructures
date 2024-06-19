const calculator = require("./calculator")

// test(o que o teste deve validar)
test('somar valores', () => {
    expect(calculator.somar(1, 1)).toBe(2)
});

test('dividir valores', () => {
    expect(calculator.dividir(4, 2)).toBe(2)
});

test('multiplicar valores', () => {
    expect(calculator.multiplicar(2, 2)).toBe(3)
});

test('subtrair valores', () => {
    expect(calculator.subtrair(4, 2)).toBe(2)
});