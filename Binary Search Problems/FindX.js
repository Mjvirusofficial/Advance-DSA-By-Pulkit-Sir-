function FindX(a,x){

    let l = 0;
    let r = a.length;

    while(l < r){
        let mid = Math.floor(l+(r-l))
        let ans = a[mid]

        if(ans == x) return mid;

        if(ans > x){
            r = mid-1;
        }
        else{
            l = mid+1;
        }
    }
}

let a = [1,2,3,4,5,6,7]
console.log(FindX(a,7))