function highAndLow(string) {
    const numbers = string.split('  ');
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);

    return `${max}  ${min}`;
}