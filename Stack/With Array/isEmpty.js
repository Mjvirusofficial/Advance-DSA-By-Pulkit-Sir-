class Stack {
    constructor(){
        this.data = []
        this.index = 0;
    }

    isEmpty(){
        return this.index == 0;
    }

    push(x){
        this.data[this.index] = x;
        this.index++;
    }
}

let s = new Stack();
console.log(s.isEmpty())

s.push(20)
console.log(s.isEmpty())
