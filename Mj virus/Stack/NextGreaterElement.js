function NextGreaterElement(a) {
    //First we need to make two Stack;
    let NGE = [] // First is 4 Output;

    // Second for pushing() and poping();
    let Stack = [] 

    // Start a loop for accessing array element 
    for(let i = a.length-1; i >= 0; i--){  //Start with reverse order becoz Stack is LIFO;

        // Start a while loop, condition if element of array is >= First element of Stack;
        while(a[i] >= Stack[Stack.length-1] ){
            Stack.pop();
        }

        // if condition is fail then check next condition and push value into NGE Stack;
        NGE[i] = Stack.length == 0 ? -1 : Stack[Stack.length-1]

        // Push array element in Stack;
        Stack.push(a[i])
    }

    return NGE;
}

let a = [1,3,2,4] //Output: [3,4,4,-1]
console.log(NextGreaterElement(a))