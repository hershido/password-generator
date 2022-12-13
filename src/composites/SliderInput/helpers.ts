export function calculateWidth(value: number, minValue: number, maxValue: number): string {
   return `${(value - minValue) * (100 / (maxValue - minValue)) }%`;
}







