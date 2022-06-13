function normalize(value: number, lowerlimit: number, upperLimit: number) {
    return lowerlimit + (upperLimit - lowerlimit) * value;
}

function animateFaintSvg(
    progress: number,
    parentElement: HTMLElement,
    svgViewportHeightRatio: number,
    windowWidth: number
) {
    const progressEquivalent = normalize(progress, 0, 100);
    const displacement = (progressEquivalent / 100) * parentElement.clientHeight;
    const svgHeight = svgViewportHeightRatio * windowWidth;
    const final = displacement - svgHeight;

    return final;
}

export { normalize, animateFaintSvg };
