function checkStepNumbers(systemNames, stepNumbers) {
    let all = {};
    let flag = true;

    systemNames.forEach((_, i) => {
        all[systemNames[i]] >= stepNumbers[i] && (flag = false);
        all[systemNames[i]] = stepNumbers[i];
    });

    return flag;
}
