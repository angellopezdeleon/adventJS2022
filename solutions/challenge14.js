function getOptimalPath(path) {
    return path.reduceRight((pre, curr) => {
        return curr.map((val, index) => {
            return val + Math.min(pre[index], pre[index + 1]);
        });
    })[0];
}