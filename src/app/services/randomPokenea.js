function randomPokenea(pokeneas) {
    const length = pokeneas.length;
    const randomIndex = Math.floor(Math.random() * length);
    return pokeneas[randomIndex];
}

module.exports = randomPokenea;