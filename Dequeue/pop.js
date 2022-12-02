class Queue{
    constructor(){
        this.data  = []
        this.front = 0;
        this.rear  = 0;
    }

    isEmpty(){
        return this.front == this.rear;
    }

    push(e){
        this.data[this.rear] = e;
        this.rear++;
    }
  
    pop(){
        if(this.isEmpty()) return 'Queue Underflow';
        this.rear--;
    }

    display(){
        for(let i = this.front; i < this.rear; i++){
            console.log(this.data[i])
        }
    }

    getRear(){
        return this.data[this.rear-1]
    }
}

let q = new Queue();
q.push(2)
q.push(5)
q.push(8)
q.push(20)

q.display()
console.log("Rear is", q.getRear())

q.pop()
q.display()

console.log("Rear is", q.getRear())
q.display()

q.pop()
q.pop()

console.log("After two time poping..!")
q.display()
console.log("Rear is", q.getRear())
