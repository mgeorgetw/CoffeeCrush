export function pourStepsGenerator(bean: number, water: number) {
  const bloomWater = bean! * 2;
  const secondPour = water! * 0.6 - bloomWater;
  const finalPour = water! * 0.4;
  return { bloomWater, secondPour, finalPour };
}
