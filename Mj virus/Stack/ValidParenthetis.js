function ValidParenthetis(a) {
    let Stack = []
    for (let i = 0; i < a.length; i++) {
        let LEOF  = Stack[Stack.length-1]
        if(a[i] == '(' || a[i] == '{' || a[i] == '['){
            Stack.push(a[i])
        }
        else if(LEOF == '(' && a[i] == ')' ||  LEOF == '{' && a[i] == '}' || LEOF == '[' && a[i] == ']'){
            Stack.pop();
        }

        else{
            return false;
        }
    }

    if(Stack.length == 0){
        return true;
    }
    else{
        return false;
    }
}

let s = '(()))';
console.log(ValidParenthetis(s))

let s2 = '(())';
console.log(ValidParenthetis(s2))