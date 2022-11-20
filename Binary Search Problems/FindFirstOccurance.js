function FindFirstOccurance(a,x){
    let l = 0;
    let r = a.length;

    let firstOccurance = 0;
    while(l < r){
        let mid = Math.floor(l+(r-l)/2)
        let ans = a[mid]
        if(ans == x){
            firstOccurance = mid;
            r = mid-1;
        }

        if(ans > x){
            r = mid-1;
        }

        else{
            l = mid+1;
        }
    }

    return firstOccurance;
}
    
let a = [1,2,2,2,3,4,5,5,6,7]
console.log(FindFirstOccurance(a,5))