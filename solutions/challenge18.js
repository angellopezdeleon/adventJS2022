function dryNumber(dry, numbers) {
    return Array.from({ length: numbers }, (_, index) => index + 1).filter((number) =>
        (number + "").includes(dry)
    );
}
