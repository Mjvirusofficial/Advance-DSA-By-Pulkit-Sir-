// #######Question from sliding windows#######
// Find Maximumm sum of k SubArray?
// Input: [1,2,3,4] , k = 3;
// Output: 9;

function FindMaxSum(a, k) {
    let first = 0;
    let start = 0;
    let end = a.length;

    let max = 0 , sum = 0

    while (start < end) {
        sum += a[start];

        if(start-first+1 < k) {
            start++
        }

        else if(start-first+1 == k){
            max = Math.max(max,sum)
            sum -= a[first]
            start++
            first++
        }
    }
    
    return max;
}

let a = [1, 2, 3, 4], k = 3;
console.log(FindMaxSum(a, k))