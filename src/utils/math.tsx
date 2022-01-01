export function beanWaterCalculator({
  bean,
  water,
  ratio,
}: {
  bean?: number;
  water?: number;
  ratio: number;
}) {
  const beanWeight = bean ? bean : water! / ratio;
  const waterVolume = water ? water : bean! * ratio;
  return { beanWeight, waterVolume };
}

export function roundToInteger(input: number) {
  return Math.round(input).toString();
}
