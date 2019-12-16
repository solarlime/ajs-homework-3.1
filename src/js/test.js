import damageLevel from './app';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Мечник', health: 30 }, 'wounded'],
  [{ name: 'Лучник', health: 10 }, 'critical'],
])('should return a damage level', (input, expected) => {
  const received = damageLevel(input);
  expect(received).toBe(expected);
});
