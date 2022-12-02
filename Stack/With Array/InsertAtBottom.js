class Stack {
    constructor() {
        this.data = []
        this.index = 0;
    }

    push(x) {
        this.data[this.index] = x;
        this.index++;
    }

    isEmpty() {
        return this.index == 0;
    }

    pop() {
        if (this.isEmpty()) {
            return 'Stack Underflow..!'
        }
        this.index--;
        return this.data.pop()
    }

    display() {
        for (let i = this.index - 1; i >= 0; i--) {
            console.log(this.data[i])
        }
    }

    // pushInLast(s,d){
    //     let s2 = new Stack();
    //     Transfer(s, s2)
    //     s.push(d)
    //     Transfer(s2, s)
    //     return s;
    // }
}

let s = new Stack();
s.push(1)
s.push(2)
s.push(3)
s.push(4)

console.log(s.data)

function Transfer(a, b) {
    while (!a.isEmpty()) {
        b.push(a.pop())
    }
}

function InsertAtBottom(s, d) {
    let s2 = new Stack();
    Transfer(s, s2)
    s.push(d)
    Transfer(s2, s)
    return s;
}

s = InsertAtBottom(s, 12)

console.log('After Inserting:- ')
console.log(s.data)

// s.pushInLast(this.data,15)

function Reverse(s){
    let s1 = new Stack();
    Transfer(s, s1)

    let s2 = new Stack();
    Transfer(s1, s2)

    Transfer(s2, s)

    return s;
}

s = Reverse(s)

console.log('After Reversing:- ')
console.log(s.data)







// console.log("After Reversing the Stack")
// function Reverse(s) {
//     let s1 = new Stack()
//     Transfer(s, s1)

//     let s2 = new Stack()
//     Transfer(s1, s2)
//     Transfer(s2, s)
// }

//Reverse(s)
//s.display()

// function InsertAtBottom(s,data){
//     let s2 = new Stack();
//     while(!s.isEmpty()){
//         s2.push(s.pop())
//     }

//     s.push(data)

//     while(!s2.isEmpty()){
//         s.push(s2.pop())
//     }

//     return s;
// }