// Print Sub Array of sum k?
// Input:  [1,2,3,4] , sum = 4;
// Output: [[1,3],[4]]

function PrintSubArrayOfSumK(a,sum){
let first = 0;
let start = 0;
let end = a.length;

let add = 0;
let print = []

while(start < end){
    add += a[start]
    print.push(a[start])
    if(start-first+1 < sum){
        start++;
    }

    if(start-first+1 == sum){
        
    }
}
}

let a = [1,2,3,4] , sum = 4;
console.log(PrintSubArrayOfSumK(a,sum))