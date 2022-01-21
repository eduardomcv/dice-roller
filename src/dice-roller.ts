export function roll(amount: number, sides: number): number[] {
  const results = new Array(amount);

  for (let i = 0; i < amount; i += 1) {
    results[i] = Math.ceil(Math.random() * sides);
  }

  return results;
}
