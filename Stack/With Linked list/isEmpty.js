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

    isEmpty(){
        return this.len == 0;
    }

    push(x){
        let newNode = new Node(x);
        newNode.next =  this.head;
        this.head = newNode;

        this.len++;
    }
}

let s = new Stack();
console.log(s.isEmpty())
s.push(12)
console.log(s.head.data)
console.log(s.isEmpty())
