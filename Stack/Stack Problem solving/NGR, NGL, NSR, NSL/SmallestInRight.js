function SmallestInRight(a) {
    let ans = []
    let s = []

    for (let i = a.length - 1; i >= 0; i--) {
        while (s[s.length - 1] >= a[i]) {
            s.pop()
        }

        ans[i] = s.length == 0 ? -1 : s[s.length - 1]
        s.push(a[i])
    }
    return ans;
}

let a = [1, 3, 5, 8, 7]
console.log(SmallestInRight(a))

// Input : [1,3,5,4,7]
// Output: [-1,-1,-1,7,-1]