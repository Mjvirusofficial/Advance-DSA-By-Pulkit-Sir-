function f(x){
    let ans = 0;
    while(x){       
        ans += x; 
        x = Math.floor(x/10)
    }
 
    return ans;
}

console.log("First function",f(11))

function f_inverse(n){
 let l = 1;
 let r = n;

 while(l < r){
    let mid = Math.floor(l+(r-l)/2)
    if(f(mid) == n){
        return mid
    }
    if(f(mid) < n){
        l = mid+1;
    }
    else{
        r = mid-1;
    }
 }
    return -1;
}

console.log(f_inverse(12))
console.log("Second function",f_inverse(12))


// [1,2,3,4,5,6,7,9,10,11]