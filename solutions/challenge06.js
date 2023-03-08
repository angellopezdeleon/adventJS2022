function createCube(size) {
    function getLines(size, i, tri, rest) {
        return " "
            .repeat(size - i)
            .concat(tri.repeat(i))
            .concat(rest.repeat(size));
    }

    const indices = Array.from(Array(size).keys()).map((x) => x + 1);
    const lines = indices.map((i) => getLines(size, i, "/\\", "_\\"));

    lines.push(...indices.map((i) => getLines(size, i, "\\/", "_/")).reverse());

    return lines.join("\n");
}
