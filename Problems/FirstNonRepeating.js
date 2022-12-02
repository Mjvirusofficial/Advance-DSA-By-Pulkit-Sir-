// Input: A = "aabc";
// Output: "a#bb";

function FirstNon(a){
  let map = {}
  for(i of a){
    map[i] = map[i]+1 ||1
  }

  for(i in a)
    if(map[a[i]] == 1)
        return a[i];

   return '#';
}


function FindSubString(a){
    let ans = "";
    for(let i = 1; i <= a.length; i++){
        let s = a.substr(0,i);
        ans += FirstNon(s)
       console.log(s)
        // console.log(ans)
    }
    return ans;
}


let a = "aabc";
console.log(FindSubString(a))
// console.log(FirstNon(a))