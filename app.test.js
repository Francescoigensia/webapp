const calcul = require('./app');

test('adds 1 + 2 to equal 3', () => {
    expect(calcul(1, 2)).toBe(3);
});

// Ajout du test pour couvrir le "if (a > 10)"
test('adds 15 + 5 to equal 20', () => {
    expect(calcul(15, 5)).toBe(20);
});
