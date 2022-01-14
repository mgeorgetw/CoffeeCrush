export function getBeanWeightAndBrewWaterVolume({
  bean,
  water,
  ratio,
}: {
  bean?: number;
  water?: number;
  ratio: number;
}) {
  const groundCoffee = bean ? bean : water! / ratio;
  const waterVolume = water ? water : bean! * ratio;
  return { groundCoffee, waterVolume };
}

export function roundToInteger(input: number) {
  return Math.round(input).toString();
}
