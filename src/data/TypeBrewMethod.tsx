export interface TypeBrewMethod {
  method: string;
  grindSize: string;
  defaultCoffeeInGram: number;
  defaultWaterInMl: number;
  waterTemperature: string;
  ratio: number;
  tools: string[];
  steps: Array<{
    order: number;
    duration: number;
    instruction: string;
  }>;
}
