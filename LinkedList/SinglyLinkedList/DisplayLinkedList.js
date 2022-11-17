class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
    }

    pushFront(d){
        let nn = new Node(d);
        nn.next = this.head;
        this.head = nn;
    }

    display(){
        let str = '';
        let i = this.head;

        while(i != null){
            str += i.data +" -> ";
            i = i.next;
        }

        console.log(str)
    }
}

let sl = new SinglyLinkedList();
sl.pushFront(4)
sl.pushFront(3)
sl.pushFront(2)
sl.pushFront(1)

sl.display()