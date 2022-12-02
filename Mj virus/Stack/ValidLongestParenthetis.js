function ValidLongestParenthetis(a) {
    let ans = 0;
    let s = [];

    for(let i = 0; i < a.length; i++){
        let LEOF  = s[s.length-1]
        if(a[i] == '(' || a[i] == '{' || a[i] == '['){
            s.push(a[i])
        }
       
        else if(LEOF == '(' && a[i] == ')' ||  LEOF == '{' && a[i] == '}' || LEOF == '[' && a[i] == ']'){
            s.pop();
            ans += 2;
        }
    }

    if(s.length != 1) ans -= 2;
  
    return ans;
}

let s = "()(()"; // Output = 2;
console.log(ValidLongestParenthetis(s))

let s2 = "(()" // Output = 2;
console.log(ValidLongestParenthetis(s2))