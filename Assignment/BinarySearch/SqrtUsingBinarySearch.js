function sqrtUsingBinarySearch(n) {
  let l = 1;
  let r = n;
  let ans = 0;
  while(l <= r){
    let mid = Math.floor(l+(r-l)/2);
    if(mid*mid == n) return mid;
    if(mid*mid > n){
        r = mid-1;
    }
    else{
        l = mid+1;
        ans = mid;
    }
  }
    return ans;
}

console.log(sqrtUsingBinarySearch(82))