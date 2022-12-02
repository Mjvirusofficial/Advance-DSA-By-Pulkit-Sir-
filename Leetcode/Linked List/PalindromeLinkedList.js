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

    push(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;

        this.len++;
    }

    display() {
        let str = '';
        let curr = this.head;

        while (curr) {
            str += curr.data + ' -> ';
            curr = curr.next;
        }
        console.log(str)
    }

    FindMid(){
        let slow = this.head, fast = this.head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        // return slow; 
        console.log(slow)
    }
    Reverse(){
        let pre = null;
        let curr = this.head;

        while(curr){
            let next  = curr.next;
            curr.next = pre;
            pre  = curr;
            curr = next;
        }
        // return pre;
        console.log(pre)
    }

}

let sl = new SinglyLinkedList();
sl.push(1)
sl.push(2)
sl.push(22)
sl.push(1)

sl.display()
// sl.Reverse()


function Compare()