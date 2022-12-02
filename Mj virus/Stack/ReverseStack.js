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

    Transfer(a, b) {
        while (!a.isEmpty()) {
            b.push(a.pop())
        }
    }
}

let s = new Stack();
s.push(2)
s.push(4)
s.push(6)
s.push(8)

console.log(s.data)

function Reverse(s) {
    let s2 = new Stack();
    s.Transfer(s, s2)

    let s3 = new Stack();

    s.Transfer(s2, s3)
    s.Transfer(s3, s)

    return s;
}

s = Reverse(s);
console.log(s.data)
