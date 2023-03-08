function fitsInOneBox(boxes) {
    return boxes
        .sort((b1, b2) => b1.l - b2.l)
        .every(
            (box, i) =>
                i === 0 ||
                (box.l > boxes[i - 1].l &&
                    box.w > boxes[i - 1].w &&
                    box.h > boxes[i - 1].h)
        );
}
