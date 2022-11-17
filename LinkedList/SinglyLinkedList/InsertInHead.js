class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.len = 0;
    }

    InsertInHead(data) {
        let NewNode = new Node(data)
        this.next = this.head;
        this.head = NewNode;
        this.len++;
    }
}

let sl = new SinglyLinkedList();
sl.InsertInHead(5)
sl.InsertInHead(4)

console.log(sl.head.data)
console.log(sl.next.data)
