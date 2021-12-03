export function beanWaterCalculator({
  bean,
  water,
  ratio,
}: {
  bean?: number;
  water?: number;
  ratio: number;
}) {
  const calcBean = bean ? bean : water! / ratio;
  const finalAmount = water ? water : bean! * ratio;
  return { calcBean, finalAmount };
}
