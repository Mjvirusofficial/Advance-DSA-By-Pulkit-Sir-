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
        this.rear++
    }

    pushFront(e){
        // if(this.front > 0){
        //     this.front--;
        //     this.data[this.front] = e
        // }

        this.front--;
        this.data[this.front] = e;
    }

    pop(){
        if(this.isEmpty()) return 'Queue underflow..!'
        this.rear--;
    }

    popFront(){
        if(this.isEmpty()) return 'Queue underflow..!'
        this.front++;
    }

    getFront(){
        if(this.isEmpty()) return 'Queue underflow..!'
        return this.data[this.front]
    }

    getRear(){
        if(this.isEmpty()) return 'Queue underflow..!'
        let rear = this.data[this.rear-1]
        return rear;
    }

    display(){
        for(let i = this.front; i < this.rear; i++){
            console.log(this.data[i])
        }
    }

    length(){
        return this.rear - this.front;
    }   
}

let q = new Queue()
console.log(q.isEmpty())

q.push(10)
q.push(15)
q.push(20)

q.display()

q.pushFront(5)
console.log('After pushing in front..!')
q.display()

q.pop()
console.log('Length is',q.length())
console.log('Front is',q.getFront())
console.log('Rear is',q.getRear())

q.display()
q.push(30)
console.log('--------')
q.display()

q.popFront()
console.log('After Poping front')
q.display()

q.popFront()
console.log('After Poping front 2 tyms')
q.display()

console.log('Length is',q.length())
console.log('Front is',q.getFront())
console.log('Rear is',q.getRear())