export const decimals = (num: string | number, d: number, maxDecimals = 6) => {
    if (!num) return 0;
    if (Number(num) < 1) {
        return (Math.floor(Number(num) * 10 ** maxDecimals) / 10 ** maxDecimals);
    }
    return (Math.floor(Number(num) * 10 ** d) / 10 ** d).toLocaleString();
}