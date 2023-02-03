function lala(func) {
    console.log(func(1000));

    console.log(lala)

    return func
}

function complex(n) {
    let result = 0;

    for(let i = 1; i <= n; i++){
        result+=i
    }

    return result
}

const cached = lala(complex)

console.log(cached(1000))
console.log(cached(1000))