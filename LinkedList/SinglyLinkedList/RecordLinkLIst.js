//  Input : [1,2,3,4,5]
//  Output: [1,5,2,4,3]

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

class Sl {
    constructor() {
        this.head = null;
    }

    push(x) {
        let nn = new Node(x);
        nn.next = this.head;
        this.head = nn;
    }

    display() {
        let str = ''
        let i = this.head;

        while (i) {
            str += i.data + ' -> ';
            i = i.next;
        }

        console.log(str)
    }
    reverse() {
        let curr = this.head;
        let pre = null;

        while (curr) {
            let next = curr.next;
            curr.next = pre;
            pre = curr;
            curr = next;
        }

        console.log(pre)
    }


    RecordList() {
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let head2 = slow.next;
        // console.log(head2)      Linked list1  [1,2,3]
        // console.log(this.head)  Linked list2  [4,5]

        // console.log(head2)
        let cur1 = this.head;
        let cur2 = head2;
        while (cur1 && cur2) {
            let next1 = cur1.next;
            let next2 = cur2.next;

            cur1.next = cur2
            cur2.next = next1;

            cur1 = next1
            cur2 = next2
        }

        console.log(this.head)
    }
}

let sl = new Sl()
sl.push(5)
sl.push(4)
sl.push(3)
sl.push(2)
sl.push(1)

//sl.display()
//  console.log(sl.head.data)
// sl.reverse()
sl.RecordList()

