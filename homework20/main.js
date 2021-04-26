function factFunc(n) {
    let res = 1n;
    for (i = 1n; i <= n; i++ ){
        res = res * i;
    } return res;
}


console.log(factFunc(15));