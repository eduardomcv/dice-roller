export function rollDice(dice: number, sides: number): number[] {
  if (!Number.isInteger(dice)) {
    throw new Error('dice is not an integer');
  }

  if (!Number.isInteger(sides)) {
    throw new Error('sides is not an integer');
  }

  const results = new Array(dice);

  for (let i = 0; i < dice; i += 1) {
    results[i] = Math.ceil(Math.random() * sides);
  }

  return results;
}
