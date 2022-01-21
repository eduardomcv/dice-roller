import { rollDice } from './rollDice';

it('should roll correct number of dice', () => {
  const result1 = rollDice(2, 20);
  const result2 = rollDice(1, 6);

  expect(result1.length).toBe(2);
  expect(result2.length).toBe(1);
});

it('should roll within bounds', () => {
  const numberOfTests = 1000;
  const sides = 20;
  const rollsArray = new Array(numberOfTests);

  for (let i = 0; i < numberOfTests; i += 1) {
    rollsArray[i] = rollDice(1, sides);
  }

  rollsArray.forEach(([roll]) => {
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(sides);
  });
});

it('should throw on invalid args', () => {
  expect(() => rollDice(0, 20)).toThrow(new Error('Invalid dice.'));
  expect(() => rollDice(3.14, 20)).toThrow(new Error('Invalid dice.'));
  expect(() => rollDice(2, 3.14)).toThrow(new Error('Invalid sides.'));
  expect(() => rollDice(2, 1)).toThrow(new Error('Invalid sides.'));
});
