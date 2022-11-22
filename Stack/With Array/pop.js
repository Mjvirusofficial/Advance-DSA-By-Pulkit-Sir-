class Stack {
    constructor(){
        this.data = []
        this.index = 0;
    }

    push(x){
        this.data[this.index] = x;
        this.index++;
    }
}

let s = new Stack();
s.push(10)
console.log(s.data,s.index)