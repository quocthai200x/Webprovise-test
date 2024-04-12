import { windDirections } from "../constant";

export const convertFahrenheitToCelsius = (fahrenheit: number): number => {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

export function convertWindDegreesToDirection(degrees: number): string {
    for (const [direction, min, max] of windDirections) {
        if (degrees >= min && degrees < max) {
            return direction;
        }
    }
    // If the degree is outside the range (shouldn't happen in most cases), return "Unknown"
    return "Unknown";
}

