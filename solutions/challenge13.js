function getFilesToBackup(lastBackup, changes) {
    return Array.from(
        new Set(
            changes
                .filter((change) => change[1] > lastBackup)
                .reduce((acc, result) => {
                    acc.push(result[0]);
                    return acc;
                }, [])
        )
    ).sort((a, b) => a - b);
}
