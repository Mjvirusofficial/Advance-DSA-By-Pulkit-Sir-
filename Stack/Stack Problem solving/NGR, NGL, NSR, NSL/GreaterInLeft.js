function GreaterInLeft() {
    let ans = []
    let s = []

    for(let i = 0; i <= a.length-1; i++){
        while(a[i] > s[s.length-1]){
            s.pop()
        }

        ans[i] = s.length == 0 ? -1 : s[s.length-1]
        s.push(a[i])
    }

    return ans;
}

let a = [1,3,5,8,7]
console.log(GreaterInLeft(a))

// Input : [1,3,5,4,7]
// Output: [-1,-1,-1,-1,8]