// 1. print numbers 1 to 5 using setTimeout()

for (var i = 1; i <= 5; i++) {
    (function (i) { setTimeout(function () { console.log(i) }, 1000) })(i)
}

