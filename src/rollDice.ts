export function rollDice(dice: number, sides: number): number[] {
  if (dice < 1 || !Number.isInteger(dice)) {
    throw new Error('Invalid dice.');
  }

  if (sides < 2 || !Number.isInteger(sides)) {
    throw new Error('Invalid sides.');
  }

  const results = new Array(dice);

  for (let i = 0; i < dice; i += 1) {
    results[i] = Math.ceil(Math.random() * sides);
  }

  return results;
}
