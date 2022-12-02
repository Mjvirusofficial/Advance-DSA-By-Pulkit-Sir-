// numbers are in this range
// Problem Statement 2:
// Vasya likes the number 2,3,9. Therefore, he considers a number pretty if its last digit is 2, 3 or 9.
// Vasya wants to watch the numbers between L and R (both inclusive), so he asked you to determine how many pretty numbers are in this range. Can you help him?
 
// Input
// The first line of the input contains a single integer T denoting the number of test cases. The description of T test cases follows.
// The first and only line of each test case contains two space-separated integers L and R.
 
// Output
// For each test case, print a single line containing one integer — the number of pretty numbers between L and R.
 
// Constraints
// 1≤T≤100
// 1≤L≤R≤105
 
// Subtasks
// Subtask #1 (100 points): original constraints
// Sample Input 1 
// 2
// 1 10
// 11 33
// Sample Output 1 
// 3
// 8
// Explanation
// Example case 1: The pretty numbers between 1 and 10 are 2, 3 and 9.
// Example case 2: The pretty numbers between 11 and 33 are 12, 13, 19, 22, 23, 29, 32 and 33.

// let T = readline();
// 	while(T--)
//  {
//    	 var count=0;
// 	    let arr=[];
//              arr = readline().split(" ");
// 	    let L = arr[0];
// 	    let R = arr[1];

// 	   // write your logic here;
// 	   while(L <= R){
//         console.log(L)
// 		  if(L == 2 || L == 3 ||L  == 9){
// 			  count++
// 		  }
// 		  L++
// 	   }
// 	  console.log(count)
//  }

function check(a){
    let count = 0;
    let l = a[0]
    let r = a[1]
    while(l <= r){
        // console.log(l%10)
        if(l%10 == 2 || l%10  == 3 ||l%10  == 9){
            count++
        }
        l++
    }
        return 'Ans is'+count;
}

let a = [1,10]
console.log(check(a))

let b = [110,330]
console.log(check(b))