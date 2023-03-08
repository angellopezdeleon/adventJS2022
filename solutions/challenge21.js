function printTable(gifts) {
    const titles = [{ name: "Gift", quantity: "Quantity" }];
    const allGifts = titles.concat(gifts);

    const longestNameLength = allGifts.reduce(
        (longest, gift) => Math.max(longest, gift.name.length),
        0
    );
    const longestQuantityLength = allGifts.reduce(
        (longest, gift) => Math.max(longest, gift.quantity.toString().length),
        0
    );

    const sumLength = longestNameLength + longestQuantityLength + 7;

    let table = "";

    const [title] = allGifts;
    table += `| ${title.name.padEnd(longestNameLength)} | ${title.quantity
        .toString()
        .padEnd(longestQuantityLength)} |\n`;

    let up = "+".repeat(sumLength);
    let down = "*".repeat(sumLength);
    let interlude = `| ${"-".repeat(longestNameLength)} | ${"-".repeat(
        longestQuantityLength
    )} |`;
    table += interlude + "\n";

    for (const gift of allGifts.slice(1)) {
        table += `| ${gift.name.padEnd(longestNameLength)} | ${gift.quantity
            .toString()
            .padEnd(longestQuantityLength)} |\n`;
    }

    return `${up}\n${table}${down}`;
}
