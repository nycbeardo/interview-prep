function countWays(n) {
    if (n < 0) {
        return 0;
    } else if (n === 0) {
        return 1;

    } else {
        console.log(countWays(n - 1) + countWays(n - 2) + countWays(n - 3));

    }
}
