import { rollDice } from './rollDice';

const regex: RegExp = /^(\d+)?d(\d+)$/i;

export function rollDiceCode(diceCode: string): number[] {
  const result = regex.exec(diceCode);

  if (result === null) {
    throw new Error('Invalid dice code.');
  }

  const dice = Number(result[1] ?? 1);
  const sides = Number(result[2]);

  return rollDice(dice, sides);
}
