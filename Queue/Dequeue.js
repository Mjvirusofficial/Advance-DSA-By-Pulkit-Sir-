class Queue{
    constructor(){
        this.data = []
        this.first = 0;
        this.last = 0;
    }

    Enqueue(d){
        this.data[this.last] = d;
        this.last++
    }

    Dequeue(){
        if(this.isEmpty()){
            console.log("Queue Underflow..!")
        }
        this.first++;
    }

    Display(){
        for(let i = this.first; i < this.last; i++){
            console.log(this.data[i])
        }
    }

    isEmpty(){
        return this.last == 0;
    }
}

let q = new Queue();
q.Enqueue(1)
q.Enqueue(2)
q.Enqueue(3)
q.Enqueue(4)
q.Display()

q.Dequeue()
console.log('After Deleting..!')
q.Display()

q.Dequeue()
console.log('After Deleting..!')
q.Display()

q.Dequeue()
console.log('After Deleting..!')
q.Display()

q.Dequeue()
console.log('After Deleting..!')
q.Display()
console.log(q.isEmpty())