export const convertTimestampToFullNameDay = (timestamp: number): string => {
    const dtObject = new Date(timestamp * 1000); 
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[dtObject.getUTCDay()];
    const hour12hrFormat = dtObject.toLocaleString('en-US', { hour: 'numeric', hour12: true }).replace(/^0/, '');
    const customFormat = `${dayOfWeek} ${hour12hrFormat}`;
    return customFormat;
}

export const convertTimestampToShortDayName = (timestamp: number): string => {
    const dtObject = new Date(timestamp * 1000); 
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeek = daysOfWeek[dtObject.getUTCDay()];
    const customFormat = `${dayOfWeek}`;
    return customFormat;
}