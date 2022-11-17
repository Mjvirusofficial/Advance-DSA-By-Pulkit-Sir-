function ColorSort(a,x) {
let l = 0;
let r = a.length;
let mid = Math.floor(l+(r-l)/2)
 
let ans = -1;

while(l < r){
   
   if(a[mid] == x){
     return mid;
   }
   if(a[mid] > a[l]){
    ans = mid;
    r = mid-1;
   }
   else{
    l = mid+1;
   }
}
    return ans;
}

let a = [4,6,7,1,2,3]
console.log(ColorSort(a,6))