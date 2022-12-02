class Queue{
    constructor(){
        this.data = []
        this.front = 0;
        this.rear  = 0;
    }

    isEmpty(){
        return this.front == this.rear;
    }

    enqueue(element){
        this.data[this.rear] = element;
        this.rear++
    }

    dequeue(){
        if(this.isEmpty()) return 'Queue Underflow...!'
        let removedValue = this.data[this.front]
        this.front++;
        return removedValue;
    }

    getFront(){
        if(this.isEmpty()) return 'Queue Underflow...!'
        return this.data[this.front]
    }

    getRear(){
        if(this.isEmpty()) return 'Queue Underflow...!'
        return this.data[this.rear]
    }

    length(){
        return this.rear - this.front;
    }

    display(){
        for(let i = this.front; i < this.rear; i++){
            console.log(this.data[i])
        }
    }
}

let q = new Queue();

console.log(q.isEmpty())
console.log('Length is:- ',q.length())

q.enqueue(12)
q.enqueue(24)
q.enqueue(31)
q.enqueue(45)

q.display()
console.log(q.isEmpty())
console.log('Length is:- ',q.length())

q.dequeue()
q.dequeue()

q.display()
console.log(q.isEmpty())
console.log('Length is:- ',q.length())

console.log(q.getFront())