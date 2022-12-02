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

function PushInLast(a,data){

    function Transfer(a,b){
        while(!a.isEmpty()){
            b.push(a.pop())
        }
    }

    let s2 = new Stack()
    Transfer(s,s2);
    s.push(data)
    Transfer(s2,s);

    return s;
}
s = PushInLast(s,15)

console.log(s.data)
