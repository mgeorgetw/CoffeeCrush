export interface Steps {
  type: string;
  fractionOfWater?: number;
  duration: number;
  instruction: string;
}

export interface TypeBrewMethod {
  method: string;
  learn: string;
  grindSize: string;
  defaultCoffeeInGram: number;
  defaultWaterInMl: number;
  waterTemperature: string;
  ratio: number;
  tools: string[];
  steps: Array<Steps>;
}
