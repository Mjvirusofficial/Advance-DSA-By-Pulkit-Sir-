function FindXUsingRecursion(a,x,l,r){

let mid = 0;

if(l > r){
    return mid;
}

mid = Math.floor(l+(r-l)/2)
let ans = a[mid] == x;

if(ans == x){
    return mid;
}

if(ans < x){
    mid = FindXUsingRecursion(a,x,l+1,r)
}
else{
    mid = FindXUsingRecursion(a,x,l,r-1)
}
    
}

let a = [1,2,3,4,5,6,7]
console.log(FindXUsingRecursion(a,2,0,a.length-1))