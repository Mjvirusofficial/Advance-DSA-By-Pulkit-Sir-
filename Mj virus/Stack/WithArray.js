class Stack {
    constructor() {
        this.data = []
        this.index = 0;
    }

    push(element) {
        this.data[this.index] = element;
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
}

let s = new Stack();
s.push(1)
s.push(2)
s.push(3)
s.push(4)

console.log(s.data)
s.pop()
console.log(s.data)
