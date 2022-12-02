function MaxInArrayWithK(a,k) {
let i = 0;
let l = 0;
let r = a.length;

let max = [];

while(i < r){
    max = Math.max(max,a[i])
    if(i-l+1 < k-1){
        i++
    }
    if(i-l+1 == k){
        max = Math.max(max,a[i])
        
        i++
        l++

    }
    console.log(max)
}
    return max;
}

let k = 3;
let a = [1,2,5,2]
console.log(MaxInArrayWithK(a,3))