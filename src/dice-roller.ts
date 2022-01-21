export function roll(dice: number, sides: number): number[] {
  const results = new Array(dice);

  for (let i = 0; i < dice; i += 1) {
    results[i] = Math.ceil(Math.random() * sides);
  }

  return results;
}
