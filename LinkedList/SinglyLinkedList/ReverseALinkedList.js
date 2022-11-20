class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
    }

    PushFront(data){
        var NewNode = new Node(data)
        NewNode.next = this.head;
        this.head = NewNode;
    }

    display(){
        let str = '';
        let curr = this.head;

       while(curr){
        str += curr.data + ' -> ';
        curr = curr.next;
       }

       console.log(str)
    }

    reverse(func){
        let pre = null, curr = func;
        while(curr){
            let next = curr.next;
            curr.next = pre;
            pre = curr;
            curr = next;
        }
        
        return pre;
    }
}

let sl = new SinglyLinkedList()
sl.PushFront(4)
sl.PushFront(3)
sl.PushFront(2)
sl.PushFront(1)

let func = sl.display()
sl.reverse(func)