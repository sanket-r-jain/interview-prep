// 1. print numbers 1 to 5 using setTimeout()

for (var i = 1; i <= 5; i++) {
    (function (i) { setTimeout(function () { console.log(i) }, 1000) })(i)
}

// 2. print the sum of numbers 1 to 10

let sum2 = 0
let count2 = 1
while (count2 <= 10) {
    sum2 += count2
    count2 += 1
}
console.log("sum", sum2) // -> sum 55

// 3. factorial of a number

function factorial(n) {
    if (n == 0) {
        return 1
    } else {
        return factorial(n - 1) * n
    }
}

console.log("factorial", factorial(5)) // -> factorial 120

// 4. 