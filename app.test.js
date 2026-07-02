const calcul = require('./app');

// Ton test existant (qui couvre le 'else')
test('adds 1 + 2 to equal 3', () => {
  expect(calcul(1, 2)).toBe(3);
});

// NOUVEAU TEST : pour couvrir le 'if (a > 10)'
test('adds numbers when a is greater than 10', () => {
  expect(calcul(11, 2)).toBe(13);
});
