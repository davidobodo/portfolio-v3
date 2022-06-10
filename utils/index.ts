function normalize(value: number, lowerlimit: number, upperLimit: number) {
    return lowerlimit + (upperLimit - lowerlimit) * value;
}

export { normalize };
