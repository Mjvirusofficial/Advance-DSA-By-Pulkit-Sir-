class Queue{
    constructor(){
        this.data  = []
        this.front = 0;
        this.rear  = 0;
    }

    isEmpty(){
        return this.front == this.rear;
    }

    pushFront(e){
        this.front--;
        this.data[this.front] = e;
    }

    popFront(){
        if(this.isEmpty()) return 'Stack Underflow';
        this.front++;
    }

    display(){
        for(let i = this.front; i < this.rear; i++){
            console.log(this.data[i])
        }
    }

    getFront(){
        return this.data[this.front]
    }
}

let q = new Queue();
q.pushFront(2)
q.pushFront(45)
q.pushFront(50)
q.display()

console.log('After poping...!')
q.popFront()
q.display()

console.log('Front is',q.getFront())
q.pushFront(20)
console.log('Front is',q.getFront())
