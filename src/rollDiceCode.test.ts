import { rollDiceCode } from './rollDiceCode';

it('should roll correct number of dice', () => {
  const results1 = rollDiceCode('2d20');
  const results2 = rollDiceCode('d20');

  expect(results1.length).toBe(2);
  expect(results2.length).toBe(1);
});

it('should roll within bounds', () => {
  const numberOfTests = 1000;
  const rollsArray = new Array(numberOfTests);
  const sides = 20;

  for (let i = 0; i < numberOfTests; i += 1) {
    rollsArray[i] = rollDiceCode(`d${sides}`);
  }

  rollsArray.forEach(([roll]) => {
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(sides);
  });
});

it('should roll integers', () => {
  const numberOfTests = 1000;
  const rollsArray = new Array(numberOfTests);

  for (let i = 0; i < numberOfTests; i += 1) {
    rollsArray[i] = rollDiceCode(`d20`);
  }

  rollsArray.forEach(([roll]) => {
    expect(Number.isInteger(roll)).toBe(true);
  });
});

it('should throw on invalid dice code', () => {
  expect(() => rollDiceCode('random string')).toThrow(
    new Error('Invalid dice code.')
  );

  expect(() => rollDiceCode('2c20')).toThrow(new Error('Invalid dice code.'));
  expect(() => rollDiceCode('abc2d20abc')).toThrow(
    new Error('Invalid dice code.')
  );

  expect(() => rollDiceCode('')).toThrow(new Error('Invalid dice code.'));
});
