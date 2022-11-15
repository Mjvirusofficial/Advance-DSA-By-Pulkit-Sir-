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
        NewNode.next = this.head;
        this.head = NewNode;
        this.len++;
    }

    DisplayAllNode() {
        let str = '';
        let i = this.head;

        while (i != null) {
            str += i.data + ' -> ';
            i = i.next;
        }

        console.log(str)
    }
}

let sl = new SinglyLinkedList();
sl.InsertInHead(5)
sl.InsertInHead(4)
sl.InsertInHead(3)
sl.InsertInHead(2)
sl.InsertInHead(1)

// console.log(sl.head.data)
// console.log(sl.next.data)

sl.DisplayAllNode()