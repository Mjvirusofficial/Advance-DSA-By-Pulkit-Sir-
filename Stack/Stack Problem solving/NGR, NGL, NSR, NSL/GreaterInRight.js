function GreaterInRight(a) {
    let nge   = []
    let stack = []

    for (let i = a.length-1; i >= 0; i--) {
        while (stack.length && stack[stack.length-1] <= a[i]) {
            stack.pop()
        }

        nge[i] = stack.length == 0 ? -1 : stack[stack.length-1]
        stack.push(a[i])
    }

    return nge;
}

let a = [1,3,5,4,7]
console.log(GreaterInRight(a))

// Input : [1,3,5,4,7]
// Output: [3,5,7,7,-1]