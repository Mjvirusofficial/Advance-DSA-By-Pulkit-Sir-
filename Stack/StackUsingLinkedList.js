class Node {
    constructor(x){
        this.data = x;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.head = null;
        this.len = 0;
    } 

    push(x){
        let newNode = new Node(x)
        newNode.next = this.head;
        this.head = newNode;

        this.len++;
    }

    isEmpty(){
        return this.len == 0;
    }

    peek(){
        //this.isEmpty() ?  null :  this.head.data;
        if(this.isEmpty()){
            return null
        }
        return this.head.data;
    }

    pop(){

        if(this.isEmpty()){
            throw new Error("Stack Underflow!")
        }
        let popValue = this.head.data;
        this.head = this.head.next;
        this.len--

        return popValue;
    }
}

let s = new Stack();
s.push(1)
s.push(0)


console.log(s.head.data)
console.log(s.len)
console.log(s.isEmpty())

console.log(s.peek())

s.push(2)
s.push(4)

console.log(s.pop())
console.log(s.pop())
console.log(s.pop())
console.log(s.pop())