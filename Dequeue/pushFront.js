class Queue{
    constructor(){
        this.data  = []
        this.front = 0;
        this.rear  = 0;
    }

    pushFront(e){
        this.front--;
        return this.data[this.front] = e
    }

    display(){
        for(let i = this.front; i < this.rear; i++){
            console.log(this.data[i])
        }
    }

    getFront(){
        return this.data[this.front]
    }

    getRear(){
        return this.data[this.rear-1]
    }

    push(e){
        this.data[this.rear] = e
        this.rear++
    }
}

let q = new Queue();
q.pushFront(10)
q.pushFront(20)
q.pushFront(30)
q.push(50)
q.display()
console.log('Front',q.getFront())
console.log('Rear',q.getRear())