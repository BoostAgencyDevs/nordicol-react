const toPastel = (color: string, alpha: number = 1): string => {
    const hex = color.replace('#', '');

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const pastelR = Math.round((r + 255) / 2);
    const pastelG = Math.round((g + 255) / 2);
    const pastelB = Math.round((b + 255) / 2);

    return `rgba(${pastelR}, ${pastelG}, ${pastelB}, ${alpha})`;
};

export default toPastel