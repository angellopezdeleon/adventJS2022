function sortToys(toys, positions) {
    const orderedToys = toys
        .map((toy, index) => ({ toy, position: positions[index] }))
        .sort((toy1, toy2) => toy1.position - toy2.position)
        .map((toyPosition) => toyPosition.toy);

    return orderedToys;
}
