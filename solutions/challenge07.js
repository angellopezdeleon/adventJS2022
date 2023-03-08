function getGiftsToRefill(a1, a2, a3) {
	
    let combinedArray = Array.from(new Set(a1)).concat(
        Array.from(new Set(a2)),
        Array.from(new Set(a3))
    );

    return combinedArray.filter(function (element) {
        return combinedArray.indexOf(element) === combinedArray.lastIndexOf(element);
    });
}
