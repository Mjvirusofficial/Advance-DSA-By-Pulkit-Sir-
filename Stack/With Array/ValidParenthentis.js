function ValidParenthentis(s) {
    let st = []

    for (let i = 0; i <= s.length - 1; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            st.push(s[i])
        }
        else if (st[st.length - 1] == '(' && s[i] == ')' || st[st.length - 1] == '{' && s[i] == '}' || st[st.length - 1] == '[' && s[i] == ']') {
            console.log(st)
            st.pop()
            console.log(st)
        }
        else {
            return false;
        }

    }

    if (st.length == 0) {
        return true;
    }
    else {
        return false;
    }

}

s = '{((()))}';
console.log(ValidParenthentis(s))