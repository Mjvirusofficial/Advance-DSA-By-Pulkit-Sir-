class Node {
    constructor(x){
        this.data = x;
        this.next = null;
    }
}

class SinglyLinkList {
    constructor(){
        this.head = null;
    }

    push(x){
        let nn = new Node(x);
        nn.next = this.head;
        this.head = nn;
    }

    display(){
        let str = '';
        let i = this.head;

        while(i){
            str += i.data + ' -> ';
            i = i.next;
        }

        console.log(str)
    }

    FindMidOfTheLinkedLIst(){
        let slow = this.head;
        let fast = this.head;

        while(fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        console.log(slow)
    }
    
}

let sl = new SinglyLinkList();
sl.push(1)
sl.push(2)
sl.push(3)
sl.push(4)
sl.push(5)

sl.display()
sl.FindMidOfTheLinkedLIst()