let n1 = 0, n2 = 1, next, count = 10;
console.log(n1, n2);
for (let i = 2; i < count; i++) {
    next = n1 + n2;
    console.log(next);
    n1 = n2;
    n2 = next;
}
