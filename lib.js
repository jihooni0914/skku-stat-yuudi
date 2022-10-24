function sum(numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
};

function avg(numbers) {
    return sum(numbers) / numbers.length;
}

function max(numbers) {
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}

function med(numbers, isSorted = false) {
    if (!isSorted) {
        numbers.sort((a, b) => {
            return a - b;
        });
    };

    midPoint = Math.floor((numbers.length - 1) / 2);
    if (numbers.length % 2 != 0) {
        median = numbers[midPoint];
    } else {
        median = (numbers[midPoint] + numbers[midPoint + 1]) / 2;
    };

    return median;
};

function iqr(numbers) {
    numbers.sort((a, b) => {
        return a - b;
    });


    midPoint = Math.floor((numbers.length - 1) / 2);

    if (numbers.length % 2 != 0) { // odd length
        leftEnd = midPoint;
        rightStart = midPoint + 1;
    } else { // even length
        leftEnd = midPoint + 1;
        rightStart = midPoint + 1;
    };

    leftMedian = med(numbers.slice(0, leftEnd), true);
    rightMedian = med(numbers.slice(rightStart, numbers.length), true);

    return [Math.abs(leftMedian - rightMedian), leftMedian, rightMedian];
};

function iqrAndQ1Q2Of(numbers) {
    numbers.sort((a, b) => {
        return a - b;
    });


    midPoint = Math.floor((numbers.length - 1) / 2);

    if (numbers.length % 2 != 0) { // odd length
        leftEnd = midPoint;
        rightStart = midPoint + 1;
    } else { // even length
        leftEnd = midPoint + 1;
        rightStart = midPoint + 1;
    };

    leftMedian = med(numbers.slice(0, leftEnd), true);
    rightMedian = med(numbers.slice(rightStart, numbers.length), true);

    return Math.abs(leftMedian - rightMedian);
};

function outlier(numbers) {
    // numbers.sort((a, b) => {
    //     return a - b;
    // });
    [_iqr, _leftMedian, _rigthMedian] = iqr(numbers.slice());

    numbers.forEach((n) => {
        if (n < _leftMedian - 1.5 * _iqr || n > _rigthMedian + 1.5 * _iqr) {
            console.log(n);
        }
    });
};

module.exports = {
    sum,
    avg,
    max,
    med,
    iqr,
    outlier,
}; 