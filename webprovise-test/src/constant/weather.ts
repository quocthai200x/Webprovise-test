export const windDirections: [string, number, number][] = [
    // Each entry in the directions array contains:
    // [compass direction, minimum degree, maximum degree]
    ["N", 0, 45],         // North
    ["NE", 45, 90],       // Northeast
    ["E", 90, 135],       // East
    ["SE", 135, 180],     // Southeast
    ["S", 180, 225],      // South
    ["SW", 225, 270],     // Southwest
    ["W", 270, 315],      // West
    ["NW", 315, 360]      // Northwest
];

export const typeTemputure = {
    C:"C",
    F:"F",
}