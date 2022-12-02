class Stack {
    constructor(){
        this.data = []
        this.index = 0;
    }

    push(x){
    this.data[this.index] = x;
    this.index++;
    }

    isEmpty(){
        return this.index == 0;
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.data[this.index-1]
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Stack underflow!");
        }
        this.index--
        return this.data.pop()
    }
}


const s = new Stack();
// s.push(10)
// console.log(s.data)
// console.log(s.index)
// console.log(s.isEmpty())

// s.push(5)
// s.push(1)
// console.log(s.peek())
// console.log(s.pop())
// console.log(s.pop())
