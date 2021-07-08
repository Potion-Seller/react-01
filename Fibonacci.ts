function Fibonacci(n: number): number {

    if ((n == 0) || (n == 1)) {
        return n;
    }
    else {
        return (Fibonacci(n - 1) + Fibonacci(n - 2));
    }
}

console.log(Fibonacci(6));
