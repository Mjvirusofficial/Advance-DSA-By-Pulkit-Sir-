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

    push(data){
        let newNode = new Node(data)
        this.next = this.head;
        this.head = newNode;

        this.len++;
    }
}

let s = new Stack();
s.push(1)
console.log(s.head.data)
s.push(2)
console.log(s.len)