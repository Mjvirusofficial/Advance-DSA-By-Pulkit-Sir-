function ReverseUsingRecursion(s) {
    if (s.length == 1) {
        return;
    }
    let virus = s[s.length - 1]
    s.pop()
    ReverseUsingRecursion(s)
    insert(s, virus)
    return
}

function insert(s, e) {
    if (s.length == 0) {
        s.push(e)
        return;
    }
    let mj = s[s.length - 1]
    s.pop()
    insert(s, e)
    return
}

let s = [1, 2, 3]
// insert(s, 10)
// console.log(s)


ReverseUsingRecursion(s)
console.log(s)