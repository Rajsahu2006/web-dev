let a = 8;

function fact(number) {
    let arr = Array.from(Array(number + 1).keys());

    let c = arr.slice(1).reduce((a, b) => {
        return a * b;
    });

    console.log(c);
}

fact(a);