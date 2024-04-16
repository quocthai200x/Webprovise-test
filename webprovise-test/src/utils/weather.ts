import { windDirections } from "../constant";

export function convertWindDegreesToDirection(degrees: number): string {
    for (const [direction, min, max] of windDirections) {
        if (degrees >= min && degrees < max) {
            return direction;
        }
    }
    // If the degree is outside the range (shouldn't happen in most cases), return "Unknown"
    return "Unknown";
}

export const convertKelvinToCelsius = (calvin: number): number => {
    const celsius = calvin - 273.15;
    return celsius;
}
export const convertKelvinToFahrenheit = (kelvin: number): number => {
    const fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;
    return fahrenheit;
}

export const convertMeterPerSecondToKilometerPerHour = (meterPerSecond: number): number => {
    const kilometerPerHour = meterPerSecond * 3.6;
    return kilometerPerHour;
}
export const convertMeterPerSecondToMilePerHour = (meterPerSecond: number): number => {
    const milePerHour = meterPerSecond * 2.23694;
    return milePerHour;
}

export const getAirQualityString = (level: number): string => {
    switch (level) {
        case 1:
            return "Good";
        case 2:
            return "Fair";
        case 3:
            return "Moderate";
        case 4:
            return "Poor";
        case 5:
            return "Very Poor";
        default:
            return "";
    }
}